const eventRecommenderApp = new EventRecommender();

$(document).ready(() => {
  //eventRecommenderApp.allUsers();
  eventRecommenderApp.addUserByName("Peaches", "Christ", 12345);
  eventRecommenderApp.addUserByName("Marlan", "Manson", 06667);
  eventRecommenderApp.addEvent(
    "Music",
    "Country Stars",
    "The Met",
    "$199",
    12314,
    "Jan 02, 2020"
  );
  //eventRecommenderApp.allUsers();
  eventRecommenderApp.saveUserEvent("Marlan Manson", 12314);
  displayUsers();
});

function displayUsers() {
  let displayedUser = "";
  console.log(eventRecommenderApp.users);
  for (let user of eventRecommenderApp.users) {
    displayedUser += `<li>${user.name}</li>`;
  }
  console.log(displayedUser);
  $("#all-users").html(displayedUser);
}

const eventRecommenderAppUsers = [];
for (let user of eventRecommenderApp.users) {
  eventRecommenderUsers.push(user);
}
const eventRecommenderAppEvents = [];
for (let event of eventRecommenderApp.events) {
  eventRecommenderEvents.push(event);
}

console.log(eventRecommenderApp.users);
