import { IconButton } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./toggleTop.module.css";
import {useState} from "react";

const ToggleTop = () => {

  const [isShow,setIsShow] = useState(false);
  
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 250 && (document.body.scrollHeight - window.scrollY) > 800){
        setIsShow(true)
    }else{
        setIsShow(false)
    }
  })

  const handleToggleTop = ()=>{
    window.scrollTo({behavior:"smooth",top: 0});
  }

  return (
    <IconButton
      size="large"
      className={`${styles.toggleTop} ${isShow && styles.show } bg-primary text-white`}
      onClick={()=> handleToggleTop()}
    >
      <IoIosArrowUp />
    </IconButton>
  );
};

export default ToggleTop;
