import * as React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../config/createEmotionCache";
import { Provider } from "react-redux";
import store from "../features/store";
import AOS from "aos";
import "../styles/globals.css";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import PanelAside from "../components/PanelAside/PanelAside";
import PanelProfile from "../components/PanelProfile/PanelProfile";
import PanelWallet from "../components/PanelWallet/PanelWallet";
import PanelHeader from "../components/PanelHeader/PanelHeader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
            <PanelAside /> <PanelHeader/> <PanelProfile />
            <PanelWallet /> <Component {...pageProps} />
          </>
        ) : (
          <>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
          </>
        )}
      </CacheProvider>
    </Provider>
  );
}
