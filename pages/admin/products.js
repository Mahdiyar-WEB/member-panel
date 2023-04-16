import { Modal, TextField, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import AdminLayout from "../../components/AdminLayout/AdminLayout";

const products = () => {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState(false);
  const [anchorEl3, setAnchorEl3] = useState(false);
  // const [selectedParent]

  const [products, setProducts] = useState([
    {
      id: 1,
      category: "S1",
      subCategories: [
        {
          order: 1,
          id: 1,
          category: "S11",
          description: "This is s11",
          price: 2,
          quantity: 0,
          minQuantity: 0,
          maxQuantity: 10,
        },
        {
          order: 2,
          id: 2,
          category: "S12",
          description: "This is s12",
          price: 1,
          quantity: 1,
          minQuantity: 1,
          maxQuantity: 5,
        },
        {
          order: 3,
          id: 3,
          category: "S13",
          description: "This is s13",
          price: 0.5,
          quantity: 2,
          minQuantity: 2,
          maxQuantity: 30,
        },
        {
          order: 4,
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
        order: 1,
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
          order: 1,
          id: 1,
          category: "S21",
          description: "This is s21",
          price: 2,
          quantity: 4,
          minQuantity: 4,
          maxQuantity: 30,
        },
        {
          order: 2,
          id: 2,
          category: "S22",
          description: "This is s22",
          price: 1,
          quantity: 5,
          minQuantity: 5,
          maxQuantity: 30,
        },
        {
          order: 3,
          id: 3,
          category: "S23",
          description: "This is s23",
          price: 0.5,
          quantity: 6,
          minQuantity: 6,
          maxQuantity: 30,
        },
        {
          order: 4,
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
        order: 1,
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
          order: 1,
          id: 1,
          category: "S31",
          description: "This is s31",
          price: 2,
          quantity: 8,
          minQuantity: 8,
          maxQuantity: 100,
        },
        {
          order: 2,
          id: 2,
          category: "S32",
          description: "This is s32",
          price: 1,
          quantity: 9,
          minQuantity: 9,
          maxQuantity: 100,
        },
        {
          order: 3,
          id: 3,
          category: "S33",
          description: "This is s33",
          price: 0.5,
          quantity: 10,
          minQuantity: 10,
          maxQuantity: 100,
        },
        {
          order: 4,
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
        order: 1,
        id: 1,
        category: "S31",
        description: "This is s31",
        price: 2,
        quantity: 8,
        minQuantity: 8,
        maxQuantity: 100,
      },
    },
  ]);
  const [edit, setEdit] = useState({
    category: "",
    description: "",
    price: 0,
    id: 0,
    parentID: 0,
    maxQuantity: 0,
    wantedId: null,
  });
  const [add, setAdd] = useState({
    parentID: 0,
    id: 0,
    category: "",
    description: "",
    price: 0.25,
    maxQuantity: 1,
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
    setEdit({ ...details, parentID, wantedId: details.id });
  };

  const handleChangeAdd = (parentID) => {
    setAnchorEl3(true);
    setAdd({ ...add, parentID });
  };

  const handleAddOnChange = (event) => {
    setAdd({ ...add, [event.target.name]: event.target.value });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleEditOnChange = (event) => {
    setEdit({ ...edit, [event.target.name]: event.target.value });
  };

  const handleSubmitChanges = () => {
    const wantedId = +edit.wantedId;
    delete edit.wantedId;
    let clonedRows = [...products];
    const definedParentIndex = clonedRows.findIndex(
      (row) => row.id === edit.parentID
    );
    const definedProductIndex = clonedRows[
      definedParentIndex
    ].subCategories.findIndex((row) => row.id === edit.id);
    delete edit.parentID;
    if (wantedId < edit.id) {
      const constantOrders = clonedRows[
        definedParentIndex
      ].subCategories.filter((item) => item.id > edit.id || item.id < wantedId);
      const includingChangeOrders = clonedRows[
        definedParentIndex
      ].subCategories.filter(
        (item) => item.id < edit.id && item.id >= wantedId
      );
      const newOrders = includingChangeOrders.map((item) => {
        item.id += 1;
        return item;
      });
      clonedRows[definedParentIndex].subCategories[definedProductIndex] = {
        ...edit,
        id: wantedId,
      };
      clonedRows[definedParentIndex].subCategories = [
        ...newOrders,
        clonedRows[definedParentIndex].subCategories[definedProductIndex],
        ...constantOrders,
      ];
      clonedRows[definedParentIndex].subCategories.sort(
        (el1, el2) => el1.id - el2.id
      );
    } else if (wantedId > edit.id) {
      const constantOrders = clonedRows[
        definedParentIndex
      ].subCategories.filter((item) => item.id < edit.id || item.id > wantedId);
      const includingChangeOrders = clonedRows[
        definedParentIndex
      ].subCategories.filter(
        (item) => item.id > edit.id && item.id <= wantedId
      );
      const newOrders = includingChangeOrders.map((item) => {
        item.id -= 1;
        return item;
      });
      clonedRows[definedParentIndex].subCategories[definedProductIndex] = {
        ...edit,
        id: wantedId,
      };
      clonedRows[definedParentIndex].subCategories = [
        ...newOrders,
        clonedRows[definedParentIndex].subCategories[definedProductIndex],
        ...constantOrders,
      ];
      clonedRows[definedParentIndex].subCategories.sort(
        (el1, el2) => el1.id - el2.id
      );
    }
    setProducts(clonedRows);
    handleCloseEdit();
  };

  const handleAddProduct = () => {
    let clonedRows = [...products];
    const definedParentIndex = clonedRows.findIndex(
      (row) => row.id === add.parentID
    );
    delete add.parentID;
    const newProduct = {
      ...add,
      minQuantity: 1,
      quantity: 1,
      id: clonedRows[definedParentIndex].subCategories.length + 1,
    };
    clonedRows[definedParentIndex].subCategories.push(newProduct);
    setProducts(clonedRows);
    setAdd({
      parentID: 0,
      id: 0,
      category: "",
      description: "",
      price: 0.25,
      maxQuantity: 1,
    });
    setAnchorEl3(false);
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
    <AdminLayout>
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
              handleClickAdd={handleChangeAdd}
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
              inputProps={{
                step: "0.25",
                min: 0.25,
              }}
              value={edit.price}
            />
            <TextField
              onChange={(e) => handleEditOnChange(e)}
              type="number"
              name="maxQuantity"
              label="Max Quantity"
              inputProps={{
                min: 1,
              }}
              value={edit.maxQuantity}
            />
            <TextField
              onChange={(e) => handleEditOnChange(e)}
              type="number"
              name="wantedId"
              label="ID Order"
              inputProps={{
                min: 1,
                max: products.find((item) => item.id === edit.parentID)
                  ?.subCategories.length,
              }}
              value={edit.wantedId}
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
        <Modal
          open={anchorEl3}
          onClose={() => setAnchorEl3(false)}
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
              onChange={(e) => handleAddOnChange(e)}
              name="category"
              label="Title"
              value={add.category}
            />
            <TextField
              label="Description"
              name="description"
              onChange={(e) => handleAddOnChange(e)}
              value={add.description}
              multiline
              rows={4}
            />
            <TextField
              onChange={(e) => handleAddOnChange(e)}
              type="number"
              name="price"
              label="Price"
              inputProps={{
                step: "0.25",
                min: 0.25,
              }}
              value={add.price}
            />
            <TextField
              onChange={(e) => handleAddOnChange(e)}
              type="number"
              name="maxQuantity"
              label="Max Quantity"
              inputProps={{
                min: 1,
              }}
              value={add.maxQuantity}
            />
            <div dir="rtl">
              <Button onClick={handleAddProduct} color="success">
                Submit
              </Button>
              <Button
                onClick={() => setAnchorEl3(false)}
                className="text-secondary"
              >
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
              onChange={(e) =>
                setParentName({ ...parentName, name: e.target.value })
              }
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
    </AdminLayout>
  );
};

export default products;
