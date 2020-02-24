const eventRecommenderApp = new EventRecommender();
const APIKey = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';

$(document).ready(() => {
  //eventRecommenderApp.allUsers();
  eventRecommenderApp.addUserByName("Peaches", "Christ", 12345);
  eventRecommenderApp.addUserByName("Marlan", "Manson", 06667);
  eventRecommenderApp.addEvent(
    "Music",
    "Country Stars",
    "The Met",
    "Jan 02, 2020",
    12314
  );

  eventRecommenderApp.saveUserEvent("Marlan Manson", 12314);

  displayUsers();

  displayEvents();

  $("#save-user-event").submit(function(event) {
    event.preventDefault();
    let userID = $("#save-user-id").val();
    let eventID = $("#save-event-id").val();
    eventRecommenderApp.saveUserEvent(userID, eventID);
    //console.log(eventRecommenderApp.users);
  });

 
    $("#ticket-master-search").submit(function(event) {
      event.preventDefault();
      let keyword = $("#ticket-master-search-id").val();
   
  $.ajax({
    type:"GET",
    url:`https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=${keyword}`,
    async:true,
    dataType: "json",
    success: function(json) {
      let events = json._embedded.events;
      let category = events[0].classifications[0].segment.name;
      let name = events[0].name;
      let location = events[0]._embedded.venues[0].name;
      let date = events[0].dates.start.localDate;
      let id = events.id;
      
      $("#display-ticket-master-event").html(name);
      // Parse the response.
      eventRecommenderApp.addEvent(
        category,
        name,
        location,
        date,
        id
        );
        // console.log("Inside the success: ", );
        displayEvents();
      },
    error: function(xhr, status, err) {
              // This time, we do not end up here!
            }

})
});
});

function displayUsers() {
  let displayedUser = "";
  console.log(eventRecommenderApp.users);
  for (let user of eventRecommenderApp.users) {
    displayedUser += `<li>${user.name}</li>`;
  }
  $("#all-users").html(displayedUser);
}

function displayEvents() {
  let displayedEvents = "";
  for (let event of eventRecommenderApp.events) {
    displayedEvents += `<li>${event.eventName} | Venue:  ${event.location} | ${event.eventDate} | ${event.eventTime}</li>`;
  }
  $("#all-events").html(displayedEvents);
  console.log("After events are added: ", displayedEvents);
}

// const eventRecommenderAppUsers = [];
// for (let user of eventRecommenderApp.users) {
//   eventRecommenderUsers.push(user);
// }
// const eventRecommenderAppEvents = [];
// for (let event of eventRecommenderApp.events) {
//   eventRecommenderEvents.push(event);
// }

// console.log(eventRecommenderApp.users);
