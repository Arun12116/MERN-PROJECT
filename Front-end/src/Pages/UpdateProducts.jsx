import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProducts = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const params = useParams();

  const navigate = useNavigate();
  console.log(params);

  const getData = async () => {
    let response = await fetch(`http://localhost:3000/product/${params.id}`, {
      method: "GET",
    });
    response = await response.json();
    console.log("response", response);
    setPrice(response.price);
    setCategory(response.category);
    setProductName(response.productName);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdateProduct = async () => {
    const response = await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, productName, category }),
    });

    const result = await response.json();
    console.log(result, "update response");

    navigate("/Product");
  };

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
            <label htmlFor="price" className="block">
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
            <label htmlFor="category" className="block">
              Enter your category:
              <input
                id="category"
                type="text"
                className="mt-1 p-2"
                placeholder="Enter your category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
            </label>
          </div>
          <div className="mt-4">
            <button
              onClick={handleUpdateProduct}
              className="border-2 h-10 w-24"
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProducts;
