import React from "react";
import PanelAside from "../PanelAside/PanelAside";
import PanelHeader from "../PanelHeader/PanelHeader";
import PanelProfile from "../PanelProfile/PanelProfile";
import PanelWallet from "../PanelWallet/PanelWallet";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <PanelAside />
      <PanelHeader />
      <PanelProfile />
      <PanelWallet />
      {children}
    </>
  );
};

export default DashboardLayout;
