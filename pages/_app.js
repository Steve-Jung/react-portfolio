import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import Header from '../components/Header';

// Styles
import 'simplebar/dist/simplebar.min.css';
import '../styles/App.scss';

const App = ({ Component, pageProps, router }) => {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => isFirstMount && setIsFirstMount(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      setIsFirstMount(false);
    };
  }, [isFirstMount, router.events]);

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component isFirstMount={isFirstMount} key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export default App;