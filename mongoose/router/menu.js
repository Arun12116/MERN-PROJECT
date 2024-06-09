const express = require("express");
const menuItems = require("../../mongoose/models/Menu");

const router = express.Router();

router.post("/", async (req, resp) => {
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

router.get("/", async (req, resp) => {
  try {
    const data = await menuItems.find();
    resp.status(200).json(data);
  } catch (error) {
    resp.status(500).json("internal server error");
  }
});

router.get("/:taste", async (req, resp) => {
  try {
    const tasteType = req.params.taste;
    if (tasteType == "sweet" || tasteType == "sour" || tasteType == "spicy") {
      const response = await menuItems.find({ taste: tasteType });
      resp.status(200).json(response);
    } else {
      resp.status(404).json({ error: "test is not found " });
    }
  } catch (error) {
    resp.status(500).json({ error: "Internal server Error" });
  }
});

module.exports = router;
