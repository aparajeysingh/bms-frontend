import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

export default function Home(props) {
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
      <Container
        maxWidth="md"
        style={{
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#3498db",
                  }}
                >
                  User ID
                </Typography>
                <Typography variant="h6">{props?.user?.userId}</Typography>
                {/* Add other user details here */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3498db",
                  }}
                >
                  Username
                </Typography>
                <Typography variant="h6">{props?.user?.username}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3498db",
                  }}
                >
                  Account Number
                </Typography>
                <Typography variant="h6">
                  {props?.user?.account?.accNumber}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3498db",
                  }}
                >
                  Name
                </Typography>
                <Typography variant="h6">
                  {props?.user?.account?.title}{" "}
                  {props?.user?.account?.firstName}{" "}
                  {props?.user?.account?.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3498db",
                  }}
                >
                  Date of Birth
                </Typography>
                <Typography variant="h6">
                  {props?.user?.account?.dob}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3498db",
                  }}
                >
                  Mobile
                </Typography>
                <Typography variant="h6">
                  {props?.user?.account?.mobile}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3498db",
                  }}
                >
                  Email
                </Typography>
                <Typography variant="h6">
                  {props?.user?.account?.email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3498db",
                  }}
                >
                  Account Balance
                </Typography>
                <Typography variant="h6">
                  {props?.user?.account?.balance} {"INR"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
