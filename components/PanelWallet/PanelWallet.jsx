import styles from "./panelWallet.module.css";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleWallet } from "../../features/userSlice/userSlice";
import { IoCloseSharp } from "react-icons/io5";

const PanelWallet = () => {
  const { userPanel } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(handleToggleWallet());

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

  return (
    <Modal
      open={userPanel.openWallet}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className={`d-flex flex-column align-items-center ${styles.parentModal}`}
        sx={style}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Wallet
        </Typography>
        <div className="d-flex justify-content-between w-100 mt-3  align-items-baseline">
          <div className="d-flex">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Remaining:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              10$
            </Typography>
          </div>
          <Button variant="contained" size="small">charge</Button>
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

export default PanelWallet;
