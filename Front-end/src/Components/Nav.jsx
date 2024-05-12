import React from "react";
import { Link, json, useNavigate } from "react-router-dom";

const Nav = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    navigate("/sinup");
  };
  return (
    <>
      <div className="w-full  bg-black h-16 text-white">
        {user ? (
          <div className="flex gap-5">
            <li className="text-center">Home</li>
            <Link to={"/Product"}>
              <li>Product</li>
            </Link>
            <Link to={"/UpdateProduct"}>
              <li>UpdateProducts</li>
            </Link>
            <Link to={"/AddProducts"}>
              <li>AddProducts</li>
            </Link>
            <Link to={"/Profile"}>
              <li>Profile</li>
            </Link>
            <Link to={"/sinup"}>
              <li onClick={logout}>LogOut{JSON.parse(user).name}</li>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex">
              <Link to={"/sinup"}>
                <li>SinUp</li>
              </Link>

              <Link to={"/Login"}>
                <li>Login</li>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Nav;
