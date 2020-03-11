const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || "eventonica";
const pgp = require("pg-promise")();
const db = pgp(`postgres://localhost:5432/${DB_NAME}`);
const express = require("express");
const app = express();
const Joi = require("joi");
const morgan = require("morgan");
app.use(morgan());
//const moment = require('moment');
const path = require("path");
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//homepage route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Event Recommender"
  })
);

//static files html and css
app.use(express.static(path.join(__dirname, "public")));

//validate events input
function validateInputEvents(event) {
  const schema = {
    category: Joi.string()
      .min(3)
      .required(),
    event_name: Joi.string()
      .min(3)
      .required(),
    location: Joi.string()
      .min(3)
      .required(),
    date: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(event, schema);
}
//validate users input
function validateInputUsers(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(user, schema);
}

//display all events/users
app.get("/api/events", (req, res) => {
  db.any("SELECT * FROM events", [true])
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

app.get("/api/users", (req, res) => {
  db.any("SELECT * FROM users", [true])
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      console.error(error);
      res.sendStatus(500);
    });
});

//search events/users by id
app.get("/api/events/search", (req, res) => {
  db.result(`SELECT * FROM events WHERE event_id = $1;`, [req.body.event_id])
    .then(data => {
      res.send(data.rows[0]);
    })
    .catch(function(error) {
      res.sendStatus(500);
    });
});

app.get("/api/users/search", (req, res) => {
  db.result(`SELECT * FROM users WHERE id = $1;`, [req.body.id])
    .then(data => {
      res.send(data.rows[0]);
    })
    .catch(function(error) {
      res.sendStatus(500);
    });
});

//add event to events table in db from body
app.post("/api/events", (req, res) => {
  //validate input with function
  const { error } = validateInputEvents(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const event = {
    category: req.body.category,
    event_name: req.body.event_name,
    location: req.body.location,
    date: req.body.date
  };

  db.one(
    "INSERT INTO events (event_name, location, category, date) values ($1, $2, $3, $4) RETURNING *",
    [event.event_name, event.location, event.category, event.date]
  )
    .then(data => {
      res.send(data);
    })
    .catch(function(error) {
      res.sendStatus(500);
    });
});

//add a user to users table in db from body
app.post("/api/users", (req, res) => {
  //validate input with function
  const { error } = validateInputUsers(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = {
    name: req.body.name,
    events: req.body.events
  };

  db.one("INSERT INTO users (name) values ($1) RETURNING id, name", [user.name])
    .then(data => {
      res.send(data);
    })
    .catch(function(error) {
      res.sendStatus(500);
    });
});

//add event to user object by id

app.post("api/users/events", (req, res) => {
  const user_event = {
    id: req.body.id,
    event_id: req.body.event_id
  };

  db.result(
    "INSERT INTO user_events (id, event_id) values ($1, $2) RETURNING *",
    [user_event.id, user_event.event_id]
  )
    .then(data => {
      res.send(data);
      console.log("What is happending here");
    })
    .catch(function(error) {
      res.sendStatus(500);
    });
  //sql command: INSERT INTO user_events VALUES (id, event_id)
});

//update an existing event NOTE: This function is not yet compatible with eventonica DB.
app.put("/api/events", (req, res) => {
  //find event by id
  const event = events.find(e => e.id === parseInt(req.params.id));
  if (!event)
    return res.status(404).send("The event with the given ID was not found.");

  //validate input
  const { error } = validateInputEvents(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //update event
  (event.category = req.body.category),
    (event.name = req.body.name),
    (event.location = req.body.location),
    (event.id = req.body.id),
    (event.date = req.body.date);
  //return the updated event
  res.send(event);
});

//update an existing user: NOTE: This function is not yet compatible with eventonica DB.
app.put("/api/users", (req, res) => {
  //find user by id
  const user = users.find(e => e.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  //validate input
  const { error } = validateInputUsers(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //update user
  (user.name = req.body.name),
    // user.id = req.body.id,
    (user.events = req.body.events);
  //return the updated user
  res.send(user);
});

//delete an event from DB
app.delete("/api/events", (req, res) => {
  db.result(`DELETE FROM events WHERE event_id = $1;`, [req.body.event_id])
    .then(result => {
      res.send(result);
    })
    .catch(function(error) {
      res.sendStatus(500);
    });
});

//delete user from DB
app.delete("/api/users", (req, res) => {
  db.result(`DELETE FROM users WHERE id = $1;`, [req.body.id])
    .then(result => {
      res.send(result);
    })
    .catch(function(error) {
      res.sendStatus(500);
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
