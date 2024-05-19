import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import ProductData from "./ProductData";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    const response = await fetch("http://localhost:3000/Products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    console.log("data", response);
    setProduct(result);
  };

  const deletedata = async (id) => {
    console.log("id", id);
    try {
      let response = await fetch(`http://localhost:3000/delete/${id}`, {
        method: "delete",
      });

      response = await response.json();

      getData();
    } catch {
      console.log("data is not presnt");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = async (e) => {
    console.log("value", e.target.value);
    let key = e.target.value;
    setSearch(e.target.value);
  };
  const handlClick = async () => {
    let response = await fetch(`http://localhost:3000/search/${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    if (response) {
      setProduct(response);
    }
  };

  return (
    <>
      <Nav />

      <div>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="search by product name"
          className="border-[2px] border-gray-700  rounded-md p-3 mt-2 ml-2"
        />
        <button className="border-[2px] border-gray-700  rounded-md p-3 mt-2 ml-2 w-24" onClick={handlClick}>search</button>
      </div>
      <div className="flex  justify-around flex-wrap ">
        {product.map((items) => {
          return (
            <>
              <ProductData items={items} deletedata={deletedata} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;
