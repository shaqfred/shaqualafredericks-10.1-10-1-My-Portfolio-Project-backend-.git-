const express = require("express");
const cors = require("cors");

const app = express();
const vintageControllers = require("../backend/Controllers/vintageControllers.js");

app.use(cors());
app.use(express.json());
app.use("/vintages", vintageControllers);

app.get("/", (request, response) => {
  response.status(200).send("Welcome to Project Vintage");
});
app.get("*", (request, response) => {
  response.status(404).send("Page not found");
});

module.exports = app;
