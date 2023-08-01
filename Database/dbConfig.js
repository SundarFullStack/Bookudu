const mongoose = require("mongoose");
const base_url =
  process.env.NODE_ENVIRONMENT === "development"
    ? `mongodb://127.0.0.1:27017/${process.env.DEVELOPMENT_MONGO_DB_DATABASE}`
    : `mongodb+srv://${process.env.PRODUCTION_MONGO_DB_USERNAME}:${process.env.PRODUCTION_MONGO_DB_PASSWORD}
@sundar.qhyhwwt.mongodb.net/${process.env.PRODUCTION_MONGO_DB_DATABASE}`;

mongoose
  .connect(base_url)
  .then((response) => {
    if (response) {
      console.log("DATABASE CONNECTED SUCCESSFULLY");
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  })
  .catch((err) => {
    if (err) {
      console.log("ERROR", err);
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  });
