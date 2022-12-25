import styles from "./products.module.css";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import service1 from "../../public/service1.svg";
import service2 from "../../public/service2.svg";
import service3 from "../../public/service3.svg";
import service4 from "../../public/service4.svg";

const Products = () => {
  return (
    <article id="products" className={`${styles.container}`}>
      <div className={`${styles.productsContainer} container`}>
        <Card>
          <CardMedia>
            <Image layout="responsive"  src={service1} height={230} alt="green iguana" />
          </CardMedia>
          <CardContent>
            <Typography>salam</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
        <Card>
        <CardMedia>
            <Image layout="responsive" src={service2} height={230} alt="green iguana" />
          </CardMedia>
          <CardContent>
            <Typography>salam</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
        <Card>
        <CardMedia>
            <Image layout="responsive" src={service3} height={230} alt="green iguana" />
          </CardMedia>
          <CardContent>
            <Typography>salam</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
        <Card>
        <CardMedia>
            <Image layout="responsive" src={service4} height={230} alt="green iguana" />
          </CardMedia>
          <CardContent>
            <Typography>salam</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </div>
    </article>
  );
};

export default Products;
