class EventRecommender {
  constructor() {
    this.events = [];
    this.users = [];
  }
  addEvent(
    eventCategory,
    eventName,
    location,
    ticketPrice,
    eventDate,
    eventID,
    eventTime
  ) {
    return this.events.push(
      new Event(
        eventCategory,
        eventName,
        location,
        ticketPrice,
        eventDate,
        eventID,
        eventTime
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

  saveUserEvent(userName, eventID) {
    let index = this.users.findIndex(element => element.name === userName);
    console.log(index);

    let eventObj = this.events.find(element => element.eventID === eventID);
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

  deleteEvent(eventID) {
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
      if (this.events[i].eventDate == date) {
        eventsByDate = eventsByDate.push(this.events[i]);
      }
    }
    return eventsByDate;
  }

  findEventsbyCategory(category) {
    // Returns all events in a given category
    return events.filter(event => {
      return event._eventCategory.toLowerCase() === category.toLowerCase();
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
    eventCategory,
    eventName,
    location,
    ticketPrice,
    eventID,
    eventDate
  ) {
    this.eventCategory = eventCategory;
    this.eventName = eventName;
    this.location = location;
    this.ticketPrice = ticketPrice;
    this.eventID = eventID;
    this.eventDate = eventDate; //i.e. "March 21, 2020"
  }
  getFormattedDate() {
    return moment(this.eventDate).format("MMM DD YYYY");
  }
}

//Debugging and test code:
//const eventRecommenderApp = new EventRecommender();

//console.log(eventRecommenderApp.findEventsByDate("Jan 02, 2020"));

//console.log(eventRecommenderApp);

// if (!moment) {
//   var moment = require("moment");
//   moment().format();
// }

if (typeof module != "undefined") {
  module.exports = { EventRecommender, User, Event };
}
