import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import CustomDatePicker from "../../components/CusotmDatePicker";

export default function AccountStatement() {
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
        Account Statement
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CustomDatePicker label="From" />
        <CustomDatePicker label="To" />
      </div>
      <Button
        variant="contained"
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={() => {}}
      >
        Generate Statement
      </Button>
    </Box>
  );
}
