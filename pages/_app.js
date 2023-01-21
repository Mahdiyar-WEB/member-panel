import * as React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../config/createEmotionCache";
import { Provider } from "react-redux";
import store from "../src/features/store";
import AOS from "aos";
import "../styles/globals.css";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import PanelAside from "../src/components/PanelAside/PanelAside";
import PanelProfile from "../src/components/PanelProfile/PanelProfile";
import PanelWallet from "../src/components/PanelWallet/PanelWallet";
import PanelHeader from "../src/components/PanelHeader/PanelHeader";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import AdminHeader from "../src/components/AdminHeader/AdminHeader";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="canonical" href="/" />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {router.pathname.includes("dashboard") > 0 ? (
          <>
            <PanelAside /> <PanelHeader /> <PanelProfile />
            <PanelWallet /> <Component {...pageProps} />
          </>
        ) : router.pathname.includes("admin") > 0 ? (
          <>
            <AdminHeader />
            <Component {...pageProps} />
          </>
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </CacheProvider>
    </Provider>
  );
}
