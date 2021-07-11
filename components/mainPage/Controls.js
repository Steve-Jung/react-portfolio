import React, { useState, useCallback, useEffect, forwardRef } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

// Components
import RippleButton from '../customElements/RippleButton';
import MainContents from './MainContents';

/**
 * Select Camera
 */
const Controls = forwardRef(({ cameraLookAtRef, start, maskDisabled }, ref) => {
	const [currentCamera, setCurrentCamera] = useState(0);
	const [navigationTitle, setNavigationTitle] = useState('');
	const [prevDisabled, setPrevDisabled] = useState(false);
	const [nextDisabled, setNextDisabled] = useState(false);

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
				setPrevDisabled(true);
				setNextDisabled(false);
				cameraLookAtRef.current.mainSceneHandler();
			}
			if (currentCamera === 1) {
				setNavigationTitle('Ferry');
				setPrevDisabled(false);
				setNextDisabled(false);
				cameraLookAtRef.current.camHandler1();
			}
			if (currentCamera === 2) {
				setNavigationTitle('Portal');
				setPrevDisabled(false);
				setNextDisabled(false);
				cameraLookAtRef.current.camHandler2();
			}
			if (currentCamera === 3) {
				setNavigationTitle('House');
				setPrevDisabled(false);
				setNextDisabled(true);
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
				{maskDisabled &&
					<div className='cam-navigation-mask no-drag'>
						<div className='fake-inner-cam-btn no-drag'>
							<RippleButton />
						</div>
						<div className='fake-navigation-title no-drag' />
						<div className='fake-inner-cam-btn no-drag'>
							<RippleButton />
						</div>
					</div>
				}
			</div>


		</>

	);
});

export default Controls;
