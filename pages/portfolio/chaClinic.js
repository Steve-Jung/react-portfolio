import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import portfolios from '../../data/portfolios';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const ChaClinic = () => {
  return (
    <>
      <Header
        subtitle={portfolios[5].name}
        page={`/portfolio/${portfolios[5].page}`}
      />
      <Layout>
				<PortfolioContent object={portfolios[5]} />
      </Layout>
    </>
  )
}

export default ChaClinic;
