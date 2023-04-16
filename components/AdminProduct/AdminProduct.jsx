import React from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Accordion,
  Divider,
  ButtonGroup,
  Button,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const AdminProduct = ({
  name,
  handleChange,
  value,
  rows,
  handleClickEdit,
  parentID,
  handleDelete,
  handleChangeCategory,
  handleClickAdd
}) => {
  const handleDeleteClick = (productID, parentID) => {
    const word = !!productID ? "product" : "category";
    if (confirm(`Are you sure to remove this ${word}?`)) {
      handleDelete(productID, parentID);
    }
  };

  return (
    <Accordion
      expanded={value === name}
      onChange={handleChange(name)}
      className="mx-4"
    >
      <AccordionSummary
        expandIcon={<IoIosArrowDown />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        className="d-flex align-items-baseline"
      >
        <Typography sx={{ fontWeight: "500" }}>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {rows.length === 0 && (
          <Typography>There is no product for this category</Typography>
        )}
        {rows.map((row, index) => {
          return (
            <>
              <Divider />
              <strong className="pb-3 pt-2 d-block">
                {row.category} - {row.price}$
              </strong>
              <Typography key={index}>{row.description}</Typography>
              <Typography className="d-flex pb-3 justify-content-between align-items-baseline">
                max quantity: {row.maxQuantity}
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button
                    color="info"
                    onClick={() => handleClickEdit(row, parentID)}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteClick(row.id, parentID)}
                    color="error"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Typography>
              <Divider />
            </>
          );
        })}
        <ButtonGroup className="py-5">
          <Button
            onClick={() => handleChangeCategory(name, parentID)}
            color="info"
          >
            Edit
          </Button>
          <Button onClick={() => handleClickAdd(parentID)} color="primary">Add</Button>
          <Button onClick={() => handleDeleteClick(0, parentID)} color="error">
            Delete
          </Button>
        </ButtonGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default AdminProduct;
