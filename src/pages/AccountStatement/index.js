import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "../../components/Sidebar";
import { getUserInfo } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import AccountStatement from "./accountStatement";

const drawerWidth = 240;

export default function Index() {
  const [userInfo, setUserInfo] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    getUserInfo().then((res) => {
      if (res.status === 200) {
        setUserInfo(res.data);
      } else {
        // redirect to login
        if (res.data.message.includes("invalid token")) {
          handleRouteChange("/session-expired")
        }
        else
          handleRouteChange("/login");
      }
    });
  }, []);

  const handleRouteChange = (route) => {
    navigate(route);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Welcome{" "}
            {userInfo
              ? userInfo.account
                ? userInfo.account.firstName
                : ""
              : ""}
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <AccountStatement user={userInfo} />
    </Box>
  );
}
