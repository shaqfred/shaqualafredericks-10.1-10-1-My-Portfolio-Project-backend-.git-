const db = require("../db/dbConfig");

const getAllVintage = async () => {
  try {
    const allVintage = await db.any("SELECT * FROM vintages");
    return allVintage;
  } catch (error) {
    return error;
  }
};
const createVintage = async (vintage) => {
  try {
    const newVintage = await db.one(
      "INSERT INTO vintages (name,style,category,price,isfavorite)VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        vintage.name,
        vintage.style,
        vintage.category,
        vintage.price,
        vintage.isfavorite,
      ]
    );
    return newVintage;
  } catch (error) {
    return error;
  }
};
const getVintageItemByID = async (id) => {
  try {
    const oneVintage = await db.oneOrNone(
      "SELECT * FROM vintages WHERE id=$1",
      id
    );
    return oneVintage;
  } catch (error) {
    return error;
  }
};
const deleteVintage = async (id) => {
  try {
    const deleteVintage = await db.one(
      "DELETE FROM vintages WHERE id = $1 RETURNING *",
      id
    );
    return deleteVintage;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllVintage,
  createVintage,
  getVintageItemByID,
  deleteVintage,
};
