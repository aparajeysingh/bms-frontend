import React, { useState } from "react";
import { Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import CustomDatePicker from "../../components/CusotmDatePicker";
import { transactionType } from "../../utils/constants";
import CustomDropDown from "../../components/CustomDropDown";

export default function FundTransfer() {
    const navigate = useNavigate();

    const [transaction, setTransaction] = useState('')
    const [transactionDate, setTransactionDate] = useState('')

    const handleRouteChange = (route) => {
        navigate(route);
    };

    const sanityCheck = () => {
        let check = false;

        return { check: true, message: "" };
    };


    return (
        <Box
            component="main"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: 1, p: 3
            }}
            className="login-container"
            noValidate
            autoComplete="off"
        >
            <Toolbar />
            <Toaster position="top-right" reverseOrder={false} />
            <Typography
                variant="h3"
                sx={{
                    color: "#3498db",
                }}
                gutterBottom
            >
                Funds Transfer
            </Typography>
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
                        margin: "10px",
                    }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="To Account"
                    placeholder="enter receivers account number"
                    sx={{
                        width: "400px",
                        margin: "10px",
                    }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Amount"
                    placeholder="enter the amount you want to send"
                    sx={{
                        width: "400px",
                        margin: "10px",
                    }}
                />
                <CustomDatePicker onChange={setTransactionDate} />
                <CustomDropDown
                    label="Transaction type"
                    options={transactionType}
                    name="transactionType"
                    previousState={transaction}
                    value={transaction}
                    onChange={setTransaction}
                />
                <TextField

                    id="outlined-required"
                    label="Maturity Instructions"
                    placeholder="enter maturity instructions if any"
                    sx={{
                        width: "400px",
                        margin: "10px",
                    }}
                />
                <TextField

                    id="outlined-required"
                    label="Remark"
                    placeholder="enter remarks if any"
                    sx={{
                        width: "400px",
                        margin: "10px",
                    }}
                />
            </div>
            <Button
                variant="contained"
                sx={{
                    width: "400px",
                    margin: "10px",
                }}

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
                    margin: "10px !important",
                }}

            />
            <Button
                variant="contained"
                sx={{
                    width: "400px",
                    margin: "10px",
                }}
            >
                Register
            </Button> */}
        </Box>
    );

};
