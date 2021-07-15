import React from 'react';
import Head from 'next/head';

import MainPageImage from '../public/images/photo/jungjisub_main.jpg';

const Header = ({ subtitle, page }) => {
  return (
    <Head>
      {subtitle
        ? <title>JungJisub - {`${subtitle}`}</title>
        : <title>JungJisub</title>
      }
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="keywords" content="정지섭 포트폴리오" />
      <meta name="author" content="JungJisub" />
      <meta name="description" content="사용자를 매료시킬 수 있는 흥미로운 디자인과 오래도록 머물고 싶어지는 편안한 UI를 만들기 위해 늘 고심하는 개발자 정지섭의 포트폴리오 사이트입니다." />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="정지섭의 포트폴리오" />
      <meta property="og:description" content="정지섭의 포트폴리오 사이트입니다" />
      <meta property="og:image" content={`https://jungjisub.vercel.app${MainPageImage.src}`} />
      <meta property="og:url" content={page ? `https://jungjisub.vercel.app${page}` : 'https://jungjisub.vercel.app'} />
    </Head>
  )
}

export default Header;
