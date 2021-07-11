import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

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
      <Head>
        <title>JungJisub</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="author" content="JungJisub" />
        <meta name="description" content="사용자를 매료시킬 수 있는 흥미로운 디자인과 오래도록 머물고 싶어지는 편안한 UI를 만들기 위해 늘 고심하는 개발자 정지섭의 포트폴리오 사이트입니다." />
      </Head>
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