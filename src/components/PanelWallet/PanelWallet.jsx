import styles from "./panelWallet.module.css";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleWallet } from "../../features/userSlice/userSlice";
import { IoCloseSharp } from "react-icons/io5";

const PanelWallet = () => {
  const { userPanel } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(handleToggleWallet());
  
  const style = {
    position: "absolute" ,
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
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
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
