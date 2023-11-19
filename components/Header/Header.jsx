import { useState } from "react";
import styles from "./header.module.css";
import { FiMenu } from "react-icons/fi";
import { IconButton, Menu, MenuItem, Divider } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import Link from "next/link";
import { RiHome2Fill, RiQuestionnaireFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  // window.onresize = () => {
  //   if (window.innerWidth > 991) {
  //     setAnchorEl(null);
  //   }
  // };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={`w-100 pt-3 ${styles.container}`}>
      <nav
        className={`mx-auto rounded rounded-1 py-2 py-md-3 px-lg-5 px-4 ${styles.navbar}`}
      >
        <div className={styles.contentContainer}>
          <Link href="/" className={`me-auto my-auto text-nowrap ${styles.active}`}>
            Member Panel
          </Link>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className="d-lg-none"
          >
            <FiMenu className={styles.menuIcon} size={30} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                bgcolor: "#fff",
                width: 180,
                "& .MuiAvatar-root": {
                  width: 42,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem className="pe-0">
              <RiHome2Fill className="text-secondary me-3" size={20} />
              <Link className="text-secondary w-100" href="/">
                Home
              </Link>
            </MenuItem>
            <MenuItem className="pe-0">
              <FaBoxOpen className="text-secondary me-3" size={20} />
              <Link
                className="text-secondary w-100"
                scroll={true}
                href="/products"
              >
                Products
              </Link>
            </MenuItem>
            <MenuItem className="pe-0">
              <TiGroup className="text-secondary me-3" size={20} />
              <Link
                className="text-secondary w-100"
                scroll={true}
                href="/#about"
              >
                About
              </Link>
            </MenuItem>
            <MenuItem className="pe-0">
              <RiQuestionnaireFill className="text-secondary me-3" size={20} />
              <Link className="text-secondary w-100" scroll={true} href="/#faq">
                FAQ
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem className="pe-0">
              <Link className="text-secondary w-100" href="/login-signup">
                Login / Sign-up
              </Link>
            </MenuItem>
          </Menu>
          <div className="d-none d-lg-flex w-100 ">
            <ul className="mx-auto my-auto d-flex gap-5 h-100">
              <Link className={styles.link} scroll={true} href="/products">
                Products
              </Link>
              <Link className={styles.link} scroll={true} href="/#about">
                About
              </Link>
              <Link className={styles.link} scroll={true} href="/#faq">
                FAQ
              </Link>
            </ul>
            <ul className="my-auto">
              <Link className={styles.link} href="/login-signup">
                Login / Sign-up
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
