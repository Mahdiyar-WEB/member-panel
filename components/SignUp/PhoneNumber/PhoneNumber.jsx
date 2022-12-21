import { forwardRef } from "react";
import { TextField } from "@mui/material";

const PhoneNumber = (props, ref) => {

  return (
    <TextField
      {...props}
      inputRef={ref}  
      fullWidth
      label="phone number"
      variant="outlined"
      name="phone"
    />
  );
};
export default forwardRef(PhoneNumber);