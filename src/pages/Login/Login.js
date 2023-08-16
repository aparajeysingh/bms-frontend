// Login.js
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleRouteChange = (route) => {
    navigate(route);
  }

  const handleLoginSubmit = () => {
    // login handle logic
  }

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{
        display: 'flex',
        flexDirection: "column"
      }}>
        <TextField
          required
          id="outlined-required"
          label="User ID"
          placeholder='enter your user id'
          sx={{
            width: "400px",
            margin: "10px"
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder='enter password'
          sx={{
            width: "400px",
            margin: "10px"
          }}
        />
      </div>
      <Button variant="contained" startIcon={<LoginIcon />}
        sx={{
          width: "400px",
          margin: "10px"
        }}
        onClick={() => {
          handleRouteChange("/login")
        }}>
        Login
      </Button>
      <div>
        <Typography variant="h6" gutterBottom onClick={() => {
          handleRouteChange("/openaccount")
        }} sx={{
          fontSize: '20px',
          color: "#3498db",
          cursor: 'pointer'
        }}>
          First time user
        </Typography>
        <Typography variant="h6" gutterBottom onClick={() => {
          handleRouteChange("/login/forgotuserid")
        }} sx={{
          fontSize: '20px',
          color: "#3498db",
          cursor: 'pointer'
        }}>
          Forgot userId
        </Typography>
        <Typography variant="h6" gutterBottom onClick={() => {
          handleRouteChange("/login/forgotpassword")
        }} sx={{
          fontSize: '20px',
          color: "#3498db",
          cursor: 'pointer'
        }}>
          Forgot password
        </Typography>
      </div>
    </Box>
  );
};

export default Login;
