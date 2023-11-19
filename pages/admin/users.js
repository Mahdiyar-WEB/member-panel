import React, { useState } from "react";
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
import { FcFilledFilter } from "react-icons/fc";
import AdminLayout from "../../components/AdminLayout/AdminLayout";

const users = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [editUser, setEditUser] = useState({
    user: "",
    id: "",
    price: "",
    balance: 0,
  });

  const [users, setUsers] = useState([
    { id: 1, user: "user1", date: "22-20-2022", price: 1, isBan: false },
    { id: 2, user: "user2", date: "22-20-2022", price: 2, isBan: false },
    { id: 3, user: "user3", date: "22-20-2022", price: 3, isBan: false },
    { id: 4, user: "user4", date: "22-20-2022", price: 4, isBan: false },
    { id: 5, user: "user4", date: "22-20-2022", price: 5, isBan: false },
    { id: 6, user: "user4", date: "22-20-2022", price: 6, isBan: false },
    { id: 7, user: "user4", date: "22-20-2022", price: 7, isBan: false },
    { id: 8, user: "user4", date: "22-20-2022", price: 8, isBan: false },
    { id: 9, user: "user4", date: "22-20-2022", price: 9.5, isBan: false },
    { id: 10, user: "user4", date: "22-20-2022", price: 9.25, isBan: false },
    { id: 11, user: "user4", date: "22-20-2022", price: 10, isBan: false },
    { id: 12, user: "user4", date: "22-20-2022", price: 103, isBan: false },
    { id: 13, user: "user4", date: "22-20-2022", price: 34, isBan: false },
    { id: 14, user: "user4", date: "22-20-2022", price: 12, isBan: false },
    { id: 15, user: "user4", date: "22-20-2022", price: 5, isBan: false },
    { id: 16, user: "user4", date: "22-20-2022", price: 41, isBan: false },
    { id: 17, user: "user4", date: "22-20-2022", price: 16, isBan: false },
    { id: 18, user: "user4", date: "22-20-2022", price: 21, isBan: false },
    { id: 19, user: "user4", date: "22-20-2022", price: 25, isBan: false },
    { id: 20, user: "user4", date: "22-20-2022", price: 33, isBan: false },
    { id: 21, user: "user4", date: "22-20-2022", price: 11, isBan: false },
    { id: 22, user: "user4", date: "22-20-2022", price: 87, isBan: false },
    { id: 23, user: "user4", date: "22-20-2022", price: 13, isBan: false },
    { id: 24, user: "user4", date: "22-20-2022", price: 18, isBan: false },
    { id: 25, user: "user4", date: "22-20-2022", price: 19, isBan: false },
    { id: 26, user: "user4", date: "22-20-2022", price: 20, isBan: false },
  ]);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClickFilter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickEdit = (event, userDetails) => {
    setEditUser({ ...userDetails, balance: 0 });
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseEdit = () => {
    setEditUser({ user: "", id: null, price: null, balance: 0 });
    setAnchorEl2(null);
  };
  const handleFilter = (e) => {
    const cloneUsers = [...users];
    if (e.target.innerText === "Ascending") {
      const highestPriceGoods = cloneUsers.sort(
        (el1, el2) => el1.price - el2.price
      );
      setUsers([...highestPriceGoods]);
    } else {
      const lowestPriceUsers = cloneUsers.sort(
        (el1, el2) => el2.price - el1.price
      );
      setUsers([...lowestPriceUsers]);
    }
  };
  const handleBanUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    const clonedUsers = [...users];
    console.log(clonedUsers[index]);
    clonedUsers[index].isBan = !clonedUsers[index].isBan;
    setUsers([...clonedUsers]);
  };
  const handleSubmitEdit = () => {
    const clonedUsers = [...users];
    const index = clonedUsers.findIndex((user) => user.id === editUser.id);
    clonedUsers[index] = {
      id: editUser.id,
      user: editUser.user,
      date: editUser.date,
      price: editUser.price + editUser.balance,
      isBan: editUser.isBan,
    };
    setUsers([...clonedUsers]);
    handleCloseEdit();
  };

  return (
    <AdminLayout>
      <main>
        <TableContainer className="px-3">
          <Table aria-label="simple table">
            <TableHead className="bg-secondary">
              <TableRow>
                <TableCell className="fs-6">users</TableCell>
                <TableCell className="fs-6" align="center">
                  join date
                </TableCell>
                <TableCell className="fs-6" align="center">
                  account balance
                  <IconButton
                    onClick={handleClickFilter}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <FcFilledFilter size={20} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        bgcolor: "#fff",
                        width: 180,
                        "& .MuiAvatar-root": {
                          width: 42,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem className="ps-0 pe-0">
                      <button
                        onClick={handleFilter}
                        className="text-secondary w-100 btn border-0 "
                      >
                        Ascending
                      </button>
                    </MenuItem>
                    <MenuItem className="ps-0 pe-0">
                      <button
                        onClick={handleFilter}
                        className="text-secondary w-100 btn border-0"
                      >
                        Descending
                      </button>
                    </MenuItem>
                  </Menu>
                </TableCell>
                <TableCell className="fs-6" align="center">
                  actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((row, index) => (
                <TableRow hover key={index}>
                  <TableCell component="th" scope="row">
                    {row.user}
                  </TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.price}$</TableCell>
                  <TableCell className="d-flex" align="center">
                    <Button
                      color={row.isBan ? "warning" : "error"}
                      onClick={() => handleBanUser(row.id)}
                      variant="contained"
                      className="me-2"
                    >
                      {row.isBan ? "un-ban" : "ban"}
                    </Button>
                    <Button
                      variant="contained"
                      onClick={(e) => handleClickEdit(e, row)}
                    >
                      Edit balance
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={open2}
          onClose={handleCloseEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className={`d-flex align-items-center gap-5`}
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
            <div className="d-flex flex-column">
              <Typography variant="h6">user: {editUser.user}</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                user id: {editUser.id}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Current Price: {editUser.price}$
              </Typography>
            </div>
            <div className="d-flex flex-column gap-3">
              <TextField
                type="number"
                defaultValue={0}
                value={editUser.balance}
                onChange={(e) =>
                  setEditUser({ ...editUser, balance: +e.target.value })
                }
              />
              <Button variant="contained" onClick={() => handleSubmitEdit()}>
                submit
              </Button>
            </div>
          </Box>
        </Modal>
      </main>
    </AdminLayout>
  );
};

export default users;
