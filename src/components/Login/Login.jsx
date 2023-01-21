import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FormikErrors, useFormik } from "formik";
import { memo, useState } from "react";
import * as Yup from "yup";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import ForgetPassword from "../ForgetPassword/ForgetPassword";



const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required("name is required")
    .min(5, "Name is to short"),
  password: Yup.string().required("password is required"),
});

const onSubmit = (values) => {
  alert("hi");
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
    // isInitialValid: false,
  });

  const handleMouseDownPassword = (
    event
  ) => {
    event.preventDefault();
  };

  return (
    <form className="w-100" onSubmit={formik.handleSubmit}>
      <Box className="d-flex flex-column px-4 py-3 align-items-start">
        {Object.keys(formik.values).map(
          (name, index) => {
            return (
              <FormControl key={index} fullWidth margin="normal">
                <InputLabel
                  htmlFor={name}
                  error={
                     formik.touched[name] &&  Boolean(formik.errors[name])
                  }
                >
                  {name}
                </InputLabel>
                <OutlinedInput
                  autoComplete="current-password"
                  key={index}
                  // margin="normal"
                  label={name}
                  type={
                    name === "password" && !showPassword ? "password" : "text"
                  }
                  {...formik.getFieldProps(name)}
                  error={
                    formik.touched[name] &&  Boolean(formik.errors[name])
                  }
                  endAdornment={
                    name === "password" && (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
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
        <FormControlLabel
          className="ps-1"
          control={
            <Checkbox
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
          }
          label="Remember me"
        />
        <button
          type="button"
          className="mt-3 ps-1 border border-0 bg-transparent text-primary"
          onClick={() => setShowForgetPassword(!showForgetPassword)}
        >
          Forget your password?
        </button>
        <Button
          className="mt-4 col-12 col-md-4"
          type="submit"
          disabled={!formik.isValid}
          variant="contained"
        >
          Login
        </Button>
      </Box>
      {showForgetPassword && <ForgetPassword />}
    </form>
  );
};

export default memo(Login);
