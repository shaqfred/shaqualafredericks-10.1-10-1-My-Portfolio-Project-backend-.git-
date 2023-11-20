const express = require("express");
const vintages = express.Router();

const {
  getAllVintage,
  createVintage,
  getVintageItemByID,
} = require("../Controllers/queries/vintage.js");

const { checkName } = require("../validations/checkVintage.js");

vintages.get("/", async (request, response) => {
  const allVintage = await getAllVintage();

  if (allVintage[0]) {
    response.status(200).json(allVintage);
  } else response.status(500).json({ error: "service error" });
});

vintages.get("/:id", async (request, response) => {
  const id = request.params.id;

  const vintageItemById = await getVintageItemByID(id);

  if (!vintageItemById) {
    response.status(404).json({ error: "No item with that id was found." });
  } else {
    response.status(200).json(vintageItemById);
  }
});

vintages.post("/", async (request, response) => {
  const body = request.body;
  const vintage = await createVintage(body);
  response.status(200).json(vintage);
});

module.exports = vintages;
