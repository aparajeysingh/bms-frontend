import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDatePicker from "../../components/CusotmDatePicker";
import CustomDropDown from "../../components/CustomDropDown";
import { occupationTypes, sourceOfIncomeOptions } from "../../utils/constants";
import toast, { Toaster } from "react-hot-toast";
import { createNewAccount } from "../../services/accountsService";

export default function SavingsAccount() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [checkboxes, setCheckboxes] = useState(false);
  const [residentialAddress, setResidentialAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    pinCode: "",
  });
  const [permanentAddress, setPermanentAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    pinCode: "",
  });
  const [occupationDetails, setOccupationDetails] = useState({
    occupationType: "",
    sourceOfIncome: "",
    grossAnnualIncome: "",
  });
  const [debitCardRequired, setDebitCardRequired] = useState(false);
  const [optingForNetBanking, setOptingForNetBanking] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const sanityChecker = () => {
    let check = false;
    if (!title) return { check, message: "Title cannot be empty" };
    if (!firstName) return { check, message: "First name cannot be empty" };
    if (!lastName) return { check, message: "Last name cannot be empty" };
    if (!fathersName)
      return { check, message: "Father's name cannot be empty" };
    if (!mobileNumber)
      return { check, message: "Mobile number cannot be empty" };
    if (!email) return { check, message: "Email cannot be empty" };
    if (!aadhar) return { check, message: "Aadhar number cannot be empty" };
    if (!dateOfBirth)
      return { check, message: "Date of birth cannot be empty" };
    if (!residentialAddress.line1)
      return { check, message: "Residential address line 1 cannot be empty" };
    if (!residentialAddress.line2)
      return { check, message: "Residential address line 2 cannot be empty" };
    if (!residentialAddress.city)
      return { check, message: "City cannot be empty" };
    if (!residentialAddress.pinCode)
      return { check, message: "pinCode cannot be empty" };
    if (!permanentAddress.line1)
      return { check, message: "Permanent address line 1 cannot be empty" };
    if (!permanentAddress.line2)
      return { check, message: "Permanent address line 2 cannot be empty" };
    if (!permanentAddress.city)
      return { check, message: "Permanent city cannot be empty" };

    if (!permanentAddress.pinCode)
      return { check, message: "Permanent pinCode cannot be empty" };

    if (!occupationDetails.occupationType)
      return { check, message: "Occupation type cannot be empty" };
    if (!occupationDetails.sourceOfIncome)
      return { check, message: "Source of income cannot be empty" };
    if (!occupationDetails.grossAnnualIncome)
      return { check, message: "Gross annual income cannot be empty" };

    if (!agreeTerms)
      return { check, message: "Please agree to the terms and conditions" };

    return { check: true, message: "Account created successfully" };
  };

  const handleButtonSubmit = async () => {
    // do sanitycheck
    const sanityCheck = sanityChecker();
    console.log(sanityCheck);
    if (!sanityCheck.check) {
      toast.error(sanityCheck.message);
      return;
    } else {

      const data = {
        title,
        firstName,
        middleName,
        lastName,
        fatherName: fathersName,
        mobile: mobileNumber,
        email,
        aadhar,
        dob: dateOfBirth,
        residentAddress: residentialAddress,
        permanentAddress,
        occupationDetails,
        netBankingRequired: optingForNetBanking,
        debitCardRequired,
        balance: 0,
      };
      const response = await createNewAccount(data);

      if (response.status === 201) {
        toast.success("Account created successfully", { duration: 6000 });

        setTimeout(() => {
          handleRouteChange("/")
        }, 3000)
      }
      else {
        toast.error("We are facing some issues creating your Account, kindly try after some time");
      }

    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleMiddleNameChange = (e) => {
    setMiddleName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleFathersNameChange = (e) => {
    setFathersName(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAadharChange = (e) => {
    setAadhar(e.target.value);
  };

  const handleDobChange = (newDate) => {
    setDateOfBirth(newDate);
  };

  const handleSetAsResidentialAddress = () => {
    if (!checkboxes) {
      setPermanentAddress(residentialAddress);
      setCheckboxes(true);
    } else {
      setPermanentAddress({
        line1: "",
        line2: "",
        city: "",
        pinCode: "",
      });
      setCheckboxes(false);
    }
  };

  const handleDebitCardRequired = () => {
    setDebitCardRequired(!debitCardRequired);
  };

  const handleOptingForNetBanking = () => {
    setOptingForNetBanking(!optingForNetBanking);
  };

  const handleAgreeTerms = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
      className="login-container"
      noValidate
      autoComplete="off"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Typography
        variant="h3"
        sx={{
          color: "#3498db",
        }}
        gutterBottom
      >
        Open a savings account
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#3498db",
        }}
        gutterBottom
      >
        Enter your personal details
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
          label="Title"
          placeholder="Mr/Mrs/Ms"
          sx={{
            width: "400px",
            margin: "5px",
          }}
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="First Name"
          placeholder="John"
          sx={{
            width: "400px",
            margin: "5px",
          }}
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Middle Name"
          placeholder="Doe"
          sx={{
            width: "400px",
            margin: "5px",
          }}
          value={middleName}
          onChange={handleMiddleNameChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          placeholder="Smith"
          sx={{
            width: "400px",
            margin: "5px",
          }}
          value={lastName}
          onChange={handleLastNameChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Father's Name"
          placeholder="John Doe Smith"
          sx={{
            width: "400px",
            margin: "5px",
          }}
          value={fathersName}
          onChange={handleFathersNameChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Mobile Number"
          placeholder="9876543210"
          sx={{
            width: "400px",
            margin: "5px",
          }}
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Email Id"
          placeholder="john@mail.com"
          sx={{
            width: "400px",
            margin: "5px",
          }}
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Aadhar Number"
          placeholder="1234 5678 9012"
          sx={{
            width: "400px",
            margin: "5px",
          }}
          value={aadhar}
          onChange={handleAadharChange}
        />
        <CustomDatePicker onChange={handleDobChange} />
        <div>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#2c3e50",
              margin: "5px",
              marginTop: "25px",
            }}
          >
            Residential Address
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
              label="Address Line 1"
              placeholder="123, Main Street"
              sx={{
                width: "400px",
                margin: "5px",
              }}
              value={residentialAddress.line1}
              onChange={(event) => {
                setResidentialAddress({
                  ...residentialAddress,
                  line1: event.target.value,
                });
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="Address Line 2"
              placeholder="Oxford Villa"
              sx={{
                width: "400px",
                margin: "5px",
              }}
              value={residentialAddress.line2}
              onChange={(event) => {
                setResidentialAddress({
                  ...residentialAddress,
                  line2: event.target.value,
                });
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="City"
              placeholder="Mumbai"
              sx={{
                width: "400px",
                margin: "5px",
              }}
              value={residentialAddress.city}
              onChange={(event) => {
                setResidentialAddress({
                  ...residentialAddress,
                  city: event.target.value,
                });
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="pinCode"
              placeholder="400001"
              sx={{
                width: "400px",
                margin: "5px",
              }}
              value={residentialAddress.pinCode}
              onChange={(event) => {
                setResidentialAddress({
                  ...residentialAddress,
                  pinCode: event.target.value,
                });
              }}
            />
          </div>
          <div>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "#2c3e50",
                margin: "5px",
                marginTop: "25px",
              }}
            >
              Permanent Address
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              sx={{
                paddingLeft: "5px",
              }}
              label="Same as residential address"
              onClick={handleSetAsResidentialAddress}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="Address Line 1"
                placeholder="123, Main Street"
                sx={{
                  width: "400px",
                  margin: "5px",
                }}
                value={permanentAddress.line1}
                onChange={(event) => {
                  setPermanentAddress({
                    ...permanentAddress,
                    line1: event.target.value,
                  });
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Address Line 2"
                placeholder="Oxford Villa"
                sx={{
                  width: "400px",
                  margin: "5px",
                }}
                value={permanentAddress.line2}
                onChange={(event) => {
                  setPermanentAddress({
                    ...permanentAddress,
                    line2: event.target.value,
                  });
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="City"
                placeholder="Mumbai"
                sx={{
                  width: "400px",
                  margin: "5px",
                }}
                value={permanentAddress.city}
                onChange={(event) => {
                  setPermanentAddress({
                    ...permanentAddress,
                    city: event.target.value,
                  });
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="pinCode"
                placeholder="400001"
                sx={{
                  width: "400px",
                  margin: "5px",
                }}
                value={permanentAddress.pinCode}
                onChange={(event) => {
                  setPermanentAddress({
                    ...permanentAddress,
                    pinCode: event.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#2c3e50",
              margin: "5px",
              marginTop: "25px",
            }}
          >
            Occupation Details
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CustomDropDown
              label="Occupation type"
              options={occupationTypes}
              name="occupationType"
              previousState={occupationDetails}
              value={occupationDetails.occupationType}
              onChange={setOccupationDetails}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CustomDropDown
              label="Source of Income"
              options={sourceOfIncomeOptions}
              name="sourceOfIncome"
              previousState={occupationDetails}
              value={occupationDetails.sourceOfIncome}
              onChange={setOccupationDetails}
            />
          </div>
          <TextField
            required
            id="outlined-required"
            label="Gross Annual Income"
            placeholder="1000000"
            sx={{
              width: "400px",
              margin: "7.7px",
            }}
            value={occupationDetails.grossAnnualIncome}
            onChange={(event) => {
              setOccupationDetails({
                ...occupationDetails,
                grossAnnualIncome: event.target.value,
              });
            }}
          />
        </div>
        <FormControlLabel
          control={<Checkbox checked={debitCardRequired} />}
          sx={{
            paddingLeft: "5px",
          }}
          label="Do you want a debit card?"
          onClick={handleDebitCardRequired}
        />

        <FormControlLabel
          control={<Checkbox checked={optingForNetBanking} />}
          sx={{
            paddingLeft: "5px",
          }}
          label="Opt for Net Banking"
          onClick={handleOptingForNetBanking}
        />

        <FormControlLabel
          control={<Checkbox checked={agreeTerms} />}
          sx={{
            paddingLeft: "5px",
          }}
          label="I agree to the Terms and Conditions"
          onClick={handleAgreeTerms}
        />
      </div>
      <Button
        variant="contained"
        sx={{
          width: "400px",
          margin: "5px",
        }}
        onClick={handleButtonSubmit}
      >
        Create account
      </Button>
    </Box>
  );
}
