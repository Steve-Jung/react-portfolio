import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import projects from '../../data/projects';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const Metro = () => {
  return (
    <>
      <Header />
      <Layout>
				<PortfolioContent object={projects[3]} />
      </Layout>
    </>
  )
}

export default Metro;
