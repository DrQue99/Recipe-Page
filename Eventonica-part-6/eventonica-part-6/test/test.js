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
        .send({
            "event_name": "World Blockchain Hackathon",
            "location": "San Francisco, CA",
            "category": "Hackathon",
            "date": "02/29/2020"})
        .expect(200)

    });
});