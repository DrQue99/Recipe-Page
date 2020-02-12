class EventRecommender {
  constructor() {
    this.events = [];
    this.users = [];
    this._savedEvents = [];
  }
  addEvent(
    eventCategory,
    eventName,
    location,
    ticketPrice,
    eventDate,
    eventTime
  ) {
    return this.events.push(
      new Event(
        eventCategory,
        eventName,
        location,
        ticketPrice,
        eventDate,
        eventTime
      )
    );
  }

  addUser(userObj) {
    return this.users.push(userObj);
  }

  addUserByName(firstName, lastName) {
    // does not recognize addUser in this function call.
    return addUser(new User(firstName, lastName));
  }

  allUsers() {
    return this.users;
  }

  saveUserEvent() {
    let usersEvents = [];
    // Allow users to save events to a personal Events array.
    for (let i = 0; i < this.events.length; i++) {
      usersEvents.push(events[i]);
    }
    return usersEvents;
  }

  deleteUser(user) {
    // Deletes a User from the system
    let i = this.users.indexOf(user);
    this.users = this.users.split(i, 1);
    return user;
  }

  deleteEvent(event) {
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
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i]._eventDate == date) {
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

    // let eventsByCategory = [];
    // for (let i = 0; i < this.events.length; i++) {
    //     if(this._eventCategory == category)
    //         eventsByCategory = eventsByCategory.push(events[i])
    // }
    // return eventsByCategory;
  }
}

class User {
  constructor(firstName, lastName) {
    this.name = firstName + " " + lastName;
  }
}

class Event {
  constructor(eventCategory, eventName, location, ticketPrice, eventDate) {
    this._eventCategory = eventCategory;
    this._eventName = eventName;
    this._location = location;
    this._ticketPrice = ticketPrice;
    this._eventDate = Date.parse(eventDate); //i.e. "March 21, 2020"
  }
}

//Debugging and test code:
const eventRecommenderApp = new EventRecommender();
const event1 = new Event(
  "Music",
  "Country Stars",
  "The Met",
  "$199",
  "Jan 02, 2020",
  "eight 0'clock"
);
console.log(event1);
//eventRecommenderApp.addUserByName("Marlan", "Manson");
const user2 = new User("Princess", "Peach");
eventRecommenderApp.addUser(user2);

//console.log(user1.name);
console.log(eventRecommenderApp.allUsers());

console.log(eventRecommenderApp.findEventsByDate("Jan 02, 2020"));

eventRecommenderApp.addUserByName("Peaches", "Christ");
//console.log(eventRecommenderApp);

if (typeof module != "undefined") {
  module.exports = { EventRecommender, User, Event };
}
