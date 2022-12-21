import PanelHeader from "./PanelHeader/PanelHeader";
import { Suspense, useEffect, useState } from "react";
import loading from "../../public/loading2.svg";
import styles from "./panelLayout.module.css";
import Image from "next/image";




const PanelLayout = ({ children }) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, []);

  return (
    <>
      {isShow && <PanelHeader />}
      <Suspense
        fallback={
          <div
            className={styles.loading}
          >
            <Image src={loading} alt="loading" />
          </div>
        }
      >
        {children}
      </Suspense>
    </>
  );
};

export default PanelLayout;
