import { IconButton } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./toggleTop.module.css";

const ToggleTop = ({isShow}) => {

  const toggleTopHandler = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <IconButton
      size="large"
      className={`${styles.toggleTop} ${isShow && styles.show} bg-primary text-white`}
      onClick={toggleTopHandler}
    >
      <IoIosArrowUp />
    </IconButton>
  );
};

export default ToggleTop;
