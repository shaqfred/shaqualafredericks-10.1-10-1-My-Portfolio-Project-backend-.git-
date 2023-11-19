const express = require("express");
const cors = require("cors");

const app = express();
const vintageControllers = require("../backend/Controllers/vintageControllers");

app.use(cors());
app.use(express.json());
app.use("/vintage", vintageControllers);

app.get("/", (request, response) => {
  response.status("Welcome to Project Vintage");
});
app.get("*", (request, response) => {
  response.status(404).send("Page not found");
});

module.exports = app;
