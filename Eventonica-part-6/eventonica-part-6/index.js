//import { EventRecommender } from '/EventRecommender.js'
const {EventRecommender, User, Event} = require("./EventRecommender")
const PORT = process.env.PORT || 3000;
const pgp = require('pg-promise')();


const db = pgp('postgres://tpl1219_7@localhost:5432/eventonica');
const er = new EventRecommender;
const express = require('express');
const app = express();

const Joi = require('joi');
//handlebars middleware
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
const morgan = require('morgan');
//const moment = require('moment');
app.use(morgan());
const path = require('path');
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'Event Recommender'
}));

const events = er.allEvents();
const users = er.allUsers();

//static files html and css
app.use(express.static(path.join(__dirname, 'public')));

//validate input
function validateInputEvents(event) {
    const schema = {
        category: Joi.string().min(3).required(),
        event_name: Joi.string().min(3).required(),
        location: Joi.string().min(3).required(),
       date: Joi.string().min(3).required(),  

    };
    return Joi.validate(event, schema);
};

function validateInputUsers(user) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(user, schema);
};


//display all events/users

app.get('/api/er', (req, res) => {
    res.send(events);
});

app.get('/api/er/users', (req, res) => {
    res.send(users);
});

//get events/users by id

app.get('/api/er/id', (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) return res.status(404).send('The event with the given ID was not found.');
    res.send(event);
});

app.get('/api/er/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id)); 
    if(!user) return res.status(404).send('The user with the given ID was not found.');;
    res.send(user);
});

// get event by keyword

app.get('/api/er/search/:keyword', (req, res) => {
    let keyword = req.params.keyword;

    jquery.ajax({
        type:"GET",
        url:`https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=${keyword}`,
        async:true,
        dataType: "json",
        success: function(json) {
          let events = json._embedded.events;
          let category = events[0].classifications[0].segment.name;
          let event_name = events[0].name;
          let location = events[0]._embedded.venues[0].name;
          let date = events[0].dates.start.localDate;
         
          res.send( events );
        },
        error: function(xhr, status, err) {
            // This time, we do not end up here!
            res.send("server error")
        }
    
    })
});

//add event to events from body
app.post('/api/events', (req, res) => {
    //validate input with function
    const {error} = validateInputEvents(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const event = {
        category: req.body.category,
        event_name: req.body.event_name,
        location: req.body.location,
        date: req.body.date
};
    db.one('INSERT INTO events (event_name, location, category, date) values ($1, $2, $3, $4) RETURNING *', [event.event_name, event.location, event.category, event.date])
    .then(data => {
        console.log("db insert success!")
        res.send(data)
    })
    .catch(function(error) {
        res.sendStatus(500)
        console.log(`db insert error ${error}`)
    });
});

//add a user to users array from body
app.post('/api/er/users', (req, res) => {
    //validate input with function
    const {error} = validateInputUsers(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = { 
        name: req.body.name,
        events: req.body.events
    };
    db.one('INSERT INTO users (name) values ($1) RETURNING userid, name', [user.name])
    .then(data => {
        console.log("db insert success!")
        res.send(data)
    })
    .catch(function(error) {
        res.sendStatus(500)
        console.log(`db insert error ${error}`)
    });

});

//add event to user object by id

// app.put('api/users/:id', (req, res) => {


//     const event = events.find(e => e.id === parseInt(req.params.id));
//     if (!event) res.status(404).send('The event with the given ID was not found.');
// });

//update an existing event
app.put('/api/er/:id', (req, res) => {

    //find event by id
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) return res.status(404).send('The event with the given ID was not found.');
    
    //validate input
    const {error} = validateInputEvents(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //update event
    event.category = req.body.category,
    event.name = req.body.name,
    event.location = req.body.location,
    event.id = req.body.id,
    event.date = req.body.date
    //return the updated event 
    res.send(event);
});

//update an existing user
app.put('/api/er/users/:id', (req, res) => {

    //find user by id
    const user = users.find(e => e.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    
    //validate input
    const {error} = validateInputUsers(req.body);
    if(error) return res.status(400).send(error.details[0].message);
   
    //update user
    user.name = req.body.name,
    // user.id = req.body.id,
    user.events = req.body.events
    //return the updated user 
    res.send(user);
});

//delete event
app.delete('/api/events', (req, res) => {
    db.result(`DELETE FROM events WHERE event_id = $1;`, [req.body.event_id])
        .then(result => {
            res.send(result)
            })
        .catch(function(error) {
            res.sendStatus(500)
    });
});

//delete user
app.delete('/api/er/users', (req, res) => {
    db.result(`DELETE FROM users WHERE id = $1;`, [req.body.id])
        .then(result => {
            res.send(result)
            })
        .catch(function(error) {
            res.sendStatus(500)
    });
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))