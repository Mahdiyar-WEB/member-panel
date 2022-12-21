import styles from "./panelProduct.module.css";
import { IconButton, Button } from "@mui/material";
import Image from "next/image";


const PanelProduct = ({ image, price, text, title }) => {
  return (
    <section className={`${styles.product} col-md-5 my-5 my-md-0`}>
      <IconButton className={`${styles.productImageContainer}`}>
        <Image src={image} alt={image} />

      </IconButton>
      <div className={`${styles.productContent}`}>
        <p className="text-center">{title}</p>
        <small className=" justify px-3 text-center text-black-50">
          {text}
        </small>
        <hr />
      </div>
      <div className={`${styles.productFooter} px-3`}>
        <p className="text-muted">${price}</p>
        <Button size="small" variant="contained">
          buy
        </Button>
      </div>
    </section>
  );
};

export default PanelProduct;
