import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SetNewPassword() {
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
        Set New Password
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
          label="Set New Password"
          placeholder="enter new password"
          sx={{
            width: "400px",
            margin: "10px",
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Confirm New Password"
          placeholder="confirm new password"
          sx={{
            width: "400px",
            margin: "10px",
          }}
        />
      </div>
      <Button
        variant="contained"
        startIcon={<CheckIcon />}
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={() => {}}
      >
        Submit
      </Button>
    </Box>
  );
}
