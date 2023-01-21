import {
  Avatar,
  Collapse,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import styles from "./userMenu.module.css";
import { IoLogOut } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { IoMdArrowDropdown, IoIosWallet } from "react-icons/io";
import userImage from "../../../../public/user.jpg";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import {
  handleLoggedOut,
  handleToggleProfile,
  handleToggleWallet,
} from "../../../features/userSlice/userSlice";
import Image from "next/image";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(handleLoggedOut());
    router.push("/");
  };


  return (
    <>
      <div className="py-3 d-flex justify-content-start px-4 gap-2 w-100 align-items-center">
        <Avatar sx={{ width: 40, height: 40 }} >
          <Image quality={100} width={60} height={40} alt="user" src={userImage} />
        </Avatar>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.togglerMenu}
        >
          Remmy ma{" "}
          <IoMdArrowDropdown
            className={isOpen ? styles.rotate : styles.noRotate}
          />
        </button>
      </div>
      <Collapse in={isOpen} timeout="auto" className="w-100 px-3" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => dispatch(handleToggleProfile())}
            dense
            sx={{
              borderRadius: 1,

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <BsPersonCircle size={18} className="me-4" />
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton
            onClick={() => dispatch(handleToggleWallet())}
            dense
            sx={{
              borderRadius: 1,

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <IoIosWallet size={18} className="me-4" />
            <ListItemText primary="Wallet" />
          </ListItemButton>
          <ListItemButton
            onClick={() => handleLogout()}
            dense
            sx={{
              borderRadius: 1,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <IoLogOut size={20} className="me-4" />
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default UserMenu;
