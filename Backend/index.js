const express = require("express");
const cors=require("cors")
require("./db/config");
const User = require("./db/users");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/users", async (req, resp) => {
  const user = new User(req.body);
  const result = await user.save();
  resp.send(result);
});

app.listen(3000);
