import React from "react";
import styles from "../styles/products.module.css";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  IconButton,
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Head from "next/head";

const product = [
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
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState({
    isShow: false,
    category: "",
    description: "",
    price: "",
  });
  const router = useRouter();

  useEffect(() => {
    let subCategories = [];
    product.map((product) => {
      subCategories = [...subCategories, ...product.subCategories];
    });
    setProducts(subCategories);
  }, []);

  const handleClose = () => {
    setModal({ isShow: false, category: "", description: "", price: "" });
  };

  return (
    <HomeLayout>
      <Head>
        <title>Products</title>
        <meta name="description" content="products in win panel" />
      </Head>
      <main className={`${styles.container}`}>
        <TableContainer className="px-lg-5 px-md-4">
          <Table aria-label="simple table">
            <TableHead className="bg-primary">
              <TableRow>
                <TableCell className="fs-6 text-white">ID</TableCell>
                <TableCell className="fs-6 text-white">Product</TableCell>
                <TableCell className="fs-6 text-white" align="center">
                  Min Order
                </TableCell>
                <TableCell className="fs-6 text-white" align="center">
                  Max Order
                </TableCell>
                <TableCell className="fs-6 text-white" align="center">
                  Description
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((row, index) => (
                <TableRow
                  className={`${index % 2 > 0 && "bg-light"}`}
                  key={index}
                >
                  <TableCell component="th">{index + 1}</TableCell>
                  <TableCell align="start">{row.category}</TableCell>
                  <TableCell align="center">{row.minQuantity}</TableCell>
                  <TableCell align="center">{row.maxQuantity}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => setModal({ ...row, isShow: true })}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={modal.isShow}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className={`d-flex flex-column  ${styles.parentModal}`}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fff",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography
              id="modal-modal-title"
              className="mt-3 fw-bold"
              variant="h6"
            >
              {modal.category}
            </Typography>
            <Typography
              className="border border-secondary px-2 py-2 rounded"
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              {modal.description}
            </Typography>
            <Typography
              id="modal-modal-description"
              className="d-flex gap-4"
              sx={{ mt: 2 }}
            >
              <p>
                <strong>Max Order:</strong>{" "}
                <span className="text-primary">{modal.maxQuantity}</span>
              </p>
              <p>
                <strong>Min Order:</strong>{" "}
                <span className="text-primary">{modal.minQuantity}</span>
              </p>
            </Typography>
            <Typography>
              <span className="fw-bold">Price:</span>{" "}
              <span className="text-primary">{modal.price}$</span>
            </Typography>
            <Button
              className="mt-5"
              variant="contained"
              onClick={() => router.push("/login-signup")}
            >
              Buy
            </Button>
            <IconButton
              size="small"
              onClick={handleClose}
              className={styles.closeButton}
            >
              <IoCloseSharp size={25} />
            </IconButton>
          </Box>
        </Modal>
      </main>
    </HomeLayout>
  );
};

export default Products;
