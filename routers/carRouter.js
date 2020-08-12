const express = require("express");
const knex = require("knex");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/cars.db3",
  },
  useNullAsDefault: true,
});

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Failed to retrieve cars" });
    });
});

router.post("/", (req, res) => {
  const body = req.body;

  db("cars")
    .insert(body)
    .returning(id)
    .then(ids => {
      res.status(201).json({ inserted: ids });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
});

module.exports = router;
