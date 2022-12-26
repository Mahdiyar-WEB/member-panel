import { useFormik } from "formik";
import * as Yup from "yup";
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  Button,
} from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import styles from "./signUp.module.css";
// import "react-phone-number-input/style.css";


const initialValues = {
  username: "",
  password: "",
  email: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required("username is required")
    .min(5, "username is to short"),
  password: Yup.string().required("password is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneDetails, setPhoneDetails] = useState({
    value: "",
    validValue: "",
  });

  const onSubmit = (values) => {
    alert("hi");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  const handlePhoneChange = (e) => {
    console.log(e);

    if (typeof e === "string") {
      setPhoneDetails({ value: e, validValue: e });
    } else {
      setPhoneDetails({value: e ,validValue: "" });
    }
  };

  const handleMouseDownPassword = (
    event
  ) => {
    event.preventDefault();
  };

  return (
    <form className="w-100" onSubmit={formik.handleSubmit}>
      <Box className="row d-flex flex-column  px-4 mx-1 py-4 align-items-start">
        {Object.keys(formik.values).map(
          (name, index) => {
            return (
              <FormControl key={index} fullWidth className="px-0 my-2">
                <InputLabel
                  htmlFor={name}
                  error={
                    (formik.errors[name] && formik.touched[name] && true) ||
                    false
                  }
                >
                  {name}
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  autoComplete="current-password"
                  key={index}
                  label={name}
                  type={
                    name === "password" && !showPassword
                      ? "password"
                      : name === "email"
                      ? "email"
                      : "text"
                  }
                  {...formik.getFieldProps(name)}
                  error={
                    (formik.errors[name] && formik.touched[name] && true) ||
                    false
                  }
                  className=""
                  endAdornment={
                    name === "password" && (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword && name === "password" ? (
                            <MdVisibility />
                          ) : (
                            <MdVisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                />
                <FormHelperText
                  error={
                    formik.touched[name] && formik.errors[name] ? true : false
                  }
                >
                  {
                    formik.touched[name] && formik.errors[name]
                  }
                </FormHelperText>
              </FormControl>
            );
          }
        )}
        {/* <PhoneInput
          placeholder="Enter phone number"
          className={`px-0 mt-3 ${styles.phoneInput}`}
          value={phoneDetails.value}
          defaultCountry="US"
          withCountryCallingCode={true}
          onChange={(e) => handlePhoneChange(e)}
          inputComponent={PhoneNumber}
        />
        {!isValidPhoneNumber(phoneDetails.validValue) && <small>invalid</small>} */}
        <Button
          className="mt-4 col-12 col-md-4"
          type="submit"
          disabled={formik.isValid ? false : true}
          variant="contained"
        >
          sign up
        </Button>
      </Box>
    </form>
  );
};

export default SignUp;
