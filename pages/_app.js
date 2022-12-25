import * as React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../config/createEmotionCache';
import { Provider } from 'react-redux';
import store from "../features/store";
import AOS from "aos";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  React.useEffect(()=>{
    AOS.init({
      once: true
    })
  },[])


  return (
   <Provider store={store}>
     <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
    </CacheProvider>
   </Provider>
  );
}