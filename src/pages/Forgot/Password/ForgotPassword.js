import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  generateOtpForResetPassword,
  resetPassword,
} from "../../../services/resetPasswordService";

export default function Password() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const handleGenerateOtpClick = () => {
    if (!userId) {
      toast.error("User ID cannot be empty");
      return;
    } else {
      setDisabled(true);
      generateOtpForResetPassword({ userId }).then((res) => {
        if (res.status === 200) {
          toast.success("OTP sent to your email", { duration: 2000 });
          setOtpSent(true);
        } else {
          setDisabled(false);
          toast.error("OTP generation failed, " + res.data.message);
        }
      });
    }
  };

  const sanityCheck = () => {
    const check = false;
    if (!userId) return { check, message: "User ID cannot be empty" };
    if (!password) return { check, message: "Password cannot be empty" };
    if (!confirmPassword)
      return { check, message: "Confirm password cannot be empty" };
    if (!otp) return { check, message: "OTP cannot be empty" };
    if (password !== confirmPassword)
      return { check, message: "Password and confirm password do not match" };
    return { check: true, message: "" };
  };

  const handleResetPasswordClick = () => {
    const { check, message } = sanityCheck();
    if (!check) {
      toast.error(message);
      return;
    } else {
      const data = {
        userId,
        password,
        otp,
        confirmPassword,
      };

      resetPassword(data).then((res) => {
        if (res.status === 200) {
          toast.success("Password reset successful", { duration: 2000 });
          setTimeout(() => {
            handleRouteChange("/login");
          }, 1500);
        } else {
          toast.error("Password reset failed, " + res.data.message);
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
          label="User ID"
          placeholder="enter your user id"
          sx={{
            width: "400px",
            margin: "10px",
          }}
          disabled={disabled}
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        sx={{
          width: "400px",
          margin: "10px",
        }}
        disabled={disabled}
        onClick={handleGenerateOtpClick}
      >
        Generate otp
      </Button>
      <TextField
        required
        id="outlined-required"
        label="OTP"
        placeholder="enter otp sent to your email"
        sx={{
          width: "400px",
          margin: "10px",
          display: otpSent ? "flex" : "none",
        }}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Password"
        placeholder="enter new password"
        sx={{
          width: "400px",
          margin: "10px",
          display: otpSent ? "flex" : "none",
        }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Confirm Password"
        placeholder="confirm new password"
        sx={{
          width: "400px",
          margin: "10px",
          display: otpSent ? "flex" : "none",
        }}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{
          width: "400px",
          margin: "10px",
          display: otpSent ? "block" : "none",
        }}
        onClick={handleResetPasswordClick}
      >
        Reset Password
      </Button>
    </Box>
  );
}
