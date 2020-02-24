class EventRecommender {
  constructor() {
    this.events = [];
    this.users = [];
  }
  addEvent(
    category,
    name,
    location,
    date,
    id
  ) {
    return this.events.push(
      new Event(
        category,
        name,
        location,
        date,
        id
  
      )
    );
  }

  addUser(userObj) {
    return this.users.push(userObj);
  }

  addUserByName(firstName, lastName, userID) {
    // does not recognize addUser in this function call.
    return this.addUser(new User(firstName, lastName, userID));
  }

  allUsers() {
    return this.users;
  }

  saveUserEvent(userName, id) {
    let index = this.users.findIndex(element => element.name === userName);
    console.log(index);

    let eventObj = this.events.find(element => element.id == id);
    console.log(eventObj);
    // Allow users to save events to a personal Events array.
    this.users[index].userEvents.push(eventObj);
    console.log(this.users);
  }

  deleteUser(userID) {
    // Deletes a User from the system
    let i = this.users.indexOf(user);
    this.users = this.users.split(i, 1);
    return user;
  }

  deleteEvent(id) {
    // Deletes the Event from the system
    let i = indexOf(event);
    this.events = this.events.split(i, 1);
    return events;
  }

  allEvents() {
    return this.events;
  }

  findEventsByDate(date) {
    let eventsByDate = [];
    for (let event of this.events) {
      if (this.events[i].date == date) {
        eventsByDate = eventsByDate.push(this.events[i]);
      }
    }
    return eventsByDate;
  }

  findEventsbyCategory(category) {
    // Returns all events in a given category
    return events.filter(event => {
      return event._category.toLowerCase() === category.toLowerCase();
    });
  }
}

class User {
  constructor(firstName, lastName, userID) {
    this.name = firstName + " " + lastName;
    this.userId = userID;
    this.userEvents = [];
  }

  getUserID() {
    return this.userID;
  }
}

class Event {
  constructor(
        category,
        name,
        location,
        date,
        id,
  
  ) {
    this.category = category;
    this.name = name;
    this.location = location;
    this.id = id;
    this.date = date; //i.e. "March 21, 2020";
  }
  getFormattedDate() {
    return moment(this.date).format("MMM DD YYYY");
  }
}


// if (!moment) {
//   var moment = require("moment");
//   moment().format();
// }

const er = new EventRecommender();
er.addUserByName("Peaches", "Christ", 12345);
  er.addUserByName("Marlan", "Manson", 06667);
  er.addEvent(
    "Music",
    "Country Stars",
    "The Met",
    "Jan 02, 2020",
    12314
  );
//console.log(er.allEvents());

//export {EventRecommender, User, Event};

if (typeof module != "undefined") {
  module.exports = { EventRecommender, User, Event };
}

module.exports = {
  EventRecommender, User, Event 
};