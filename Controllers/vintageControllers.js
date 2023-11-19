const express = require("express");
const vintages = express.Router();

const { getAllVintage } = require("../Controllers/queries/vintage.js");

vintages.get("/", async (request, response) => {
  const allVintage = await getAllVintage();

  if (allVintage[0]) {
    response.status(200).json(allVintage);
  } else response.status(500).json({ error: "service error" });
});

module.exports = vintages;
