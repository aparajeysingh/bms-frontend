import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";


export default function Home() {

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />

            <Typography
                variant="h4"
                sx={{
                    color: "#3498db",
                }}
                gutterBottom
            >
                Account Details
            </Typography>

        </Box>

    );
}
