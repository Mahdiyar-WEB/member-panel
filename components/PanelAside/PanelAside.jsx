import styles from "./panelAside.module.css";
import UserMenu from "./UserMenu/UserMenu";
import Link from "next/link";
import { MdWidgets } from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import { useRouter } from "next/router";

const PanelAside = () => {
  const router = useRouter();

  return (
    <aside
      className={`py-3 text-white bg-black d-flex flex-column align-items-center ${styles.container}`}
    >
      <div className={styles.content}>
        <h6 className="fw-normal mb-4">Member Panel</h6>
        <div className={styles.divider}></div>
        <UserMenu />
        <div className={`${styles.divider} mt-2`}></div>
        <div className="d-flex flex-column w-100 py-2 px-3">
          <Link
            href="/dashboard/products"
            className={router.pathname === "dashboard/products" ? styles.active : styles.link}
          >
            <MdWidgets size={25} className="me-3" />
            Products
          </Link>
          <Link
            className={router.pathname === "dashboard/history" ? styles.active : styles.link}
            href="/dashboard/history"
          >
            <FaUserClock size={25} className="me-3" />
            History
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default PanelAside;
