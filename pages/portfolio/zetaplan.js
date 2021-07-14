import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import portfolios from '../../data/portfolios';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const ZetaPlan = () => {
  return (
    <>
      <Header
        subtitle={portfolios[3].name}
        page={`/portfolio/${portfolios[3].page}`}
      />
      <Layout>
				<PortfolioContent object={portfolios[3]} />
      </Layout>
    </>
  )
}

export default ZetaPlan;
