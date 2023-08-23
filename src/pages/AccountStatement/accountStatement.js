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
import { Toaster, toast } from "react-hot-toast";
import { getTransactions } from "../../services/transactionsService";

export default function AccountStatement() {
  const [fromDate, setFromDate] = React.useState("");
  const [toDate, setToDate] = React.useState("");

  const handleGenerateStatement = () => {
    if (!fromDate || !toDate) {
      toast.error("Please select both dates");
      return;
    } else {
      //       {
      //     "startTime": "2027-09-07",
      //     "endTime": "2027-09-07"
      //     "size":pageSize, "page";pageno,"type" optional fields
      // }
      const data = {
        startTime: fromDate,
        endTime: toDate,
      };
      getTransactions(data).then((res) => {
        if (res.status === 200) {
          toast.success("Statement generated successfully");
          console.log("res", res.data);
        } else {
          toast.error("Something went wrong");
        }
      });
    }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Toaster position="top-right" reverseOrder={false} />

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
        <CustomDatePicker label="From" onChange={setFromDate} />
        <CustomDatePicker label="To" onChange={setToDate} />
      </div>
      <Button
        variant="contained"
        sx={{
          width: "400px",
          margin: "10px",
        }}
        onClick={handleGenerateStatement}
      >
        Generate Statement
      </Button>
    </Box>
  );
}
