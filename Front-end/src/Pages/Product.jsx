import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";

const Product = () => {
  const [product,setProduct]=useState([])
  const getData = async () => {
    const response = await fetch("http://localhost:3000/Products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result =await response.json()
    console.log("data", response);
    setProduct(result)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav />
{
product.map((items)=>{

return (
<>
<li>ProducName:{items.productName}</li>
<li>Price:{items.price}</li>
<li>catogery:{items.catogery}</li>
<li></li>

</>

)

})

}


    </>
  );
};

export default Product;
