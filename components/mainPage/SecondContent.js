import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SimpleBar from 'simplebar-react';
import { useRouter } from 'next/router';

import portfolios from '../../data/portfolios';
import projects from '../../data/projects';

const CustomPortfolio = ({ name, page, thumb, shortContent, year, project }) => {
	const router = useRouter();

	const handlePortfolioRoute = (page) => {
		router.push(`/portfolio/${page}`)
	}

	const handleProjectRoute = (page) => {
		router.push(`/project/${page}`)
	}


	return (
		<>
			<div className='inner-content-portfolio'>
				{project
					? <div className='image-wrap' onClick={() => handleProjectRoute(page)}>
							<Image
								className={'portfolio-img'}
								src={thumb}
								alt={name}
								placeholder='blur'
							/>
						</div>
					: <div className='image-wrap' onClick={() => handlePortfolioRoute(page)}>
							<Image
								className={'portfolio-img'}
								src={thumb}
								alt={name}
								placeholder='blur'
							/>
						</div>
				}
				<div className='inner-content'>
					<p className='year'>{year}</p>
					<p className='name'>{name}</p>
					<p className='label'>{shortContent}</p>
					{project
						? <Link href={`/project/${encodeURIComponent(page)}`}>
								<a className='portfolio-button'>더 보기</a>
							</Link>
						: <Link href={`/portfolio/${encodeURIComponent(page)}`}>
								<a className='portfolio-button'>더 보기</a>
							</Link>
					}
				</div>
			</div>
		</>
	);
}

const SecondContent = ({ content2Ref }) => {
	return (
		<>
			<div ref={content2Ref} className='main-content main-content2 no-drag'>
				<SimpleBar style={{ width: '100%', height: '100%' }}>
					<div className='inner-content-wrap'>
						<div className='inner-title'>
							<p>작업물이 궁금하신가요?</p>
							<p>저의 포트폴리오입니다</p>
						</div>

						<div className='inner-content-line' />

						<div className='inner-contents-portfolio'>
							<div className='inner-content-title'>Portfolio</div>
							{portfolios.map((portfolio) => (
								<CustomPortfolio
									key={portfolio.id}
									name={portfolio.name}
									page={portfolio.page}
									thumb={portfolio.thumb}
									shortContent={portfolio.shortContent}
									year={portfolio.year}
									project={false}
								/>
							))}
						</div>

						<div className='inner-content-line' />

						<div className='inner-contents-portfolio no-drag'>
							<div className='inner-content-title'>Personal projects</div>
							{projects.map((project) => (
								<CustomPortfolio
									key={project.id}
									name={project.name}
									page={project.page}
									thumb={project.thumb}
									shortContent={project.shortContent}
									year={project.year}
									project={true}
								/>
							))}
						</div>

					</div>
				</SimpleBar>
			</div>
		</>
	)
}

export default SecondContent;
