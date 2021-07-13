import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

const Layout = ({ children }) => {
	const router = useRouter()

	// 메뉴 state
	const [menuState, setMenuState] = useState({
		initial: false,
		clicked: null,
		menuName: 'Portfolio'
	});

	// 메뉴 버튼 비활성화 여부 state
	const [disabled, setDisabled] = useState(false);

	// 페이지 변경을 위한 useEffect
	useEffect(() => {
		const setting = () => setMenuState({ clicked: false, menuName: 'Portfolio' });
		// listen page change
		router.events.on('routeChangeStart', setting);

		return () => {
			router.events.off('routeChangeStart', setting);
			setMenuState({ clicked: false, menuName: 'Portfolio' });
		}
	}, [router.events]);

	const handleMenu = () => {
		disabledMenu();
		if (menuState.initial === false) {
			setMenuState({
				initial: null,
				clicked: true,
				menuName: 'Close'
			});
		} else if (menuState.clicked === true) {
			setMenuState({
				clicked: !menuState.clicked,
				menuName: 'Portfolio'
			});
		} else if (menuState.clicked === false) {
			setMenuState({
				clicked: !menuState.clicked,
				menuName: 'Close'
			});
		}
	};

	// 메뉴 버튼을 비활성화해야 하는지 결정하는 함수
	const disabledMenu = () => {
		setDisabled(!disabled);
		setTimeout(() => {
			setDisabled(false);
		}, 1200);
	}

	return (
		<>
			<div className='header-wrap no-drag'>
				<div className='container fluid'>
					<div className='header'>
						<Link href='/'>
							<a>JungJisub.</a>
						</Link>

						<div className='menu'>
							<button disabled={disabled} onClick={handleMenu}>{menuState.menuName}</button>
						</div>

					</div>
				</div>
				<Navigation menuState={menuState} />
			</div>

			<div className='container-wrap'>{children}</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
