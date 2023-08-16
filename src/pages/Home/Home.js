import React from "react";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import ComputerIcon from "@mui/icons-material/Computer";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const handleRouteChange = (route) => {
    navigate(route);
  };

  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="home-container"
    >
      <Typography
        variant="h3"
        sx={{
          color: "#3498db",
        }}
        gutterBottom
      >
        Bank Management System
      </Typography>
      <Button
        variant="outlined"
        endIcon={<LoginIcon />}
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={() => {
          handleRouteChange("/login");
        }}
      >
        Login
      </Button>
      <Button
        variant="outlined"
        endIcon={<PersonAddIcon />}
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={() => {
          handleRouteChange("/register");
        }}
      >
        New User? Register
      </Button>
      <Button
        variant="outlined"
        endIcon={<ComputerIcon />}
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={() => {
          handleRouteChange("open-new-account");
        }}
      >
        Apply online for account
      </Button>
    </Stack>
  );
};

export default Home;
