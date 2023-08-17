import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';


export default function CustomDatePicker(props) {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const dateChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={props.label ?? "Date of birth"}
        sx={{ width: "400px", margin: "5px" }}
        value={value}
        onChange={(newValue) => { console.log(newValue); setValue(newValue) }}

      />
    </LocalizationProvider>
  );
}
