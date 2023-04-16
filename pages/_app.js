import * as React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";
import store from "../features/store";
import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="canonical" href="/" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
