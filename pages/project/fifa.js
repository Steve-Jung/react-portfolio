import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import projects from '../../data/projects';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const Fifa = () => {
  return (
    <>
      <Header
        subtitle={projects[6].name}
        page={`/project/${projects[6].page}`}
      />
      <Layout>
				<PortfolioContent object={projects[6]} />
      </Layout>
    </>
  )
}

export default Fifa;
