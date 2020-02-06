var EventRecommender = require("../../EventRecommender");

describe("EventRecommender", function() {
  describe("When you add an event to a recommender", function() {
    it("should give you back a list with one event in it", function() {
      var recommender = new EventRecommender();
      recommender.addEvent(
        "Music",
        "Country Stars",
        "The Met",
        "$199",
        "Jan 02, 2020",
        "eight 0'clock"
      );

      expect(recommender.allEvents().length).toBe(1);
    });
  });

  describe("When you ask for an event with the right date", function() {
    it("gives it to you", function() {
      var recommender = new EventRecommender();
      recommender.addEvent(
        "Music",
        "Country Stars",
        "The Met",
        "$199",
        "Jan 02, 2020",
        "eight 0'clock"
      );

      expect(recommender.findEventsByDate("Jan 02, 2020").length).toBe(1);
    });
  });
});
