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

  const handleCheckShow = () => {
    if (window.innerWidth >= 1024) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    handleCheckShow();
    dispatch(handleLoggedIn());
  }, []);

  return (
    <main className="d-flex userPanel bg-white">
      {isShow && <PanelAside />}
      {/* <PanelLayout>
        <Routes>
          <Route path="/" element={<PanelDialog />} />
          <Route path="/products" element={<PanelProducts />} />
          <Route path="/history" element={<PanelHistory />} />
        </Routes>
      </PanelLayout> */}
      <PanelProfile />
      <PanelWallet />
    </main>
  );
};

export default UserPanel;
