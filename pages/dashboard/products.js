import styles from "../../styles/panelProducts.module.css";
import { Button, IconButton } from "@mui/material";
import PanelProduct from "../../src/components/PanelProduct/PanelProduct";
import product1 from "../../public/product1.jpeg";
import product2 from "../../public/product2.jpeg";

const Products = () => {
  return (
    <article className={`${styles.container} row`}>
      <PanelProduct
        title="Product1"
        text={`The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`}
        image={product1}
        price="2"
      />
      <PanelProduct
        title="Product2"
        text={`The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.`}
        image={product2}
        price="3"
      />
    </article>
  );
};

export default Products;
