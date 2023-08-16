import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import CustomDatePicker from "../../components/CusotmDatePicker";
import CustomDropDown from "../../components/CustomDropDown";

export default function SavingsAccount() {
  const navigate = useNavigate();

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const occupationTypes = [
    { value: "salaried", label: "Salaried Employee" },
    { value: "self-employed", label: "Self-Employed / Business Owner" },
    { value: "student", label: "Student" },
    { value: "retired", label: "Retired" },
    { value: "homemaker", label: "Homemaker" },
    { value: "unemployed", label: "Unemployed" },
    { value: "freelancer", label: "Freelancer / Contractor" },
    {
      value: "professional",
      label: "Professional (Doctor, Lawyer, Engineer, etc.)",
    },
    { value: "government-employee", label: "Government Employee" },
    { value: "private-sector-employee", label: "Private Sector Employee" },
    { value: "entrepreneur", label: "Entrepreneur" },
    { value: "artist", label: "Artist / Creative Professional" },
    { value: "farmer", label: "Farmer" },
    { value: "technician", label: "Technician / Skilled Worker" },
  ];

  const sourceOfIncomeOptions = [
    { value: "salary", label: "Salary / Wages" },
    { value: "business-income", label: "Business Income / Self-Employment" },
    {
      value: "investments",
      label: "Investments (Dividends, Interest, Capital Gains)",
    },
    { value: "rental-income", label: "Rental Income" },
    { value: "pension", label: "Pension" },
    { value: "social-security", label: "Social Security" },
    { value: "government-assistance", label: "Government Assistance" },
    { value: "spouses-income", label: "Spouse's Income" },
    { value: "savings-inheritance", label: "Savings / Inheritance" },
  ];

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
        onClick={() => {
          handleRouteChange("/login");
        }}
      >
        Create account
      </Button>
    </Box>
  );
}
