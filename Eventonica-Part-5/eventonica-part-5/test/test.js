var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is running.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page


    


    it("Should get events", () => { 
    //calling ADD api
    server
    .get('/api/er')
    .expect(200)
    .expect('Content-type', 'application/json; charset=utf-8')

    });
s
    //test to add event

    it("Should respond with error message", () => {
        server
        .post('/api/events')
        .send({"name": "Tom Brady"})
        .expect(400)
    
    });

    it("Should add event to events", () => {
        server
        .post('/api/events')
        .send({"category": "Music",
                "name": "Country Starts",
                "location": "The Met",
                "date": "Jan 02, 2020",
                "id" : 12345})
        .expect(200)
        .expect()
    })

});