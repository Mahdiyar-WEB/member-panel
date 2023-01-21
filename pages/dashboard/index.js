import PanelAside from "../../src/components/PanelAside/PanelAside";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoggedIn } from "../../src/features/userSlice/userSlice";
import PanelProfile from "../../src/components/PanelProfile/PanelProfile";
import PanelWallet from "../../src/components/PanelWallet/PanelWallet";
import PanelDialog from "../../src/components/PanelDialog/PanelDialog";


const UserPanel = () => {
  const dispatch = useDispatch();

  return (
    <main className="d-flex userPanel bg-white">
      <PanelDialog />
    </main>
  );
};


export default UserPanel;
