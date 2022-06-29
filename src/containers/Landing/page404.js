import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url("https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Page.gif")`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Button
        variant="contained"
        onClick={(e) => {
          navigate("");
        }}
      >
        Home
      </Button>
    </div>
  );
};

export default Page404;
