import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube'

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

const Youtube = ({ videoId }) => {
	return (
		<>
			<ReactPlayer
				className='player'
				width='100%'
				height='400px'
				controls={true}
				url={`https://www.youtube.com/watch?v=${videoId}`}
			/>
		</>
	)
}

const PortfolioContent = ({ object }) => {
  return (
    <>
      <motion.div
				exit={{
					opacity: 0,
					transition: {
						duration: 0.45,
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
						style={{ backgroundImage: `url('${object.headerImage}')` }}
					>
						<div className='container'>
							<motion.h1 variants={titleAnimation} className="page-title">{object.name}</motion.h1>
							<motion.div variants={titleAnimation} className="spec">Spec : {object.spec}</motion.div>
							{object.link &&
								<Link href={object.link}>
									<a className='page-link' target="_blank" rel="noopener noreferrer nofollow">Link</a>
								</Link>
							}
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
							<div className='content-description'>{object.content}</div>
							<div className='content-image-wrap'>
								{object.images.map((image) => (
									<div className='content-image' key={image.name}>
										<Image className='image' src={image.src} alt={image.name} placeholder='blur' />
									</div>
								))}
							</div>
							{object.videoId &&
								<Youtube videoId={object.videoId} />
							}
						</motion.div>
					</div>
				</motion.div>

				<motion.div
					initial="initial"
					animate="animate"
					variants={containerAnimation}
					className="page-footer-wrap"
				>
					<motion.div
						variants={titleAnimation}
						className='page-footer'
						style={{ backgroundImage: `url('${object.footerImage}')` }}
					>
					</motion.div>
				</motion.div>

      </motion.div>
    </>
  );
};

export default PortfolioContent;
