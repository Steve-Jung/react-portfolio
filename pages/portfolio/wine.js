import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import portfolios from '../../data/portfolios';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const Wine = () => {
  return (
    <>
      <Header />
      <Layout>
				<PortfolioContent object={portfolios[2]} />
      </Layout>
    </>
  )
}

export default Wine;
