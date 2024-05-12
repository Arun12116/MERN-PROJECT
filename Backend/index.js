const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/users");
const product = require("./db/Product");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/users", async (req, resp) => {
  const user = new User(req.body);
  const result = await user.save();
  //dont show the userPassword in the response start
  const removePassword = result.toObject();
  delete removePassword.password;
  //end
  resp.send(removePassword);
});

app.post("/Login", async (req, resp) => {
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
  resp.send(req.body);
});

app.post("/addToProduct", async (req, resp) => {
  let newProduct = new product(req.body);

  let data = await newProduct.save();

  resp.send(data);
});


app.get("/Products", async(req,resp)=>{

let productData= await product.find()
if(productData.length>0){
resp.send(productData)

}else{
  resp.send({result:"no data found"})
}


})
app.listen(3000);
