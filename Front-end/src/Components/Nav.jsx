import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const user = localStorage.length !== 0;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    navigate("/sinup");
  };
  return (
    <>
      <div className="w-full  bg-black h-16 text-white">
        <ul className="flex gap-9 ">
          <li className="text-center">Home</li>
          <Link to={"/Product"}>
            <li>Product</li>
          </Link>

          <Link to={"/UpdateProduct"}>
            <li>UpdateProducts</li>
          </Link>

          <Link to={"AddProducts"}>
            <li>AddProducts</li>
          </Link>

          <Link to={"/Profile"}>
            <li>Profile</li>
          </Link>

          {user ? (
            <Link to={"/sinup"}>
              <li onClick={logout}>LogOut</li>
            </Link>
          ) : (
            <>
              <Link to={"/sinup"}>
                <li>SinUp</li>
              </Link>

              <Link to={"/Login"}>
                <li>Login</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Nav;
