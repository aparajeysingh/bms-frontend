import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { getAccountsToApprove } from "../../services/adminService";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/CustomCard";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const drawerWidth = 240;

export default function AdminDashboard() {
  const [accountList, setAccountsList] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    getAccountsToApprove().then((res) => {
      if (res.status === 200) {
        setAccountsList(res.data);
      } else {
        // redirect to login
        if (res.data.message.includes("invalid token")) {
          handleRouteChange("/session-expired");
        } else handleRouteChange("/admin-login");
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
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Welcome Admin
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
            }}
            onClick={() => {
              localStorage.clear();
              handleRouteChange("/");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div
        style={{
          margin: "100px auto",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {accountList &&
              accountList.map((account) => {
                return (
                  <Grid item xs={12} sm={6}>
                    <CustomCard
                      accNumber={account.accNumber}
                      title={account.title}
                      firstName={account.firstName}
                      lastName={account.lastName}
                      email={account.email}
                    />
                  </Grid>
                );
              })}
            {/* <Grid item xs={12} sm={6}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomCard />
            </Grid> */}
          </Grid>
        </Box>
      </div>
    </Box>
  );
}
