import React, { useState } from "react";
import {
  Box,
  Button,
  Fab,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import CustomDatePicker from "../../components/CusotmDatePicker";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { getUserInfo } from "../../services/userService";
import dayjs from "dayjs";
import { createTransaction } from "../../services/transactionsService";
import { getPayees } from "../../services/payeeService";
import AddIcon from "@mui/icons-material/Add";

export default function FundTransfer(props) {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState("");
  const [transaction, setTransaction] = useState("");
  const [transactionDate, setTransactionDate] = useState(dayjs(Date.now()));
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  // const [dateOfTransaction, setDateOfTransaction] = useState(dayjs(Date.now()));
  const [transactionType, setTransactionType] = useState("");
  const [remark, setRemark] = useState("");
  const [pin, setPin] = useState("");
  const [maturityInstructions, setMaturityInstructions] = useState("");
  const [payeeList, setPayeeList] = useState([]);

  const handleRouteChange = (route) => {
    navigate(route);
  };

  React.useEffect(() => {
    getUserInfo().then((res) => {
      if (res.status === 200) {
        setUserInfo(res.data);
        setFromAccount(res.data.account.accNumber);
      } else {
        // redirect to login
        if (res.data.message.includes("invalid token")) {
          handleRouteChange("/session-expired");
        } else handleRouteChange("/login");
      }
    });

    getPayees().then((res) => {
      if (res.status === 200) {
        setPayeeList(res.data);
      } else {
        // redirect to login
        if (res.data.message.includes("invalid token")) {
          handleRouteChange("/session-expired");
        } else toast.error(res?.data?.message);
      }
    });
  }, []);

  const sanityCheck = () => {
    let check = false;
    if (!fromAccount) return { check, message: "From Account cannot be empty" };
    if (!toAccount) return { check, message: "To Account cannot be empty" };

    return { check: true, message: "" };
  };

  const handleTransaction = () => {
    const { check, message } = sanityCheck();

    if (check) {
      const data = {
        fromAcc: fromAccount,
        toAcc: toAccount,
        amount,
        transType: transactionType,
        // timeStamp: transactionDate,
        pin,
      };
      createTransaction(data).then((res) => {
        if (res.status === 201) {
          toast.success("Transaction successful with id: " + res.data.transId);
        } else {
          toast.error(res.data.message);
        }
      });
    } else {
      toast.error(message);
    }
  };

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
        Funds Transfer
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
        <div>
          <Toaster position="top-right" reverseOrder={false} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="From Account"
              placeholder="enter your account number"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
              disabled={true}
              value={fromAccount}
            />
            <div
              sx={{
                display: "flex",
              }}
            >
              <FormControl
                sx={{
                  width: "400px",
                  margin: "10px 5px",
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  To Account
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={toAccount}
                  label="To Account"
                  onChange={(e) => setToAccount(e.target.value)}
                >
                  {payeeList.map((payee) => (
                    <MenuItem key={payee.id} value={payee.beneficiaryAccNumber}>
                      {payee.beneficiaryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Fab
                color="primary"
                aria-label="add"
                variant="extended"
                sx={{
                  width: "150px",
                  margin: "10px 5px",
                }}
                onClick={() => handleRouteChange("/dashboard/add-payee")}
              >
                <AddIcon sx={{ mr: 1 }} />
                Add Payee
              </Fab>
            </div>
            <TextField
              required
              id="outlined-required"
              label="Amount"
              placeholder="enter the amount you want to send"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <CustomDatePicker
              onChange={setTransactionDate}
              value={Date.now()}
              margin={"10px 5px"}
              label={"Date of transaction"}
              disabled={true}
            />

            <FormControl
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
            >
              <FormLabel id="demo-row-radio-buttons-group-label">
                Transaction type
              </FormLabel>
              <RadioGroup
                row
                name="row-radio-buttons-group"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <FormControlLabel
                  value="RTGS"
                  control={<Radio />}
                  label="RTGS"
                />
                <FormControlLabel
                  value="IMPS"
                  control={<Radio />}
                  label="IMPS"
                />
                <FormControlLabel
                  value="NEFT"
                  control={<Radio />}
                  label="NEFT"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="outlined-required"
              label="PIN"
              placeholder="enter your pin"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            sx={{
              width: "400px",
              margin: "10px 5px",
            }}
            onClick={handleTransaction}
          >
            Continue
          </Button>
        </div>
      </Container>
    </Box>
  );
}
