import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function CustomDatePicker(props) {
  const [date, setDate] = useState(dayjs(Date.now()));

  const dateChange = (date) => {
    const formattedDate = date.format();
    const newDate = formattedDate.substring(0, 10);
    props.onChange(newDate);
    setDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={props.label ?? "Date of birth"}
        sx={{ width: "400px", margin: props.margin ?? "5px" }}
        onChange={(newValue) => {
          dateChange(newValue);
        }}
        disabled={props.disabled ?? false}
        value={date}
      />
    </LocalizationProvider>
  );
}
