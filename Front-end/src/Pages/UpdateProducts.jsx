import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import { useState } from "react";
import { useParams } from "react-router-dom";
const UpdateProducts = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCatogery] = useState("");

  const parms = useParams();
  console.log(parms);

  const getData = async () => {
    let response = await fetch(
      "http://localhost:3000/product/663f53601f95a07fb216adf8",
      {
        method: "get",
      }
    );
    response = await response.json();
    console.log("response", response);
    setPrice(response.price);
    setCatogery(response.category);
    setProductName(response.productName);
  };

  useEffect(() => {
    getData();
  }, []);
  const handleAddtocart = () => {};
  return (
    <>
      <Nav />
      <div>
        <div className="flex justify-center flex-col text-center bg-gray-400 p-4">
          <div>
            <label htmlFor="name" className="block">
              Enter your Product name:
              <input
                id="name"
                className="border border-red-500 rounded-md text-center mt-1 p-2"
                type="text"
                placeholder="Enter your ProductName"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block">
              Enter your Price:
              <input
                id="price"
                type="number"
                className="mt-1 p-2"
                placeholder="Enter your price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </label>
          </div>
          <div className="mt-4">
            <label className="block">
              Enter your catogery
              <input
                id="catogery"
                type="text"
                className="mt-1 p-2"
                placeholder="Enter your catogery"
                onChange={(e) => setCatogery(e.target.value)}
                value={category}
              />
            </label>
          </div>
          <div className="mt-4">
            <button onClick={handleAddtocart} className="border-2 h-10 w-24">
              updateProduct
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProducts;
