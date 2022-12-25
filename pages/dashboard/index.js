import PanelAside from "../../components/PanelAside/PanelAside";
import { useEffect, useState } from "react";
// import PanelLayout from "../components/PanelLayout/PanelLayout";
import { useDispatch } from "react-redux";
import { handleLoggedIn } from "../../features/userSlice/userSlice";
import PanelProfile from "../../components/PanelProfile/PanelProfile";
import PanelWallet from "../../components/PanelWallet/PanelWallet";
// const PanelDialog = lazy(() => import("../components/PanelDialog/PanelDialog"));
// const PanelProducts = lazy(() => import("./dashboard/products"));
// const PanelHistory = lazy(() =>
//   import("./dashboard/history")
// );

const UserPanel = () => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(typeof window !== "undefined"){
  //     if (window.innerWidth >= 1024) {
  //       setIsShow(true);
  //     } else {
  //       setIsShow(false);
  //     }
  //   }
  //   dispatch(handleLoggedIn());
  // }, []);

  return (
    <main className="d-flex userPanel bg-white">
      {isShow && <PanelAside />}
      <PanelProfile />
      <PanelWallet />
    </main>
  );
};

export default UserPanel;
