import { IconButton } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./toggleTop.module.css";
import { useEffect, useState } from "react";

const ToggleTop = () => {
  const [isShow, setIsShow] = useState(false);
  const [toggle, setToggle] = useState(0);
  // const isBrowser = () => typeof window !== "undefined";

  // if (isBrowser) {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       window.scrollY > 250 &&
  //       document.body.scrollHeight - window.scrollY > 800
  //     ) {
  //       setIsShow(true);
  //     } else {
  //       setIsShow(false);
  //     }
  //   });
  // }

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.scrollTo({ behavior: "smooth", top: 0 });
  //   }
  // }, [toggle]);

  return (
    <IconButton
      size="large"
      className={`${styles.toggleTop} ${
        isShow && styles.show
      } bg-primary text-white`}
      onClick={() => setToggle((prev) => prev + 1)}
    >
      <IoIosArrowUp />
    </IconButton>
  );
};

export default ToggleTop;
