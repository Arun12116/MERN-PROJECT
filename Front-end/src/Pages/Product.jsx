import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
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
    let response = await fetch(`http://localhost:3000/delete/${id}`, {
      method: "delete",
    });

    response = await response.json();

    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav />
      {product.map((items) => {
        return (
          <>
            <div key={items._id}>
              <li>ProducName:{items.productName}</li>
              <li>Price:{items.price}</li>
              <li>catogery:{items.catogery}</li>
              <span
                onClick={() => {
                  deletedata(items._id);
                }}
              >
                delete
              </span>
              <br />
              <Link to={`/UpdateProduct/${items._id}`}>
              <span>Edit</span>
              </Link>

            </div>
          </>
        );
      })}
    </>
  );
};

export default Product;
