import React, { useState } from "react";
import { Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Container from "@mui/material/Container";
import { addPayee } from "../../services/payeeService";

export default function Payee(props) {
  const navigate = useNavigate();

  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [beneficiaryAccountNumber, setBeneficiaryAccountNumber] = useState("");
  const [reEnterBeneficiaryAccountNumber, setReEnterBeneficiaryAccountNumber] =
    useState("");
  const [nickName, setNickName] = useState("");

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const sanityCheck = () => {
    let check = false;
    if (beneficiaryName === "") {
      return { check: false, message: "Please enter beneficiary name" };
    }
    if (beneficiaryAccountNumber === "") {
      return {
        check: false,
        message: "Please enter beneficiary account number",
      };
    }
    if (reEnterBeneficiaryAccountNumber === "") {
      return {
        check: false,
        message: "Please re-enter beneficiary account number",
      };
    }
    if (beneficiaryAccountNumber !== reEnterBeneficiaryAccountNumber) {
      return {
        check: false,
        message:
          "Beneficiary account number and re-enter beneficiary account number should be same",
      };
    }

    return { check: true, message: "" };
  };

  const handleSaveBeneficiaryClick = () => {
    const { check, message } = sanityCheck();
    if (check) {
      // API call

      let data = {
        beneficiaryName,
        beneficiaryAccNumber: beneficiaryAccountNumber,
        nickname: nickName,
      };
      addPayee(data).then((res) => {
        if (res.status === 201) {
          toast.success("Beneficiary added successfully");
          setBeneficiaryName("");
          setBeneficiaryAccountNumber("");
          setReEnterBeneficiaryAccountNumber("");
          setNickName("");
        } else {
          if (res.data.message.includes("invalid token")) {
            handleRouteChange("/session-expired");
          } else toast.error(res?.data?.message);
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
        Add Payee
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
              label="Beneficiary Name"
              placeholder="enter beneficiary name"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
              value={beneficiaryName}
              onChange={(e) => setBeneficiaryName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Beneficiary Account Number"
              placeholder="enter beneficiary account number"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
              value={beneficiaryAccountNumber}
              onChange={(e) => setBeneficiaryAccountNumber(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Re-enter Beneficiary Account Number"
              placeholder="re-enter beneficiary account number"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
              value={reEnterBeneficiaryAccountNumber}
              onChange={(e) =>
                setReEnterBeneficiaryAccountNumber(e.target.value)
              }
            />

            <TextField
              id="outlined-required"
              label="Nick Name"
              placeholder="enter nick name"
              sx={{
                width: "400px",
                margin: "10px 5px",
              }}
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            sx={{
              width: "400px",
              margin: "10px 5px",
            }}
            onClick={handleSaveBeneficiaryClick}
          >
            Save as beneficiary
          </Button>
        </div>
      </Container>
    </Box>
  );
}
