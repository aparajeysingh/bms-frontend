import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  createNewNetBankingUser,
  generateOtpForNewNetBankingUser,
} from "../../services/netBankingService";

export default function Register() {
  const navigate = useNavigate();

  const [accountNumber, setAccountNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [transactionPassword, setTransactionPassword] = useState("");
  const [confirmTransactionPassword, setConfirmTransactionPassword] =
    useState("");

  const [disabled, setDisabled] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const sanityCheck = () => {
    let check = false;
    if (!accountNumber)
      return { check, message: "Account number cannot be empty" };
    if (!userId) return { check, message: "User ID cannot be empty" };
    if (!password) return { check, message: "Password cannot be empty" };
    if (!confirmPassword)
      return { check, message: "Confirm password cannot be empty" };
    if (!transactionPassword)
      return { check, message: "Transaction password cannot be empty" };
    if (!confirmTransactionPassword)
      return { check, message: "Confirm transaction password cannot be empty" };
    if (password !== confirmPassword)
      return { check, message: "Password and confirm password do not match" };
    if (transactionPassword !== confirmTransactionPassword)
      return {
        check,
        message:
          "Transaction password and confirm transaction password do not match",
      };
    return { check: true, message: "" };
  };

  const handleGenerateOTPClick = async () => {
    const { check, message } = sanityCheck();
    if (!check) {
      toast.error(message);
      return;
    } else {
      setDisabled(true);
      // {
      // "accNumber":1
      // }
      let response = await generateOtpForNewNetBankingUser({
        accNumber: accountNumber,
      });

      if (response.status === 200) {
        toast.success("OTP sent to your email id", { duration: 2000 });
        setOtpSent(true);
      } else {
        setDisabled(false);
        toast.error("Error in sending OTP, " + response.data.message, {
          duration: 3000,
        });
      }
    }
  };

  const handleRegisterButtonClick = () => {
    const { check, message } = sanityCheck();
    if (!check) {
      toast.error(message);
      return;
    }

    const data = {
      username: userId,
      password: password,
      confirmPassword: confirmPassword,
      pin: transactionPassword,
      confirmPin: confirmTransactionPassword,
      accNumber: accountNumber,
      otp,
    };

    createNewNetBankingUser(data).then((res) => {
      console.log(res);
      if (res.status === 201) {
        toast.success("Successfully registered", { duration: 2000 });
        setTimeout(() => {
          handleRouteChange("/login");
        }, 2000);
      } else {
        toast.error("Error registering, " + res.data.message, {
          duration: 3000,
        });
      }
    });
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
      <Toaster position="top-right" reverseOrder={false} />
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
          disabled={disabled}
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
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
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          disabled={disabled}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disabled}
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={disabled}
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
          value={transactionPassword}
          onChange={(e) => setTransactionPassword(e.target.value)}
          disabled={disabled}
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
          value={confirmTransactionPassword}
          onChange={(e) => setConfirmTransactionPassword(e.target.value)}
          disabled={disabled}
        />
      </div>
      <Button
        variant="contained"
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={handleGenerateOTPClick}
        disabled={disabled}
      >
        Generate OTP
      </Button>
      <TextField
        required
        id="outlined-required"
        label="Enter OTP"
        placeholder="enter OTP sent to your email id"
        sx={{
          width: "400px !important",
          margin: "10px !important",
          display: otpSent ? "flex" : "none",
        }}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{
          width: "400px",
          margin: "10px",
          display: otpSent ? "block" : "none",
        }}
        onClick={handleRegisterButtonClick}
      >
        Register
      </Button>
    </Box>
  );
}
