const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/users");
const Product = require("./db/Product");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/users", async (req, resp) => {
  const user = new User(req.body);
  const result = await user.save();
  const responseData = { ...result.toObject(), password: undefined };
  resp.send(responseData);
});

// app.post("/users", async (req, resp) => {
//   const user = new User(req.body);
//   const result = await user.save();
//   //dont show the userPassword in the response start
//   const removePassword = result.toObject();
//   delete removePassword.password;
//   //end
//   resp.send(removePassword);
// });

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "no user found" });
    }
  } else {
    resp.send({ result: "no user found" });
  }
});

app.post("/addToProduct", async (req, resp) => {
  let newProduct = new Product(req.body);
  let data = await newProduct.save();
  resp.send(data);
});

app.get("/products", async (req, resp) => {
  let productData = await Product.find();
  if (productData.length > 0) {
    resp.send(productData);
  } else {
    resp.send({ result: "no data found" });
  }
});

app.delete("/delete/:id", async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/product/:id", async (req, resp) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ message: "no data found" });
  }
});

app.put("/update/:id", async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

app.get("/search/:key", async (req, resp) => {

  console.log("result",req.params.key);
  let result = await Product.find({
   "$or": [

    { productName: { $regex: req.params.key } },
    { category: { $regex: req.params.key } }


  ],
  });

  resp.send(result)
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
