import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
};

export default AdminLayout;
