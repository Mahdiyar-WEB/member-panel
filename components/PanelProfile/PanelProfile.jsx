import styles from "./panelProfile.module.css";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Modal,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleProfile } from "../../features/userSlice/userSlice";
import { MdEdit } from "react-icons/md";
import user from "../../public/user.jpg";
import { useRef, MutableRefObject, useState } from "react";
import Form from "../../common/Form";
import * as Yup from "yup";
import { IoCloseSharp } from "react-icons/io5";
import successGif from "../../public/success.gif";
import Image from "next/image";

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formikChangePassword = {
    validation: Yup.object({
      current_password: Yup.string()
        .required("password is required")
        .min(4, "password is to short"),
      new_password: Yup.string()
        .required("new password is required")
        .min(4, "new password is to short"),
      confirm_password: Yup.string()
        .required("confirmation password is required")
        .oneOf(
          [Yup.ref("new_password"), null],
          "confirmation password must be match"
        ),
    }),
    fields: [
      { type: "password", label: "current_password", sx: { marginBottom: 3 } },
      { type: "password", label: "new_password", sx: { marginBottom: 3 } },
      { type: "password", label: "confirm_password" },
    ],
    initialValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
    submitHandler: (values) => {
      console.log(values);
      handleClose();
    },
  };

  return (
    <>
      <Button onClick={handleOpen} size="small" variant="contained">
        Edit
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#fff",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            paddingTop: 6,
          }}
          className={styles.modal}
        >
          <Form step={3} {...formikChangePassword} />
          <IconButton onClick={handleClose} className={styles.closeButton}>
            <IoCloseSharp />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}

function ChildModal2() {
  const [open, setOpen] = useState(false);
  const [steps, setSteps] = useState(0);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const stepsText = ["Enter email", "Enter code"];

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

  return (
    <>
      <Button onClick={handleOpen} size="small" variant="contained">
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
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
          }}
        >
          <Stepper className="mb-5" activeStep={steps} alternativeLabel>
            {stepsText.map((label, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
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
            <div>
              <Image
                src={successGif}
                className="mx-auto h-25 d-block"
                alt="success gif"
              />
              <p className="text-center pt-3  h6">
                Your Email changed successfuly
              </p>
              <Button
                variant="contained"
                className="mx-auto mt-4 d-block w-25"
                onClick={() => handleClose()}
              >
                Close
              </Button>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
}

const PanelProfile = () => {
  const { userPanel } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const fileRef = useRef();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#fff",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  const handleClose = () => dispatch(handleToggleProfile());

  return (
    <Modal
      open={userPanel.openProfile}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className={`d-flex flex-column align-items-center ${styles.parentModal}`}
        sx={style}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <IconButton
              onClick={() => fileRef.current.click()}
              size="small"
              className="bg-primary text-white"
            >
              <input ref={fileRef} hidden type="file" accept="image/*" />
              <MdEdit size={18} />
            </IconButton>
          }
        >
          <Avatar
            sx={{ width: 84, height: 84 }}
            alt="Travis Howard"
            src={user}
          />
        </Badge>
        <p className="mt-2 fw-normal">Remmy ma</p>
        <div
          className={`d-flex flex-column mb-4 justify-content-between w-100 ${styles.text}`}
        >
          <strong>Password</strong>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <span className={`mt-1 ${styles.passwordText}`}>********</span>
            <ChildModal />
          </div>
        </div>
        <div
          className={`d-flex flex-column mb-4 justify-content-between w-100 ${styles.text}`}
        >
          <strong>Email</strong>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <span className={styles.emailText}>mahdiyar472@gmail.com</span>
            <ChildModal2 />
          </div>
        </div>
        <IconButton
          size="small"
          onClick={handleClose}
          className={styles.closeButton}
        >
          <IoCloseSharp size={25} />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default PanelProfile;
