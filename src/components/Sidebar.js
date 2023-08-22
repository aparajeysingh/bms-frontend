import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useLocation } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRouteChange = (route) => {
    navigate(route);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText
                primary="Account Details"
                onClick={() => {
                  if (location.pathname === "/dashboard") {
                    return;
                  }
                  handleRouteChange("/dashboard");
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText
                primary="Funds Transfer"
                onClick={() => {
                  if (location.pathname === "/dashboard/fund-transfer") {
                    return;
                  }
                  handleRouteChange("/dashboard/fund-transfer");
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongIcon />
              </ListItemIcon>
              <ListItemText
                primary="Account Statement"
                onClick={() => {
                  if (location.pathname === "/dashboard/account-statement") {
                    return;
                  }
                  handleRouteChange("/dashboard/account-statement");
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText
                primary="Add Payee"
                onClick={() => {
                  if (location.pathname === "/dashboard/add-payee") {
                    return;
                  }
                  handleRouteChange("/dashboard/add-payee");
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                onClick={() => {
                  localStorage.clear();
                  handleRouteChange("/login");
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* ))} */}
        </List>
      </Box>
    </Drawer>
  );
}
