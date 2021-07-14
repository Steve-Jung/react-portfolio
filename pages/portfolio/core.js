import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import portfolios from '../../data/portfolios';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const Core = () => {
  return (
    <>
      <Header
        subtitle={portfolios[1].name}
        page={`/portfolio/${portfolios[1].page}`}
      />
      <Layout>
				<PortfolioContent object={portfolios[1]} />
      </Layout>
    </>
  )
}

export default Core;