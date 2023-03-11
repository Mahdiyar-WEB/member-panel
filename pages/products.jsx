import React from "react";
import styles from "../styles/products.module.css";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Modal,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

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
  useEffect(() => {
    let subCategories = [];
    product.map((product) => {
      subCategories = [...subCategories, ...product.subCategories];
    });
    setProducts(subCategories);
  }, []);
  return (
    <>
      <main className={`${styles.container}`}>
        <TableContainer className="px-3">
          <Table aria-label="simple table">
            <TableHead className="bg-secondary">
              <TableRow>
                <TableCell className="fs-6">ID</TableCell>
                <TableCell className="fs-6">Product</TableCell>
                <TableCell className="fs-6" align="center">
                  Min Order
                </TableCell>
                <TableCell className="fs-6" align="center">
                  Max Order
                </TableCell>
                <TableCell className="fs-6" align="center">
                  Description
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((row, index) => (
                <TableRow hover key={index}>
                  <TableCell component="th" >
                    {index}
                  </TableCell>
                  <TableCell align="start">{row.category}</TableCell>
                  <TableCell align="center">{row.minQuantity}</TableCell>
                  <TableCell align="center">{row.maxQuantity}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={(e) => handleClickEdit(e, row)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
};

export default Products;