import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Password() {
  const navigate = useNavigate();

  const handleRouteChange = (route) => {
    navigate(route);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="login-container"
      noValidate
      autoComplete="off"
    >
      <Typography
        variant="h3"
        sx={{
          color: "#3498db",
        }}
        gutterBottom
      >
        Forgot Password
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
          label="Account Number"
          placeholder="enter your account number"
          sx={{
            width: "400px",
            margin: "10px",
          }}
        />
      </div>
      <Button
        variant="contained"
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={() => {}}
      >
        Generate otp
      </Button>
    </Box>
  );
}
