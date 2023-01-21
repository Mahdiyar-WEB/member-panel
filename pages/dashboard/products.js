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
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Products = () => {
  const [product, setProduct] = useState(10);
  const handleChange = (e) => {
    console.log(e.target.value);
    setProduct(e.target.value);
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
            value={product}
            label="Products"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Service</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product}
            label="Service"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Default Value"
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
          InputProps={{ inputProps: { min: 100, max: 1300 } }}
          defaultValue={100}
        />
        <Button variant="contained" className="w-25">
          Submit
        </Button>
      </Box>
    </article>
  );
};

export default Products;
