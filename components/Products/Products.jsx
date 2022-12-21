import styles from "./products.module.css";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from "@mui/material";
import service1 from "../../public/service1.svg";
import service2 from "../../public/service2.svg";
import service3 from "../../public/service3.svg";
import service4 from "../../public/service4.svg";

const Products = () => {
  return (
    <article id="products" className={`${styles.container}`}>
      <div className={`${styles.productsContainer} container`}>
      <Card >
        <CardMedia component="img"
        height="230"
        image={service1}
        alt="green iguana"/>
        <CardContent>
          <Typography>salam</Typography>
        </CardContent>
        <CardActions >
          <Button size="small">Share</Button>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
      <Card >
        <CardMedia component="img"
        height="230"
        image={service2}
        alt="green iguana"/>
        <CardContent>
          <Typography>salam</Typography>
        </CardContent>
        <CardActions >
          <Button size="small">Share</Button>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
      <Card >
        <CardMedia component="img"
        height="230"
        image={service3}
        alt="green iguana"/>
        <CardContent>
          <Typography>salam</Typography>
        </CardContent>
        <CardActions >
          <Button size="small">Share</Button>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
      <Card >
        <CardMedia component="img"
        height="230"
        image={service4}
        alt="green iguana"/>
        <CardContent>
          <Typography>salam</Typography>
        </CardContent>
        <CardActions >
          <Button size="small">Share</Button>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
      </div>
    </article>
  );
};

export default Products;
