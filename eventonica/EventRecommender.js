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

  addUserByName(lastName, firstName) {
    return this.addUser(new User(lastName, firstName));
  }

  addUser(userObj) {
    return this.users.push(userObj);
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

const user1 = new User("Marlan", "Manson");
const user2 = new User("Princess", "Peach");

console.log(user1.name);
console.log(user1);

eventRecommenderApp.addUser("Peaches", "Christ");
console.log(eventRecommenderApp);

module.exports = EventRecommender;
