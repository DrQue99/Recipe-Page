const express = require("express");
const app = express();
const PORT = 3000;
const pgp = require("pg-promise")();
const db = pgp("postgres://tpl1219_7@localhost:5432/pern");
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//display all species
app.get("/api/species", (req, res) => {
  db.any("SELECT * FROM species")
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

//display all sightings
app.get("/api/sightings", (req, res) => {
  db.any(
    "SELECT animals_name, sighting_location FROM sightings, individual_animals WHERE nick_name = animals_name;"
  )
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

//display all individual animals
app.get("/api/individual-animals", (req, res) => {
  db.any("SELECT * FROM individual_animals")
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.send(error);
    });
});

//add new individual animal sighting;
app.post("/api/sightings", (req, res) => {
  const sighting = {
    animals_name: req.body.animals_name,
    sighting_location: req.body.sighting_location,
    health_status: req.body.health_status,
    researchers_email: req.body.researchers_email
  };

  db.one(
    "INSERT INTO sightings (animals_name, sighting_location, health_status, researchers_email) VALUES ($1, $2, $3, $4) RETURNING *",
    [
      sighting.animals_name,
      sighting.sighting_location,
      sighting.health_status,
      sighting.researchers_email
    ]
  )
    .then(data => {
      res.send(data);
    })
    .catch(function(error) {
      res.sendStatus(500);
    });
});

//add new species to data base
app.post("/api/species", (req, res) => {
  const species = {
    common_name: req.body.common_name,
    scientific_name: req.body.scientific_name,
    existing_in_wild: req.body.existing_in_wild,
    conservation_status: req.body.conservation_status
  };

  db.one(
    "INSERT INTO species (common_name, scientific_name, existing_in_wild, conservation_status) VALUES ($1, $2, $3, $4) RETURNING *",
    [
      species.common_name,
      species.scientific_name,
      species.existing_in_wild,
      species.conservation_status
    ]
  )
    .then(data => {
      res.send(data);
    })
    .catch(function(error) {
      res.sendStatus(500);
    });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
