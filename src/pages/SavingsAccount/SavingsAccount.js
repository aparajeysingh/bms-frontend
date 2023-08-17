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

export default function SavingsAccount() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [aadhar, setAadhar] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [residentialAddress, setResidentialAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    pincode: ''
  });
  const [permanentAddress, setPermanentAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    pincode: ''
  })
  const [occupationDetails, setOccupationDetails] = useState({
    occupationType: "",
    sourceOfIncome: "",
    grossAnnualIncome: ""
  })
  const [debitCardRequired, setDebitCardRequired] = useState(false)
  const [optingForNetBanking, setOptingForNetBanking] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false);


  const handleRouteChange = (route) => {
    navigate(route);
  };

  const sanityChecker = () => {
    let check = 'false;'
    if (!title) return { check, message: "Title cannot be empty" };
    if (!firstName) return { check, message: "Firstname cannot be empty" };
  }

  const handleButtonSubmit = () => {
    // do sanitycheck


  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleMiddleNameChange = (e) => {
    setMiddleName(e)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handleFathersNameChange = (e) => {
    setFathersName(e.target.value);
  }

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleAadharChange = (e) => {
    setAadhar(e.target.value);
  }

  const handleDobChange = (e) => {
    setDateOfBirth(e.target.value)
  }

  const handleResidentialAddressChange = (e) => {
    // setResidentialAddress({...prevValues, })
  }

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
        <CustomDatePicker />
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
            />
            <TextField
              required
              id="outlined-required"
              label="Landmark"
              placeholder="Near Main Road"
              sx={{
                width: "400px",
                margin: "5px",
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="State"
              placeholder="Maharashtra"
              sx={{
                width: "400px",
                margin: "5px",
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
            />
            <TextField
              required
              id="outlined-required"
              label="Pincode"
              placeholder="400001"
              sx={{
                width: "400px",
                margin: "5px",
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
              />
              <TextField
                required
                id="outlined-required"
                label="Landmark"
                placeholder="Near Main Road"
                sx={{
                  width: "400px",
                  margin: "5px",
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="State"
                placeholder="Maharashtra"
                sx={{
                  width: "400px",
                  margin: "5px",
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
              />
              <TextField
                required
                id="outlined-required"
                label="Pincode"
                placeholder="400001"
                sx={{
                  width: "400px",
                  margin: "5px",
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
            <CustomDropDown label="Occupation type" options={occupationTypes} />
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
          />
        </div>
        <FormControlLabel
          control={<Checkbox />}
          sx={{
            paddingLeft: "5px",
          }}
          label="Do you want a debit card?"
        />

        <FormControlLabel
          control={<Checkbox />}
          sx={{
            paddingLeft: "5px",
          }}
          label="Opt for Net Banking"
        />

        <FormControlLabel
          control={<Checkbox />}
          sx={{
            paddingLeft: "5px",
          }}
          label="I agree to the Terms and Conditions"
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
