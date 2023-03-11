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
import productsImage from "../../../public/productsImage.png";
import Link from "next/link";

const Products = () => {
  return (
    <article id="products" className={`${styles.container}`}>
      <div
        className={`${styles.productsContainer} d-flex row mx-0 flex-column-reverse flex-lg-row container-fluid`}
      >
        <div className="d-flex flex-column justify-content-center align-items-center col-12 col-lg-6">
          <p  className="h6 mb-4 text-uppercase fw-semibold text-center lh-base">
          Your business is important, so by using our products, in addition to the growth of your business, experience comfort.
          </p>
          <Link href="/products">
            <Button variant="contained" className="w-auto">
              see Products
            </Button>
          </Link>
        </div>
        <Image
          quality={100}
          className={`img-fluid col-12 col-lg-5 ${styles.productsImage}`}
          alt="user"
          src={productsImage}
        />
      </div>
    </article>
  );
};

export default Products;
