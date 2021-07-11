import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Layout = ({ children }) => {
	return (
		<>
			<div className='header-wrap no-drag'>
				<div className='container fluid'>
					<div className='header'>
						<Link href='/'>
							<a>JungJisub.</a>
						</Link>

						{/* <div className='menu'>
							<ul>
								<li>
									<Link href='/profile'>
										<a>Profile</a>
									</Link>
								</li>
								<li>
									<Link href='/blog'>
										<a>Blog</a>
									</Link>
								</li>
							</ul>
						</div> */}

					</div>
				</div>
			</div>

			<div className='container-wrap'>{children}</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
