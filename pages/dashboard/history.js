import styles from "../../styles/panelHistory.module.css";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Chip,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { MdAssignment } from "react-icons/md";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import Head from "next/head";

const History = () => {
  const [history, setHistory] = useState([
    {
      product: "product1",
      quantity: 1,
      date: "22-20-2022",
      price: 1,
      status: "Enable",
    },
    {
      product: "product2",
      quantity: 1,
      date: "22-20-2022",
      price: 2,
      status: "Disable",
    },
    {
      product: "product3",
      quantity: 1,
      date: "22-20-2022",
      price: 3,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Enable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Enable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Enable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Enable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
  ]);
  const clonedHistory = [
    {
      product: "product1",
      quantity: 1,
      date: "22-20-2022",
      price: 1,
      status: "Enable",
    },
    {
      product: "product2",
      quantity: 1,
      date: "22-20-2022",
      price: 2,
      status: "Disable",
    },
    {
      product: "product3",
      quantity: 1,
      date: "22-20-2022",
      price: 3,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Enable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Enable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Enable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Enable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Disable",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Completed",
    },
    {
      product: "product4",
      quantity: 1,
      date: "22-20-2022",
      price: 4,
      status: "Rejected",
    },
  ];
  const [sort, setSort] = useState({ name: "All", code: 0 });

  const existingStatus = [
    { name: "All", code: 0 },
    { name: "Rejected", code: 1 },
    { name: "Completed", code: 2 },
    { name: "Disable", code: 3 },
    { name: "Enable", code: 4 },
  ];

  const handleSortByStatus = (e) => {
    if (e.target.value === 0) {
      setSort({ name: "All", code: 0 });
      setHistory(clonedHistory);
      return;
    }
    const newStatus = existingStatus.find(
      (status) => status.code === e.target.value
    );
    const sortedHistory = clonedHistory.filter(
      (history) => history.status === newStatus.name
    );
    setSort(newStatus);
    setHistory(sortedHistory);
  };

  return (
    <DashboardLayout>
      <Head>
        <title>History</title>
        <meta name="description" content="Products History" />
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.assignmentContainer}>
            <div className={styles.assignment}>
              <MdAssignment size={25} className="text-white" />
            </div>
            <h5>History</h5>
          </div>
          <Select
            className="my-3 w-25 ms-4"
            value={sort.code}
            onChange={handleSortByStatus}
          >
            {existingStatus.map(({ name, code }) => {
              return (
                <MenuItem key={code} value={code}>
                  {name}
                </MenuItem>
              );
            })}
          </Select>
          <div className={styles.tableContainer}>
            <TableContainer className={styles.table}>
              <Table
                className="overflow-scroll"
                stickyHeader
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="fs-6">Product</TableCell>
                    <TableCell className="fs-6" align="center">
                      Date
                    </TableCell>
                    <TableCell className="fs-6" align="center">
                      Quantity
                    </TableCell>
                    <TableCell className="fs-6" align="center">
                      Price
                    </TableCell>
                    <TableCell className="fs-6" align="center">
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {history.map((row, index) => (
                    <TableRow
                      hover
                      key={index}
                      // sx={{ "&:last-child td,   &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.product}
                      </TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.quantity}</TableCell>
                      <TableCell align="center">${row.price}</TableCell>
                      <TableCell align="center">
                        {/* {row.status} */}
                        <Chip
                          label={row.status}
                          className={`${
                            row.status === "Enable"
                              ? "bg-primary"
                              : row.status === "Disable"
                              ? "bg-danger"
                              : row.status === "Completed"
                              ? "bg-success"
                              : row.status === "Rejected" && "bg-danger"
                          } text-white`}
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default History;
