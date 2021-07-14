import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import portfolios from '../../data/portfolios';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const Marketino = () => {
  return (
    <>
      <Header
        subtitle={portfolios[4].name}
        page={`/portfolio/${portfolios[4].page}`}
      />
      <Layout>
				<PortfolioContent object={portfolios[4]} />
      </Layout>
    </>
  )
}

export default Marketino;
