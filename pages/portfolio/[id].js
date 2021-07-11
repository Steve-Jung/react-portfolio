import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

// data
import portfolios from '../../data/portfolios';
import PortfolioContent from '../../components/portfolio/PortfolioContent';


const Portfolio = ({ id, data }) => {
	return (
    <>
      <Header />
      <Layout>
				<PortfolioContent object={data} />
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
	const paths = portfolios.map((portfolio) => ({
		params: {
			id: portfolio.page,
		}
	}));

	return {
		paths: paths,
		fallback: false
	};
};

export const getStaticProps = async ({ params: { id } }) => {
	const object = portfolios.filter((portfolio) => {
		return portfolio.page === id;
	});

	return {
		props: {
			id: id,
			data: object[0]
		}
	}
}

export default Portfolio;
