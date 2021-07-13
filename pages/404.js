import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Components
import Layout from '../components/Layout';
import Header from '../components/Header';

// images
import ErrorImage from '../public/images/photo/404.jpg'

// Page Transition
const containerAnimation = {
	animate: {
		transition: { staggerChildren: 0.1, delayChildren: 0 },
	},
};

const titleAnimation = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

const contentAnimation = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};


export default function Custom404() {
	return (
		<>
			<Header />
			<Layout>
				<motion.div
					exit={{
						opacity: 0,
						transition: {
							duration: 0.5,
							ease: [0.6, -0.05, 0.01, 0.99],
						},
					}}
					className="portfolio-page"
				>
					<motion.div
						initial="initial"
						animate="animate"
						variants={containerAnimation}
						className="page-header-wrap"
					>
						<motion.div
							variants={titleAnimation}
							className='page-header'
							style={{ backgroundImage: `url('${ErrorImage.src}')` }}
						>
							<div className='container'>
								<motion.h1 variants={titleAnimation} className="page-title">404</motion.h1>
							</div>
						</motion.div>
					</motion.div>


					<motion.div
						initial="initial"
						animate="animate"
						variants={containerAnimation}
						className='page-container'
					>
						<div className="container">
							<motion.div variants={contentAnimation} className="content-wrap">
								<div className='content-description'>Page Not Found</div>
							</motion.div>
						</div>
					</motion.div>

				</motion.div>
			</Layout>
		</>
	);
}