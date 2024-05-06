import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    console.log(name, email, password);

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Corrected the header name
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();
      console.log(result);
      localStorage.setItem("user",JSON.stringify(result))

      if (response.ok) {

        navigate("/Product");
      } else {
        throw new Error(result.message || "Failed to register");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <>
    <Nav/>
    <div className="flex justify-center flex-col text-center bg-gray-400 p-4">
    <div>
      <label htmlFor="name" className="block">
        Enter your name:
        <input
          id="name"
          className="border border-red-500 rounded-md text-center mt-1 p-2"
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
    </div>
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
      <button onClick={handleSubmit} className="border-2 h-10 w-24">
        Sign Up
      </button>
    </div>
  </div>
    </>

  );
};

export default SignUp;
