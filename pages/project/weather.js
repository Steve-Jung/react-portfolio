import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import projects from '../../data/projects';
import PortfolioContent from '../../components/portfolio/PortfolioContent';

const Weather = () => {
  return (
    <>
      <Header
        subtitle={projects[5].name}
        page={`/project/${projects[5].page}`}
      />
      <Layout>
				<PortfolioContent object={projects[5]} />
      </Layout>
    </>
  )
}

export default Weather;
