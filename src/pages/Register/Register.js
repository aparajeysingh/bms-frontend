import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [accountNumber, setAccountNumber] = useState("")
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [transactionPassword, setTransactionPassword] = useState("");
  const [confirmTransactionPassword, setConfirmTransactionPassword] = useState("");


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
        Register for Internet Banking
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
        <TextField
          required
          id="outlined-required"
          label="Set User ID"
          placeholder="enter new user id"
          sx={{
            width: "400px",
            margin: "10px",
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Set Password"
          placeholder="enter new password"
          sx={{
            width: "400px",
            margin: "10px",
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Confirm Password"
          placeholder="confirm new password"
          sx={{
            width: "400px",
            margin: "10px",
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Set Transaction Password"
          placeholder="enter new transaction password"
          sx={{
            width: "400px",
            margin: "10px",
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Confirm Transaction Password"
          placeholder="confirm new transaction password"
          sx={{
            width: "400px",
            margin: "10px",
          }}
        />
        {/* <TextField
          required
          id="outlined-required"
          label="Enter OTP"
          placeholder="enter OTP sent to your email id"
          sx={{
            width: "400px",
            margin: "10px",
          }}
        /> */}
      </div>
      <Button
        variant="contained"
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={() => {
          
        }}
      >
        Register
      </Button>
    </Box>
  );
}
