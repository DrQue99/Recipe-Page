//import { EventRecommender } from '/EventRecommender.js'
const {EventRecommender, User, Event} = require("./EventRecommender")

const er = new EventRecommender;
const express = require('express');
const app = express();
const Joi = require('joi');

//handlebars middleware
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// const morgan = require('morgan');
// const moment = require('moment');
//app.use(morgan);

const PORT = process.env.PORT || 3000;
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
        name: Joi.string().min(3).required(),
        location: Joi.string().min(3).required(),
       date: Joi.string().min(3).required(),  

    };
    return Joi.validate(event, schema);
};

function validateInputUsers(user) {
    const schema = {
        name: Joi.string().min(3).required(), 
        id: Joi.number().integer().min(5)
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

app.get('/api/er/:id', (req, res) => {
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
    res.send(req.params.keyword);
})

//add event to events from body
app.post('/api/events', (req, res) => {
    //validate input with function
    const {error} = validateInputEvents(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const event = {
        category: req.body.category,
        name: req.body.name,
        location: req.body.location,
        id: events.length + 1,
        date: req.body.date
};
    events.push(event);
    res.send(event);
});

//add a user to users array from body
app.post('/api/er/users', (req, res) => {
    //validate input with function
    const {error} = validateInputUsers(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    

    const user = {
        name: req.body.name,
        id: Math.floor(Math.random()*90000) + 10000,
        events: req.body.events
    };
    users.push(user);
    res.send(user);
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
app.delete('/api/er/:id', (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) return res.status(404).send('The event with the given ID was not found.');

    const index = events.indexOf(event);
    events.splice(index, 1);

    res.send(event);
});

//delete user
app.delete('/api/er/users/:id', (req, res) => {
    const user = users.find(e => e.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');

    const index = users.indexOf(user);
    users.splice(index, 1);

    res.send(user);
});



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))