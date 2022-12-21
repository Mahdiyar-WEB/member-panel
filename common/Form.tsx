import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";



const Form = ({
  fields,
  initialValues,
  submitHandler,
  validation,
  setSteps,
  step,
}) => {
  const onSubmit = (values: any) => {
    submitHandler(values);
    if (setSteps) {
      setSteps(step + 1);
    }
  };

  const validationSchema = validation;

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    // isInitialValid: false,
  });

  return (
    <form className="px-3 mx-0 px-md-5 mx-md-2" onSubmit={formik.handleSubmit}>
      {fields.map((field, index) => {
        return (
          <TextField
            inputProps={field.attributes}
            fullWidth
            sx={field.sx}
            error={
              formik.touched[field.label] && Boolean(formik.errors[field.label])
            }
            helperText={
              formik.touched[field.label] &&
              formik.errors[field.label] &&
              String(formik.errors[field.label])
            }
            key={index}
            {...formik.getFieldProps(field.label)}
            label={field.label.replaceAll("_", " ")}
            type={field.type}
          />
        );
      })}
      <Button
        className="mt-4 col-md-4 d-block ms-auto"
        type="submit"
        disabled={!formik.isValid}
        variant="contained"
      >
        {step === 3 ? "save" : step === 2 ? "Finish" : "Next Step"}
      </Button>
    </form>
  );
};

export default Form;
