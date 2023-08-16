import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function CustomDropDown(props) {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-controlled-open-select-label">
        {props.label}
      </InputLabel>
      <Select
        required
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={age}
        label={props.label}
        onChange={handleChange}
      >
        {props.options.map((option) => {
          return <MenuItem value={option.value}>{option.label}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}