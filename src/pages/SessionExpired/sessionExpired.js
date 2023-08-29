import React from 'react'
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";
import Oops from "../../animation/oops.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Typography } from '@mui/material';


const SessionExpired = () => {
    const navigate = useNavigate();

    const handleRouteChange = (route) => {
        navigate(route);
    }

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
            <Player
                autoplay
                loop
                src={Oops}
                style={{ height: "300px", width: "300px" }}
            />
            <Typography
                variant="h3"
                sx={{
                    color: "#3498db",
                }}
                gutterBottom
            >
                Session Expired
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
                Login again
            </Button>
        </Stack>
    )
};

export default SessionExpired;
