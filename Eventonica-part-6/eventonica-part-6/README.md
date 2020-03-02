Hello Volunteers or otherwise curious persons!

Welcome to my Eventonica App.

**First things first,** 

- Server localhost:3000/
- **Restore psql database**: ``` psql eventonica < eventonica.sql``` (the data base is currently presented as text inside of the `eventonica.sql` )
- **Navigating the database**: There are 3 tables in the Eventonica Postgres DB: 
  - ``users ( name  | id ) 
  - events ( event_id |  event_name  | category |  date  |   location) 
  - user_events ( id | event_id )``` id in user_events is a foreign key from users and event_id is a foreign key from events. You can add a user by id and their events by event_id. Event_id must always be unique per user. If you try to duplicate add an event to a user id an error will occur. 

**Testing**

- **Mocha**: run API call tests in mocha from /test directory use the command line: ``` mocha```. Start up the server using `nodemon` or `node`. Note: my mocha tests are not a completed set of API tests.
- **Postman**: API calls can be tested with postman. This project does not have a working UI so you will need to view and interact with the server and database using Postman. I have 7 http requests saved to my workspace in Postman: [Eventonica Part 6 Postman collection ](https://lively-robot-6462.postman.co/collections/10354505-ec9c8931-5394-4237-afdd-fd751a505232?version=latest&workspace=ded12046-c529-455c-81ff-17de54eceb82). The API calls will interact with the eventonica database and will update it directly. 