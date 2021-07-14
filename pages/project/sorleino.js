import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import projects from '../../data/projects';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const Sorleino = () => {
  return (
    <>
      <Header
        subtitle={projects[2].name}
        page={`/project/${projects[2].page}`}
      />
      <Layout>
				<PortfolioContent object={projects[2]} />
      </Layout>
    </>
  )
}

export default Sorleino;
