class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [] 
    }

    addAvailableTickets(type, price) {
        return this.availableTickets.push(new TicketType(type, price));
    }

    allTickets() {
        let ticketList = []
        for(let i = 0; i < this.availableTickets.length; i++){
            ticketList.push( `${i+1}. ${this.availableTickets[i].asString()}` )
        }
        return "tickets: " + ticketList.join(" ");
    }

    listOfTickets() {
        let ticketList = []
        for(let i = 0; i < this.availableTickets.length; i++){
            ticketList.push( this.availableTickets[i].asString() )
        }
        return ticketList;
    }
    searchTickets(min, max) {
        let ticketList = []
        for(let i= 0; i < this.allTickets.length; i++) {
            if (this.allTickets.price <= price){
                ticketList.push(this.allTickets[i].asString())
                } 
            }
            return ticketList
        }
    }



class TicketType {
    constructor(type, price) {
        this.type = type;
        this.price = price;     
    }

    asString() {
        return `${this.type} (${this.price})`;
    }
}

const eventObj1 = new Event("KLOS Golden Gala", "An eveneing with hollywood vampires");
const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");


const eventArray = new Array();

//ventArray.push(eventObj1);

eventArray.push(eventObj1, eventObj2, eventObj3);

console.log(eventArray); 

$(document).ready(function() {
    let html = "";
    $.each(eventArray, function (index, event) {
        html += `<h2>${event.name} - ${event.description}</h2>`;
        $.each(event.listOfTickets(), function(index, ticket) {
            html += `<li>${index + 1}. ${ticket}</li>`;
        })
    });
    $("#event").html(html); //the documentation for this method says that .html does not take an argument.
});

eventObj2.addAvailableTickets("General Admission", 25) 
eventObj2.addAvailableTickets("Floor Seating", 80);

 eventObj3.addAvailableTickets("Orchestra", 300) 
eventObj3.addAvailableTickets("Mezzanine", 200) 
eventObj3.addAvailableTickets("Balcony", 100);


//console.log(eventObj1.allTickets("orchestra", 300))

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

let event3 = eventObj1.allTickets();
console.log(event3)
// console.log(eventObj2.allTickets());
// console.log(eventObj3.allTickets());

console.log(`Ticket search: ${event3.searchTickets(0, 200) }`)