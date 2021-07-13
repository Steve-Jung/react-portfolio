import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import portfolios from '../../data/portfolios';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const Core = () => {
  return (
    <>
      <Header />
      <Layout>
				<PortfolioContent object={portfolios[1]} />
      </Layout>
    </>
  )
}

export default Core;