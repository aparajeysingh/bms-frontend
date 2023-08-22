import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Button, TextField } from "@mui/material";
import CustomDatePicker from "../../components/CusotmDatePicker";
import Sidebar from "../../components/Sidebar"
import { getUserInfo } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Home from "./Home";

const drawerWidth = 240;

export default function Dashboard() {

  const [userInfo, setUserInfo] = React.useState('');
  const [count, setCount] = React.useState(1)
  const navigate = useNavigate();

  React.useEffect(() => {
    getUserInfo().then((res) => {
      if (res.status === 200) {
        setUserInfo(res.data)
      }
      else {
        // redirect to login
        handleRouteChange("/login");
      }
    })
  }, [])

  const handleRouteChange = (route) => {
    navigate(route);
  }


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Welcome {userInfo ? userInfo.account ? userInfo.account.firstName : "" : ""}
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      {count && count === 1 ? <Home /> : ""}
    </Box>
  );
}
