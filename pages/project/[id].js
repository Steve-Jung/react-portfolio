import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import projects from '../../data/projects';
import PortfolioContent from '../../components/portfolio/PortfolioContent';


const Project = ({ id, object }) => {
	return (
    <>
      <Header />
      <Layout>
				<PortfolioContent object={object} />
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
	const paths = projects.map((project) => ({
		params: {
			id: project.page,
		}
	}));

	return {
		paths: paths,
		fallback: false
	};
};

export const getStaticProps = async ({ params: { id } }) => {
	const object = await projects.filter((project) => {
		return project.page === id;
	});

	return {
		props: {
			id: id,
			object: object[0]
		}
	}
}

export default Project;
