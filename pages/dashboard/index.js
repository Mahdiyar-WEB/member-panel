import PanelAside from "../../components/PanelAside/PanelAside";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoggedIn } from "../../features/userSlice/userSlice";
import PanelProfile from "../../components/PanelProfile/PanelProfile";
import PanelWallet from "../../components/PanelWallet/PanelWallet";
import PanelDialog from "../../components/PanelDialog/PanelDialog";


const UserPanel = () => {
  const dispatch = useDispatch();

  return (
    <main className="d-flex userPanel bg-white">
      <PanelDialog />
    </main>
  );
};


export default UserPanel;
