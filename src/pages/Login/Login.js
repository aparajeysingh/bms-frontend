// Login.js
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Login.css";
import userLogin from "../../services/loginService";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const sanityCheck = () => {
    let check = false;
    if (!userId) return { check, message: "User ID cannot be empty" };
    if (!password) return { check, message: "Password cannot be empty" };
    return { check: true, message: "" };
  };

  const handleLoginSubmit = () => {
    // login handle logic
    const { check, message } = sanityCheck();
    if (!check) {
      toast.error(message);
      return;
    } else {
      // {
      //    "userId": 7,
      //     "password": "nabin",
      //     "role": "USER"
      // }
      const data = {
        userId: userId,
        password,
        role: "USER",
      };
      userLogin(data).then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          toast.success("Login successful", { duration: 2000 });
          setTimeout(() => {
            // get the auth token from the response and store it in local storage
            const authToken = res.data.Authorization;
            localStorage.setItem("authToken", authToken);

            // redirect to dashboard
            handleRouteChange("/dashboard");
          }, 1500);
        } else {
          toast.error("Login failed");
        }
      });
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: 2,
      }}
      className="login-container"
      noValidate
      autoComplete="off"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Typography
        variant="h3"
        sx={{
          color: "#3498db",
        }}
        gutterBottom
      >
        Login to your account
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="User ID"
          placeholder="enter your user id"
          sx={{
            width: "400px",
            margin: "10px",
          }}
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder="enter password"
          sx={{
            width: "400px",
            margin: "10px",
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        startIcon={<LoginIcon />}
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={handleLoginSubmit}
      >
        Login
      </Button>
      <div className="login-footer">
        <Typography
          variant="h6"
          gutterBottom
          onClick={() => {
            handleRouteChange("/open-new-account");
          }}
          sx={{
            fontSize: "17px",
            color: "#3498db",
            cursor: "pointer",
          }}
        >
          First time user? Register
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          onClick={() => {
            handleRouteChange("/forgot-user-id");
          }}
          sx={{
            fontSize: "17px",
            color: "#3498db",
            cursor: "pointer",
          }}
        >
          Forgot user Id?
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          onClick={() => {
            handleRouteChange("/forgot-password");
          }}
          sx={{
            fontSize: "17px",
            color: "#3498db",
            cursor: "pointer",
          }}
        >
          Forgot password?
        </Typography>
      </div>
    </Box>
  );
};

export default Login;
