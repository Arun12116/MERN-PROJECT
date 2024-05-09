import React, { useEffect } from "react";
import { useState } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate=useNavigate();



  useEffect(()=>{

const auth=localStorage.getItem("user")
if(auth){
navigate("/")

}

  })
  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/Login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });
    let result = await response.json();
    if (result.email) {
        // alert("hi")
      localStorage.setItem("user",JSON.stringify(result))
      navigate("/Product")
    }

    console.log(result)
  };

  return (
    <>
      <Nav />
      <div className="flex justify-center flex-col text-center bg-gray-400 p-4">
        <div className="mt-4">
          <label htmlFor="email" className="block">
            Enter your email:
            <input
              id="email"
              type="email"
              className="mt-1 p-2"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block">
            Enter your password:
            <input
              id="password"
              type="password"
              className="mt-1 p-2"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <div className="mt-4">
          <button onClick={handleLogin} className="border-2 h-10 w-24">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
