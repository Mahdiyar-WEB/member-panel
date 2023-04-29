import React from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Button,
  ButtonGroup
} from "@mui/material";
import { useState } from "react";

const orders = () => {

  const [users, setUsers] = useState([
    { id: 1, user: "user1", order_date: "22-20-2022", order: "s13", quantity: 1,order_id:"a" },
    { id: 2, user: "user2", order_date: "22-20-2022", order: "s21", quantity: 3,order_id:"b" },
    { id: 3, user: "user3", order_date: "22-20-2022", order: "s31", quantity: 12,order_id:"c" },
    { id: 4, user: "user4", order_date: "22-20-2022", order: "s41", quantity: 15,order_id:"d" },
    { id: 5, user: "user4", order_date: "22-20-2022", order: "s22", quantity: 1,order_id:"e" },
    { id: 6, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 11,order_id:"f" },
    { id: 7, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 10,order_id:"g" },
    { id: 8, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 2,order_id:"h" },
    { id: 9, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 5,order_id:"i" },
    { id: 10, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 7,order_id:"j" },
    { id: 11, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 1,order_id:"k" },
    { id: 12, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 5,order_id:"l" },
    { id: 13, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 2,order_id:"m" },
    { id: 14, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 4,order_id:"n" },
    { id: 15, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 11,order_id:"o" },
    { id: 16, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 21,order_id:"p" },
    { id: 17, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 13,order_id:"q" },
    { id: 18, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 3,order_id:"r" },
    { id: 19, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 2,order_id:"s" },
    { id: 20, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 66,order_id:"t" },
    { id: 21, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 2,order_id:"u" },
    { id: 22, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 1,order_id:"v" },
    { id: 23, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 1,order_id:"w" },
    { id: 24, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 1,order_id:"x" },
    { id: 25, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 1,order_id:"y" },
    { id: 26, user: "user4", order_date: "22-20-2022", order: "s11", quantity: 1,order_id:"z" },
  ]);
  
  const handleAccept = (details) => {
    if(confirm("Are you sure to accept order?")){
      alert("accepted")
    }
  }

  const handleReject = (details) => {
    if(confirm("Are you sure to reject order?")){
      alert("rejected")
    }
  }
  return (
    <AdminLayout>
              <TableContainer className="px-3">
          <Table aria-label="simple table">
            <TableHead className="bg-secondary">
              <TableRow>
                <TableCell className="fs-6" align="center">
                  user id
                </TableCell>
                <TableCell className="fs-6" align="center">
                 name
                </TableCell>
                <TableCell className="fs-6" align="center">
                  date of order
                </TableCell>
                <TableCell className="fs-6" align="center">
                  order type
                </TableCell>
                <TableCell className="fs-6" align="center">
                  quantity
                </TableCell>
                <TableCell className="fs-6" align="center">
                  actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map(({id,user,order,order_date,quantity,order_id}) => (
                <TableRow hover key={id}>
                  <TableCell component="th" align="center" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="center">{user}</TableCell>
                  <TableCell align="center">{order_date}</TableCell>
                  <TableCell align="center">
                   {order}
                  </TableCell>
                  <TableCell align="center">
                   {quantity}
                  </TableCell>
                  <TableCell align="center">
                   <ButtonGroup>
                    <Button variant="contained" onClick={()=> handleAccept({id,order_id,user})} color="success">Accept</Button>
                    <Button variant="contained" onClick={()=> handleReject({id,order_id,user})} color="error">Reject</Button>
                   </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </AdminLayout>
  );
};

export default orders;
