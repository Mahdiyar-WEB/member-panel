import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@mui/material";

const users = () => {
  const [users, setUsers] = useState([
    { user: "user1", date: "22-20-2022", price: 1 },
    { user: "user2", date: "22-20-2022", price: 2 },
    { user: "user3", date: "22-20-2022", price: 3 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
    { user: "user4", date: "22-20-2022", price: 4 },
  ]);

  return (
    <main>
      <TableContainer className="px-3">
        <Table aria-label="simple table">
          <TableHead className="bg-success">
            <TableRow>
              <TableCell className="fs-6">users</TableCell>
              <TableCell className="fs-6" align="center">
                join date
              </TableCell>
              <TableCell className="fs-6" align="center">
                account balance
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((row, index) => (
              <TableRow
                hover
                key={index}
                // sx={{ "&:last-child td,   &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.user}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">${row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};

export default users;
