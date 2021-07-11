import React, { useState, useRef, useCallback, useEffect, Suspense, memo } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// Components
import Resize, { sizes } from './Resize';
import CameraControls from './CameraControls';
import Controls from './Controls';
import Island from './Island';
import Firefly from './Firefly';
import Clouds from './Clouds';
import CloudA from './CloudA';


const Scene = memo(() => {
	useEffect(() => {
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;
	}, []);

	const cameraLookAtRef = useRef(null);
  const meshRef = useRef(null);
	const mainRef = useRef(null);
	const mainTitleRef = useRef(null);
	const mainSceneButtonRef = useRef(null);
	const mainSceneMaskRef = useRef(null);
	const controlsRef = useRef(null);

	const [start, setStart] = useState(false);
	const [maskDisabled, setMaskDisabled] = useState(false);
	const [clickState, setClickstate] = useState(false);

	useEffect(() => {
		if (clickState) {
			setMaskDisabled(true);
		} else {
			setMaskDisabled(false);
		}

		return () => {
			setMaskDisabled(false);
		}
	}, [clickState]);

	const mainSceneHandler = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
		// cameraLookAtRef.current.mainSceneHandler();

		// if (!showHtmlPoint) {
		// 	setShowHtmlPoint(true);
		// }

		if (!start) {
			setStart(true);
		}

		gsap.timeline()
			.to(mainSceneButtonRef.current, {
				duration: 1,
				opacity: 0,
				ease: 'power3.out',
				onUpdate: () => {
					gsap.to(mainSceneMaskRef.current, {
						display: 'block',
						opacity: 1,
						ease: 'power3.out',
					});
				},
				onComplete: () => {
					gsap.to(mainTitleRef.current, {
						duration: 1,
						opacity: 0,
						ease: 'power3.out'
					});
				}
			})
			.to(mainRef.current, {
				opacity: 0,
				display: 'none'
			})
			.to(controlsRef.current, {
				duration: 1,
				display: 'flex',
				opacity: '100%',
				onComplete: () => {
					gsap.to(mainSceneMaskRef.current, {
						display: 'none',
						opacity: 0,
						ease: 'power3.out',
					});
				}
			});
	}, [start]);

	return (
		<>
			<Canvas
				shadows={true}
				linear={true}
				alpha={true}
				antialias={true}
				powerPreference='high-performance'
				camera={{
					fov: 45,
					near: 0.1,
					far: 1000,
					position: [-25, 10, 25]
				}}
				onCreated={({ gl }) => {
					gl.setSize(sizes.width, sizes.height);
					gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
					gl.outputEncoding = THREE.sRGBEncoding;
					gl.setClearColor('#20272F');
				}}
			>
				<Resize />

				<Stars count={1000} />

				<Suspense fallback={false}>
					<Island />
					<Clouds />
					<CloudA />
				</Suspense>

				<Firefly />

				{/* <axesHelper args={[3]} /> */}

				<CameraControls ref={cameraLookAtRef} meshRef={meshRef} setClickstate={setClickstate} />
			</Canvas>

			<div ref={mainRef} className='main-title-wrap'>
				<div ref={mainTitleRef} className='main-title no-drag'>PORTFOLIO</div>
				<div ref={mainSceneButtonRef} className='main-scene-button no-drag' onClick={mainSceneHandler}>
					Entrance
				</div>
				<div ref={mainSceneMaskRef} className='main-scene-button-mask no-drag'></div>
			</div>

			<Controls
				ref={controlsRef}
				cameraLookAtRef={cameraLookAtRef}
				start={start}
				maskDisabled={maskDisabled}
			/>
		</>
	);
});

export default Scene;