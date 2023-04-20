
const mongoose = require("mongoose");
require("dotenv").config();
const DATABASE_URL =process.env.DATABASE_URL


main()
  .then(() => console.log("db connected successfully!"))
  .catch((err) => console.log(err));
  async function main() {
    await mongoose.connect(DATABASE_URL);
  }

module.exports = main;
