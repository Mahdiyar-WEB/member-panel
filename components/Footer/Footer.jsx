import styles from "./footer.module.css";
import { Avatar } from "@mui/material";
import { BsInstagram, BsTelegram, BsGithub, BsTwitter } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-hash-link";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className="d-flex justify-content-center gap-5">
        <a href="">
          <Avatar alt="telegram icon" sx={{ bgcolor: "#1877F2" }}>
            <BsTelegram />
          </Avatar>
        </a>
        <a href="">
          <Avatar alt="instagram icon" sx={{ bgcolor: "#E91E63" }}>
            <BsInstagram />
          </Avatar>
        </a>
        <a href="">
          <Avatar alt="github icon" sx={{ bgcolor: "#1F2F67" }}>
            <BsGithub />
          </Avatar>
        </a>
        <a href="">
          <Avatar alt="twitter icon" sx={{ bgcolor: "#1DA1F2" }}>
            <BsTwitter />
          </Avatar>
        </a>
      </div>
      <div className="d-flex justify-content-center gap-4 gap-sm-5 pt-4 mt-2">
        <Link className={styles.links} scroll={true} href="/#about">
          About
        </Link>
        <Link className={styles.links} scroll={true} href="/#products">
          Products
        </Link>
        <Link className={styles.links} scroll={true} href="/#faq">
          FAQ
        </Link>

        <Link href="login-signup" className={styles.links}>
          Login/Sign-up
        </Link>
      </div>
      <p className="text-center mt-auto  text-muted">
        &copy;2023 All rights reserved :{" "}
        <a className="text-white-50" href="">
          <FaUserFriends size={30} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
