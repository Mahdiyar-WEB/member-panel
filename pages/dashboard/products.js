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
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    category: "S1",
    subCategories: [
      {
        id: 1,
        category: "S11",
        description: "This is s11",
        price: 2,
        quantity: 0,
        minQuantity: 0,
        maxQuantity: 30,
      },
      {
        id: 2,
        category: "S12",
        description: "This is s12",
        price: 1,
        quantity: 1,
        minQuantity: 1,
        maxQuantity: 30,
      },
      {
        id: 3,
        category: "S13",
        description: "This is s13",
        price: 0.5,
        quantity: 2,
        minQuantity: 2,
        maxQuantity: 30,
      },
      {
        id: 4,
        category: "S14",
        description: "This is s14",
        price: 1.5,
        quantity: 3,
        minQuantity: 3,
        maxQuantity: 30,
      },
    ],
    activeSub: {
      id: 1,
      category: "S11",
      description: "This is s11",
      price: 2,
      quantity: 0,
      minQuantity: 0,
      maxQuantity: 30,
    },
  },
  {
    id: 2,
    category: "s2",
    subCategories: [
      {
        id: 1,
        category: "S21",
        description: "This is s21",
        price: 2,
        quantity: 4,
        minQuantity: 4,
        maxQuantity: 30,
      },
      {
        id: 2,
        category: "S22",
        description: "This is s22",
        price: 1,
        quantity: 5,
        minQuantity: 5,
        maxQuantity: 30,
      },
      {
        id: 3,
        category: "S23",
        description: "This is s23",
        price: 0.5,
        quantity: 6,
        minQuantity: 6,
        maxQuantity: 30,
      },
      {
        id: 4,
        category: "S24",
        description: "This is s24",
        price: 1.5,
        quantity: 7,
        minQuantity: 7,
        maxQuantity: 30,
      },
    ],
    activeSub: {
      id: 1,
      category: "S21",
      description: "This is s21",
      price: 2,
      quantity: 4,
      minQuantity: 4,
      maxQuantity: 30,
    },
  },
  {
    id: 3,
    category: "s3",
    subCategories: [
      {
        id: 1,
        category: "S31",
        description: "This is s31",
        price: 2,
        quantity: 8,
        minQuantity: 8,
        maxQuantity: 100,
      },
      {
        id: 2,
        category: "S32",
        description: "This is s32",
        price: 1,
        quantity: 9,
        minQuantity: 9,
        maxQuantity: 100,
      },
      {
        id: 3,
        category: "S33",
        description: "This is s33",
        price: 0.5,
        quantity: 10,
        minQuantity: 10,
        maxQuantity: 100,
      },
      {
        id: 4,
        category: "S34",
        description: "This is s34",
        price: 1.5,
        quantity: 11,
        minQuantity: 11,
        maxQuantity: 100,
      },
    ],
    activeSub: {
      id: 1,
      category: "S31",
      description: "This is s31",
      price: 2,
      quantity: 8,
      minQuantity: 8,
      maxQuantity: 100,
    },
  },
];

const Products = () => {
  const [product, setProduct] = useState({
    id: 1,
    category: "S1",
    subCategories: [
      {
        id: 1,
        category: "S11",
        description: "This is s11",
        price: 2,
        quantity: 20,
        minQuantity: 20,
        maxQuantity: 30,
      },
      {
        id: 2,
        category: "S12",
        description: "This is s12",
        price: 1,
        quantity: 20,
        minQuantity: 20,
        maxQuantity: 30,
      },
      {
        id: 3,
        category: "S13",
        description: "This is s13",
        price: 0.5,
        quantity: 20,
        minQuantity: 20,
        maxQuantity: 30,
      },
      {
        id: 4,
        category: "S14",
        description: "This is s14",
        price: 1.5,
        quantity: 20,
        minQuantity: 20,
        maxQuantity: 30,
      },
    ],
    activeSub: {
      id: 1,
      category: "S11",
      description: "This is s11",
      price: 2,
      quantity: 20,
      minQuantity: 20,
      maxQuantity: 30,
      price:0
    },
  });

  useEffect(() => {
    setProduct(products[0]);
  }, []);

  const handleChange = (e) => {
    const definedProduct = products.find(
      (product) => product.id === e.target.value
    );
    setProduct(definedProduct);
  };
  const handleSubChange = (e) => {
    const definedProduct = product.subCategories.find(
      (item) => item.id === e.target.value
    );
    setProduct({ ...product, activeSub: definedProduct });
  };

  return (
    <article className={`${styles.container} row`}>
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
            value={product?.activeSub.id}
            label="Service"
            onChange={handleSubChange}
          >
            {product?.subCategories.map((subCategory) => {
              return (
                <MenuItem key={subCategory.id} value={subCategory.id}>
                  {subCategory.category} - {subCategory.price}$
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
          InputProps={{
            readOnly:true
          }}
          rows={4}
          value={product.activeSub.description}
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
            inputProps: {
              min: product.activeSub.minQuantity,
              max: product.activeSub.maxQuantity,
            },
          }}
          value={product.activeSub.quantity}
          onChange={(e) =>
            setProduct({
              ...product,
              activeSub: { ...product.activeSub, quantity: e.target.value },
            })
          }
        />
        <Button variant="contained" className="col-12 col-md-4">
          Submit - {product.activeSub.quantity * product.activeSub.price}$
        </Button>
      </Box>
    </article>
  );
};

export default Products;
