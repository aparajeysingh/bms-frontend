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
import CustomTable from "../../components/CustomTable";
import { useNavigate } from "react-router-dom";

export default function AccountStatement() {
  const [fromDate, setFromDate] = React.useState("");
  const [toDate, setToDate] = React.useState("");
  const [statement, setStatement] = React.useState([])
  const [page, setPage] = React.useState(0)


  const navigate = useNavigate();

  const handleRouteChange = (route) => {
    navigate(route);
  }

  const handleGenerateStatement = () => {
    if (!fromDate || !toDate) {
      toast.error("Please select both dates");
      return;
    } else {
      const data = {
        startTime: fromDate,
        endTime: toDate,
        page: page,
        size: 5
      };

      setPage(page + 1)
      getTransactions(data).then((res) => {
        if (res.status === 200) {
          toast.success("Statement generated successfully");
          setStatement(res.data.content)
        } else {

          if (res.data.message.includes("invalid token")) {
            handleRouteChange("/session-expired")
          }
          else
            toast.error("Something went wrong," + res.data.message);
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
        {page === 0 ? "Generate Statement" : "Next Page"}
      </Button>

      <CustomTable statements={statement} />
    </Box>
  );
}
