import React from 'react'
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";
import NotFound from "../../animation/page-not-found.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Typography } from '@mui/material';


const PageNotFound = () => {
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
                src={NotFound}
                style={{ height: "300px", width: "300px" }}
            />
            <Typography
                variant="h3"
                sx={{
                    color: "#3498db",
                }}
                gutterBottom
            >
                Page Not Found
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
        </Stack>
    )
};

export default PageNotFound;
