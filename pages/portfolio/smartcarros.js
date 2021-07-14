import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import portfolios from '../../data/portfolios';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const SmartCarros = () => {
  return (
    <>
      <Header
        subtitle={portfolios[0].name}
        page={`/portfolio/${portfolios[0].page}`}
      />
      <Layout>
				<PortfolioContent object={portfolios[0]} />
      </Layout>
    </>
  )
}

export default SmartCarros;
