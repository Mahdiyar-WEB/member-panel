import { Modal, TextField, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import AdminProduct from "../../src/components/AdminProduct/AdminProduct";

const products = () => {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      category: "S1",
      subCategories: [
        {
          id: 1,
          category: "S11",
          description: "This is s11",
          price: 2,
        },
        {
          id: 2,
          category: "S12",
          description: "This is s12",
          price: 1,
        },
        {
          id: 3,
          category: "S13",
          description: "This is s13",
          price: 0.5,
        },
        {
          id: 4,
          category: "S14",
          description: "This is s14",
          price: 1.5,
        },
      ],
      activeSub: 1,
      quantity: 20,
      minQuantity: 20,
      maxQuantity: 30,
    },
    {
      id: 2,
      category: "S2",
      subCategories: [
        {
          id: 5,
          category: "S21",
          description: "This is s21",
          price: 2,
        },
        {
          id: 6,
          category: "S22",
          description: "This is s22",
          price: 1,
        },
        {
          id: 7,
          category: "S23",
          description: "This is s23",
          price: 0.5,
        },
        {
          id: 8,
          category: "S24",
          description: "This is s24",
          price: 1.5,
        },
      ],
      activeSub: 1,
      quantity: 20,
      minQuantity: 20,
      maxQuantity: 30,
    },
    {
      id: 3,
      category: "S3",
      subCategories: [
        {
          id: 9,
          category: "S31",
          description: "This is s31",
          price: 2,
        },
        {
          id: 10,
          category: "S32",
          description: "This is s32",
          price: 1,
        },
        {
          id: 11,
          category: "S33",
          description: "This is s33",
          price: 0.5,
        },
        {
          id: 12,
          category: "S34",
          description: "This is s34",
          price: 1.5,
        },
      ],
      activeSub: 1,
      quantity: 20,
      minQuantity: 20,
      maxQuantity: 30,
    },
  ]);
  const [edit, setEdit] = useState({
    category: "",
    description: "",
    price: 0,
    id: 0,
    parentID: 0,
  });
  const [parentName, setParentName] = useState({
    isEdit: false,
    name: "",
    id: 0,
  });

  const handleCloseEdit = () => {
    setAnchorEl(false);
    setEdit({ category: "", description: "", price: "", id: 0, parentID: 0 });
  };

  const handleChangeEdit = (details, parentID) => {
    setAnchorEl(true);
    setEdit({ ...details, parentID });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleEditOnChange = (event) => {
    setEdit({ ...edit, [event.target.name]: event.target.value });
  };

  const handleSubmitChanges = () => {
    let clonedRows = [...products];
    const definedParentIndex = clonedRows.findIndex(
      (row) => row.id === edit.parentID
    );
    const definedProductIndex = clonedRows[
      definedParentIndex
    ].subCategories.findIndex((row) => row.id === edit.id);
    delete edit.parentID;
    clonedRows[definedParentIndex].subCategories[definedProductIndex] = edit;
    setProducts(clonedRows);
    handleCloseEdit();
  };

  const handleDelete = (productID, parentID) => {
    const clonedProducts = [...products];
    if (!!productID) {
      const definedParentIndex = clonedProducts.findIndex(
        (row) => row.id === parentID
      );
      const filteredProducts = clonedProducts[
        definedParentIndex
      ].subCategories.filter((product) => product.id !== productID);
      clonedProducts[definedParentIndex].subCategories = filteredProducts;
      setProducts(clonedProducts);
    } else {
      const filteredCategories = clonedProducts.filter(
        (product) => product.id !== parentID
      );
      setProducts(filteredCategories);
    }
  };

  const handleAddEditParent = () => {
    const clonedProducts = [...products];
    console.log(parentName);
    if (!parentName.isEdit && parentName.id === 0) {
      const newParent = {
        id: products.length + 1,
        category: parentName.name,
        subCategories: [],
        activeSub: 1,
      };
      clonedProducts.push(newParent);
      setProducts(clonedProducts);
    } else {
      const definedParentIndex = clonedProducts.findIndex(
        (product) => product.id === parentName.id
      );
      clonedProducts[definedParentIndex] = {
        ...clonedProducts[definedParentIndex],
        category: parentName.name,
      };
      setProducts(clonedProducts);
    }
    setParentName({ isEdit: false, name: "", id: 0 });
    setAnchorEl2(false);
  };
  const handleChangeCategory = (prevName, parentID) => {
    setParentName({ isEdit: true, name: prevName, id: parentID });
    setAnchorEl2(true);
  };

  return (
    <main>
      <div className="px-4 py-3" dir="rtl">
        <Button onClick={() => setAnchorEl2(true)} variant="contained">
          Add Category
        </Button>
      </div>
      {products.map((product) => {
        return (
          <AdminProduct
            handleDelete={handleDelete}
            rows={product.subCategories}
            value={expanded}
            name={product.category}
            handleClickEdit={handleChangeEdit}
            handleChange={handleChange}
            key={product.id}
            parentID={product.id}
            handleChangeCategory={handleChangeCategory}
          />
        );
      })}
      <Modal
        open={anchorEl}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="d-flex flex-column gap-3"
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
          <TextField
            onChange={(e) => handleEditOnChange(e)}
            name="category"
            label="Title"
            value={edit.category}
          />
          <TextField
            label="Description"
            name="description"
            onChange={(e) => handleEditOnChange(e)}
            value={edit.description}
            multiline
            rows={4}
          />
          <TextField
            onChange={(e) => handleEditOnChange(e)}
            type="number"
            name="price"
            label="Price"
            value={edit.price}
          />
          <div dir="rtl">
            <Button onClick={handleSubmitChanges} color="success">
              Submit
            </Button>
            <Button onClick={handleCloseEdit} className="text-secondary">
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal open={anchorEl2} onClose={() => setAnchorEl2(false)}>
        <Box
          className="d-flex flex-column gap-3"
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
          <TextField
            onChange={(e) => setParentName({...parentName,name:e.target.value})}
            label="Name"
            value={parentName.name}
          />
          <div dir="rtl">
            <Button onClick={handleAddEditParent} color="success">
              Submit
            </Button>
            <Button
              onClick={() => setAnchorEl2(false)}
              className="text-secondary"
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </main>
  );
};

export default products;
