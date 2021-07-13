import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Components
import Layout from '../components/Layout';
import InitialTransition from '../components/InitialTransition';
import Scene from '../components/mainPage/Scene';

// Page Transition
const containerAnimation = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
	},
};

const Home = ({ isFirstMount }) => {
	return (
		<>
			{isFirstMount && <InitialTransition />}
			<Layout>
				<motion.div
					initial='initial'
					animate='animate'
					exit={{
						opacity: 0,
						transition: {
							duration: 0.45,
							ease: [0.6, -0.05, 0.01, 0.99],
						},
					}}
					variants={containerAnimation}
					className='main-page'
				>
					<Scene />
				</motion.div>
			</Layout>
		</>
	);
};

Home.propTypes = {
	isFirstMount: PropTypes.bool,
};

export default Home;
