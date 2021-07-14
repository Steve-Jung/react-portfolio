import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import projects from '../../data/projects';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const Lamborghini = () => {
  return (
    <>
      <Header
        subtitle={projects[1].name}
        page={`/project/${projects[1].page}`}
      />
      <Layout>
				<PortfolioContent object={projects[1]} />
      </Layout>
    </>
  )
}

export default Lamborghini;
