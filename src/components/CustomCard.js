import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Toaster, toast } from "react-hot-toast";
import { approveAccount, disapproveAccount } from "../services/adminService";

export default function CustomCard(props) {
  const [disabled, setDisabled] = React.useState(false);

  const handleApproveClick = () => {
    setDisabled(true);
    const accNumber = props?.accNumber;
    approveAccount(accNumber).then((res) => {
      if (res.status === 200) {
        toast.success("Account approved successfully");
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  const handleCancelClick = () => {
    setDisabled(true);
    const accNumber = props?.accNumber;
    disapproveAccount(accNumber).then((res) => {
      if (res.status === 200) {
        toast.success("Account disapproved successfully");
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <Card sx={{ minWidth: 275, margin: "5px" }}>
      <CardContent>
        <Toaster position="top-right" reverseOrder={false} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Account Number
        </Typography>
        <Typography variant="h5" component="div">
          {props?.accNumber}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Name
        </Typography>
        <Typography variant="body2">
          {props?.title} {props?.firstName} {props?.lastName}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Email
        </Typography>
        <Typography variant="body2">{props?.email}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 10px",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          onClick={handleApproveClick}
          disable={disabled}
        >
          Approve
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={handleCancelClick}
          disabled={disabled}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
