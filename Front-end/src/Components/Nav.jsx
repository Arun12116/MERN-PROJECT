import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/sinup");
  };
  return (
    <>
      <div className="w-full bg-slate-400 h-16 text-white">
        {user ? (
          <div className="flex gap-5 list-none justify-around ">
            <li className="text-center mt-4">Home</li>
            <Link to={"/Product"}>
              <li className="text-center mt-4">Product</li>
            </Link>
            <Link>
              <li className="text-center mt-4">UpdateProducts</li>
            </Link>
            <Link to={"/AddProducts"}>
              <li className="text-center mt-4">AddProducts</li>
            </Link>
            <Link>
              <li className="text-center mt-4">Profile</li>
            </Link>
            <Link to={"/sinup"}>
              <li className="text-center mt-4 " onClick={logout}>LogOut :{JSON.parse(user).name}</li>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex">
              <Link to={"/sinup"}>
                <li className="text-center mt-4">SinUp</li>
              </Link>
              <Link to={"/Login"}>
                <li className="text-center mt-4">Login</li>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Nav;
