import axios from "axios";
import { useState } from "react";
import * as Yup from "yup";
import Form from "../../common/Form";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import successGif from "../../public/success.gif";
import {Button} from "@mui/material";
import Image from "next/image";

const formikEmail = {
  validation: Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("wrong email format"),
  }),
  fields: [{ type: "email", label: "email" }],
  initialValues: {
    email: "",
  },
  submitHandler: (values) => {
    console.log(values);
  },
};

const formikEmailAccess = {
  validation: Yup.object({
    code: Yup.string().required("code is required").min(4, "code is invalid"),
  }),
  fields: [{ type: "string", label: "code", attributes: { maxLength: "4" } }],
  initialValues: {
    code: "",
  },
  submitHandler: (values) => {
    console.log(values);
  },
};

const formikCahngePassword = {
  validation: Yup.object({
    new_password: Yup.string()
      .required("password is required")
      .min(4, "password is to short"),
    confirm_password: Yup.string()
      .required("Confirmation Password is required")
      .oneOf(
        [Yup.ref("new_password"), null],
        "Confirmation Password must be match"
      ),
  }),
  fields: [
    { type: "password", label: "new_password", sx: { marginBottom: 3 } },
    { type: "password", label: "confirm_password" },
  ],
  initialValues: {
    new_password: "",
    confirm_password: "",
  },
  submitHandler: (values) => {
    console.log(values);
  },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 650,
  bgcolor: "background.paper",
  boxShadow: 24,
  width: "90%",
  borderRadius: 1,
  pt: 4,
  pb: 3,
  px: 1,
};

const stepsText = ["Enter email", "Enter code", "New password"];

const ForgetPassword = () => {
  const [open, setOpen] = useState(true);
  const [steps, setSteps] = useState(0);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stepper className="mb-5" activeStep={steps} alternativeLabel>
          {stepsText.map((label, index) => {
            return (
              <Step key={index} >
                <StepLabel >{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {steps === 0 && (
          <Form setSteps={setSteps} step={steps} {...formikEmail} />
        )}
        {steps === 1 && (
          <Form setSteps={setSteps} step={steps} {...formikEmailAccess} />
        )}
        {steps === 2 && (
          <Form setSteps={setSteps} step={steps} {...formikCahngePassword} />
        )}
        {steps === 3 && (
          <div>
            <Image
              src={successGif}
              className="mx-auto h-25 d-block"
              alt="success gif"
            />
            <p className="text-center pt-3  h6">Your password changed successfuly</p>
            <Button variant="contained" className="mx-auto mt-4 d-block w-25" onClick={()=> handleClose()}>Close</Button>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ForgetPassword;
