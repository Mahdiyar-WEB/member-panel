import styles from "../../styles/panelProducts.module.css";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  InputAdornment,
  TextField,
  Box,
} from "@mui/material";
import PanelProduct from "../../src/components/PanelProduct/PanelProduct";
import product1 from "../../public/product1.jpeg";
import product2 from "../../public/product2.jpeg";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const products = [
  {
    id: 1,
    category: "s1",
    subCategories: [
      { subId: 1, title: "s11" },
      { subId: 2, title: "s12" },
      { subId: 3, title: "s13" },
    ],
    activeSub: 1,
    description: "hello this is s1",
    quantity: 100,
    minQuantity: 100,
    maxQuantity: 900,
  },
  {
    id: 2,
    category: "s2",
    subCategories: [
      { subId: 1, title: "s21" },
      { subId: 2, title: "s22" },
      { subId: 3, title: "s23" },
    ],
    activeSub: 1,
    description: "hello this is s2",
    quantity: 10,
    minQuantity: 10,
    maxQuantity: 30,
  },
  {
    id: 3,
    category: "s3",
    subCategories: [
      { subId: 1, title: "s31" },
      { subId: 2, title: "s32" },
      { subId: 3, title: "s33" },
    ],
    activeSub:1,
    description: "hello this is s3",
    quantity: 0,
    minQuantity: 0,
    maxQuantity: 10,
  },
  {
    id: 4,
    category: "s4",
    subCategories: [
      { subId: 1, title: "s41" },
      { subId: 2, title: "s42" },
      { subId: 3, title: "s43" },
    ],
    activeSub: 1,
    description: "hello this is s4",
    quantity: 20,
    minQuantity: 20,
    maxQuantity: 30,
  },
];

const Products = () => {
  const [product, setProduct] = useState({
    id: 1,
    category: "",
    subCategories: [
      { subId: 1, title: "" },
      { subId: 2, title: "" },
      { subId: 3, title: "" },
    ],
    activeSub: 1,
    description: "",
    quantity: 0,
    minQuantity: 0,
    maxQuantity: 0,
  });

  useEffect(() => {
    setProduct(products[0]);
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    const definedProduct = products.find(
      (product) => product.id === e.target.value
    );
    setProduct(definedProduct);
  };
  const handleSubChange = (e) => {
    setProduct({ ...product, activeSub: e.target.value });
  };

  return (
    <article className={`${styles.container} row`}>
      {/* <PanelProduct
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
      /> */}
      <Box className="d-flex flex-column gap-4">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Products</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product.id}
            label="Products"
            onChange={handleChange}
          >
            {products.map((product) => {
              return (
                <MenuItem key={product.id} value={product.id}>
                  {product.category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Service</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product?.activeSub}
            label="Service"
            onChange={handleSubChange}
          >
            {product?.subCategories.map((subCategory) => {
              return (
                <MenuItem key={subCategory.subId} value={subCategory.subId}>
                  {subCategory.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={product.description}
        />
        <TextField
          fullWidth
          label="Link"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">https://t.me/</InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="Quantity"
          type="number"
          InputProps={{
            inputProps: { min: product.minQuantity, max: product.maxQuantity },
          }}
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        />
        <Button variant="contained" className="col-12 col-md-4">
          Submit
        </Button>
      </Box>
    </article>
  );
};

export default Products;
