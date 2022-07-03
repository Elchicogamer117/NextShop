import Script from 'next/script';
import Head from 'next/head';
import AppContext from 'context/AppContext';
import useInitialState from 'hooks/useInitialState';
import Header from 'components/Header';
import '../styles/globals.modules.scss';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y8T3JGFH1F" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y8T3JGFH1F');
        `}
      </Script>
      <Head>
        <title> Next Shop </title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
