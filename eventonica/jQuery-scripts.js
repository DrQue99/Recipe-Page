$(document).ready(() => {
  const eventRecommenderApp = new EventRecommender();
  //eventRecommenderApp.allUsers();
  eventRecommenderApp.addUserByName("Peaches", "Christ", 12345);
  eventRecommenderApp.addUserByName("Marlan", "Manson", 06667);
  eventRecommenderApp.addEvent(
    "Music",
    "Country Stars",
    "The Met",
    "$199",
    "Jan 02, 2020",
    "eight 0'clock"
  );
  //eventRecommenderApp.allUsers();
});

function displayUsers() {
  let displayedUser = "";
  for (let user of eventRecommenderApp.users)
    displayedUser += `<li>${user.userName}</li>`;

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

displayUsers();
