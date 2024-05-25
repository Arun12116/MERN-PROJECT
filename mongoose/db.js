const mongoose = require("mongoose");
const mogoURL = "mongodb://localhost:27017/hotel";

mongoose.connect(mogoURL, {

});

const db = mongoose.connection;

//event listeners for databse connection
db.on("connected", () => {
  console.log("connected to mongodb server");
});
db.on("error", () => {
  console.log("mongodb  connection error");
});
db.on("disconnected", () => {
  console.log("mongodb disconnected");
});

module.exports = db;
