
//Object EventRecommender
//class: User, Event, subclass: SavedEvents 
//


class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
        this._savedEvents = [];
    }
        addEvent(eventCategory, eventName, location, ticketPrice, eventDate, eventTime) {
            return this.events.push(new Event(eventCategory, eventName, location, ticketPrice, eventDate, eventTime))
        }
    
        addUser(lastName, firstName) {
            return this.users.push(new User(lastName, firstName)); 
        }
    
        saveUserEvent(){
            let usersEvents = [];
        // Allow users to save events to a personal Events array.
            for(let i = 0; i < this.events.length; i++) {
                usersEvents.push(events[i]);
        }
        return usersEvents;
        }
    
        deleteUser(users) {
        // Deletes a User from the system
            let i = indexOf(user);
            this.users = this.users.split(i, 1);
            return users;
        }
       
        deleteEvent(event) {
        // Deletes the Event from the system
           let i = indexOf(event);
           this.events = this.events.split(i, 1);
            return events
        }
    
        findEventsByDate(){
            this.events._eventDate
        }
        
        findEventsbyCategory(){
        // Returns all events in a given category
            
        }

}

class User {
    constructor(firstName, lastName){
        this.name = firstName + ' ' + lastName;
    }
}

class Event {
    constructor(eventCategory, eventName, location, ticketPrice, eventDate){
        this._eventCategory = eventCategory;
        this._eventName = eventName;
        this._location = location;
        this._ticketPrice = ticketPrice
        this._eventDate = new Date();
    

    }
    // get EventDate(mm, dd, yyyy) {

    // }
}

const event1 = new Event('Music', 'Country Stars', 'The Met', '$199', 'Jan 02, 2020', 'eight 0\'clock');
console.log(event1);

const user1 = new User('Marlan', 'Manson');
const user2 = new User ('Princess', 'Peach');
console.log(user1.name)
console.log(user1);
event1.addUser('Peaches', 'Christ');
console.log(event1);