import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import CustomDatePicker from "../../components/CusotmDatePicker";
import { transactionType } from "../../utils/constants";
import CustomDropDown from "../../components/CustomDropDown";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { getUserInfo } from "../../services/userService";
import dayjs from "dayjs";
import { createTransaction } from "../../services/transactionsService";

export default function FundTransfer(props) {
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [dateOfTransaction, setDateOfTransaction] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [remark, setRemark] = useState("");
  const [pin, setPin] = useState("");
  const [maturityInstructions, setMaturityInstructions] = useState("");

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const sanityCheck = () => {
    let check = false;

    return { check: true, message: "" };
  };

  const handleTransaction = () => {
    //   {
    //     "fromAcc": 1,
    //     "toAcc": 3,
    //     "amount": 70000,
    //     "transType": "NEFT",
    //     "timeStamp": "2027-09-07",
    //     "pin": "1234"
    // }
    const data = {
      fromAcc: fromAccount,
      toAcc: toAccount,
      amount,
      transType: transactionType,
      timeStamp: transactionDate,
      pin,
    };
    createTransaction(data).then((res) => {
      if (res.status === 201) {
        toast.success("Transaction successfull with id: " + res.data.transId);
      } else {
        toast.error(res.data.message);
      }
    });
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
              value={
                props && props?.user ? props?.user?.account?.accNumber : ""
              }
            />
            <TextField
              required
              id="outlined-required"
              label="To Account"
              placeholder="enter receivers account number"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
            />
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
              value={dayjs(Date.now()).format("YYYY-MM-DD")}
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
              label="Maturity Instructions"
              placeholder="enter maturity instructions if any"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
            />
            <TextField
              id="outlined-required"
              label="Remark"
              placeholder="enter remarks if any"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
            />
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
          {/* <TextField
            required
            id="outlined-required"
            label="Enter OTP"
            placeholder="enter OTP sent to your email id"
            sx={{
              width: "400px !important",
              margin: "10px 5px !important",
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: "400px",
              margin: "10px 5px",
            }}
          >
            Confirm
          </Button> */}
        </div>
      </Container>
    </Box>
  );
}
