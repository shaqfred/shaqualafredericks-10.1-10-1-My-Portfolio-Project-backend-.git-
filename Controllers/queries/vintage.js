const db = require("../db/dbConfig");

const getAllVintage = async () => {
  try {
    const allVintage = await db.any("SELECT * FROM vintages");
    return allVintage;
  } catch (error) {
    return error;
  }
};
module.exports = { getAllVintage };
