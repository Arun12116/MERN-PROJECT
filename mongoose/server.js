const express = require("express");
const app = express();
const db = require("./db");
const bodyparser = require("body-parser");
app.use(bodyparser.json());

const routerPerson = require("./router/person");
app.use("/person", routerPerson);

const routerMenu = require("./router/menu");
app.use("/menu", routerMenu);

app.listen("3000", () => {
  console.log("app is running on por 3000");
});
