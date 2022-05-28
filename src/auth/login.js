import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUser } from "../redux/actions";

const Login = () => {
  const state = useSelector((state) => state.changeTheUser);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    // axios
    //   .post("/auth/user/signup")
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  };

  return (
    <div>
      {state}
      <button onClick={() => dispatch(changeUser("user102"))}>
        Activate Lasers
      </button>
      <form onSubmit={handleSubmit}>
        <label>Enter your email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default Login;
