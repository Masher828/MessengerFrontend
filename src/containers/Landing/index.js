import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      index
      <Link to="/login">Login</Link>
      <Link to="/messenger">Messenger</Link>
    </div>
  );
};

export default Landing;
