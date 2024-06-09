const express = require("express");
const router = express.Router();
const Person = require("../../mongoose/models/Person");

router.post("/", async (req, resp) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    resp.status(200).json({ response: "data save succesfully" });
  } catch (error) {
    resp.status(500).json({ error: "internal Server error" });
  }
});

router.get("/:workType", async (req, resp) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });

      resp.status(200).json(response);
    } else {
      resp.status(404).json({ error: "invalid work type" });
    }
  } catch (error) {
    resp.status({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, resp) => {
  try {
    const response = await Person.find();
    resp.status(200).json(response);
  } catch (error) {
    resp.status(500).json({ error: "internal server error" });
  }
});

router.put("/:id", async (req, resp) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return resp.status(404).json({ error: "Person not found" });
    }
    resp.status(200).json(response);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ error: "Internal Server Error " });
  }
});

router.delete("/:id", async (req, resp) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      resp.status(404).json({ error: "person not found" });
    }
    resp.status(200).json({message:"person deleted succesfully"})
  } catch (error) {
    console.log(error);
    resp.status(500).json({ error: "Internal Server Error " });
  }
});

module.exports = router;
