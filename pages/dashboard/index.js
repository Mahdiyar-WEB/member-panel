import { useDispatch } from "react-redux";
import PanelDialog from "../../components/PanelDialog/PanelDialog";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import Head from "next/head";

const UserPanel = () => {
  const dispatch = useDispatch();

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="User dashboard" />
      </Head>
      <main className="d-flex userPanel bg-white">
        <PanelDialog />
      </main>
    </DashboardLayout>
  );
};

export default UserPanel;
