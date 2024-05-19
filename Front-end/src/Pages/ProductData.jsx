import React from "react";
import { Link } from "react-router-dom";
const ProductData = ({ items, deletedata }) => {
  return (
    <>
      <div className="w-64 h-full  border  justify-center text-center mt-5  bg-slate-400 list-none">
        <div
          className=" flex  flex-col justify-center rounded-md w-56 h-72 text-center text-white   list-none"
          key={items._id}
        >
          <li>ProducName:{items.productName}</li>
          <li>Price:{items.price}</li>
          <li>catogery:{items.catogery}</li>
          <span
            className="text-red-600 font-bold cursor-pointer"
            onClick={() => {
              deletedata(items._id);
            }}
          >
            Delete
          </span>

          <Link to={`/UpdateProduct/${items._id}`}>
            <span className="text-black font-bold cursor-pointer">update</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductData;
