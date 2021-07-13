import React, { useState, useCallback, useEffect, forwardRef } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

// Components
import RippleButton from '../customElements/RippleButton';
import MainContents from './MainContents';

/**
 * Select Camera
 */
const Controls = forwardRef(({
	cameraLookAtRef,
	start,
	prevDisabled,
	nextDisabled,
	currentCamera,
	setCurrentCamera,
}, ref) => {
	const [navigationTitle, setNavigationTitle] = useState('');

	const prev = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();

		// maskHandler();

		if (currentCamera > 0) {
			setCurrentCamera(currentCamera => currentCamera - 1);
		}
	}, [currentCamera, setCurrentCamera]);

	const next = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();

		if (currentCamera < 3) {
			setCurrentCamera(currentCamera => currentCamera + 1);
		}
	}, [currentCamera, setCurrentCamera]);

	useEffect(() => {
		if (start) {
			if (currentCamera === 0) {
				setNavigationTitle('Landscape');
				cameraLookAtRef.current.mainSceneHandler();
			}
			if (currentCamera === 1) {
				setNavigationTitle('Ferry');
				cameraLookAtRef.current.camHandler1();
			}
			if (currentCamera === 2) {
				setNavigationTitle('Portal');
				cameraLookAtRef.current.camHandler2();
			}
			if (currentCamera === 3) {
				setNavigationTitle('House');
				cameraLookAtRef.current.camHandler3();
			}
		}
	}, [start, currentCamera, cameraLookAtRef, setNavigationTitle]);

	return (
		<>
			<MainContents start={start} currentCamera={currentCamera} />

			<div className='cam-navigation' ref={ref}>
				<button className='cam-btn prev-cam-btn no-drag' onClick={prev} disabled={prevDisabled}>
					<div className='inner-cam-btn'>
						<GrFormPrevious className='icon left' />
						<RippleButton />
					</div>
				</button>

				<div className='navigation-title-wrap'>
					<div className='navigation-title no-drag'>{navigationTitle}</div>
					<div className='navigation-loading'></div>
				</div>

				<button className='cam-btn next-cam-btn no-drag' onClick={next} disabled={nextDisabled}>
					<div className='inner-cam-btn'>
						<GrFormNext className='icon right' />
						<RippleButton />
					</div>
				</button>
			</div>


		</>

	);
});

export default Controls;
