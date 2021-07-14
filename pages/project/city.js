import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import projects from '../../data/projects';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const City = () => {
  return (
    <>
      <Header
        subtitle={projects[0].name}
        page={`/project/${projects[0].page}`}
      />
      <Layout>
				<PortfolioContent object={projects[0]} />
      </Layout>
    </>
  )
}

export default City;
