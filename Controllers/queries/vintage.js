const db = require("../db/dbConfig");

const getAllVintage = async () => {
  try {
    const allVintage = await db.any("SELECT * FROM vintage");
    return allVintage;
  } catch (error) {
    return error;
  }
};
module.exports = { getAllVintage };
