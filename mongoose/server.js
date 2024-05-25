const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/Person");
const menuItems = require("./models/Menu");
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.get("/", (req, resp) => {
  resp.send("helloooo");
});

app.post("/person", async (req, resp) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    resp.status(200).json({ response: "data save succesfully" });
  } catch (error) {
    resp.status(500).json({ error: "internal Server error" });
  }
});

app.get("/personData", async (req, resp) => {
  try {
    const response = await Person.find();
    resp.status(200).json(response);
  } catch (error) {
    resp.status(500).json({ error: "internal server error" });
  }
});

app.post("/menu", async (req, resp) => {
  try {
    const data = req.body;
    const newItem = new menuItems(data);
    const response = await newItem.save();
    resp.status(200).json(response);
  } catch (error) {
    console.error(error);
    resp.status(500).json({ error: "Internal server error" });
  }
});

app.get("/menuData", async (req, resp) => {
  try {
    const data = await menuItems.find();
    resp.status(200).json(data);
  } catch (error) {
    resp.status(500).json("internal server error");
  }
});


app.listen("3000", () => {
  console.log("app is running on por 3000");
});
