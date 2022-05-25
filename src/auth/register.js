import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      contact: number,
      password: password,
    };
    console.log(data);
    axios
      .post("https://ae56-103-151-230-211.in.ngrok.io/auth/user/signup", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Enter your email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Enter your number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <label>Enter your password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
