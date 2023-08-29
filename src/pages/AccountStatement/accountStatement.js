import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CustomDatePicker from "../../components/CusotmDatePicker";
import { Toaster, toast } from "react-hot-toast";
import { getTransactions } from "../../services/transactionsService";
import CustomTable from "../../components/CustomTable";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { getUserInfo } from "../../services/userService";

export default function AccountStatement() {
  const [fromDate, setFromDate] = React.useState("");
  const [toDate, setToDate] = React.useState("");
  const [statement, setStatement] = React.useState([]);
  const [page, setPage] = React.useState(-1);
  const [disabled, setDisabled] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState("");

  const navigate = useNavigate();

  const handleRouteChange = (route) => {
    navigate(route);
  };

  React.useEffect(() => {
    getUserInfo().then((res) => {
      if (res.status === 200) {
        setUserInfo(res.data);
        console.log("use effect loaded", res.data);
      } else {
        // redirect to login
        if (res.data.message.includes("invalid token")) {
          handleRouteChange("/session-expired");
        } else handleRouteChange("/login");
      }
    });
  }, []);

  const handleGenerateStatement = (pageNumber) => {
    if (!fromDate || !toDate) {
      toast.error("Please select both dates");
      return;
    } else {
      const data = {
        startTime: fromDate,
        endTime: toDate,
        page: pageNumber,
        size: 5,
      };

      setPage(pageNumber);
      getTransactions(data).then((res) => {
        if (res.status === 200) {
          setDisabled(true);
          toast.success("Statement generated successfully");
          setStatement(res.data.content);
        } else {
          if (res?.data?.message.includes("invalid token")) {
            handleRouteChange("/session-expired");
          } else toast.error(res?.data?.message);
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
        onClick={() => handleGenerateStatement(0)}
        disabled={disabled}
      >
        Generate Statement
      </Button>

      <CustomTable
        statements={statement}
        accNumber={userInfo?.account?.accNumber}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
          marginTop: "20px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosNewIcon />}
          sx={{
            width: "400px",
            margin: "10px",
            display: disabled ? "flex" : "none",
          }}
          disabled={page === 0}
          onClick={() => handleGenerateStatement(page - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          startIcon={<ArrowForwardIosIcon />}
          sx={{
            display: disabled ? "flex" : "none",
            width: "400px",
            margin: "10px",
          }}
          disabled={statement.length < 5}
          onClick={() => handleGenerateStatement(page + 1)}
        >
          Next
        </Button>
      </div>
    </Box>
  );
}
