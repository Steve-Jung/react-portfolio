import React, { useState, useRef, useEffect, memo } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useThree, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

/**
 * Points of interest
 */
const raycaster = new THREE.Raycaster();

const HtmlPoint = memo(({ showHtmlPoint }) => {
	const { camera, scene } = useThree();

	const point0 = useRef(null);
	const point1 = useRef(null);
	const point2 = useRef(null);

	const [points, setPoints] = useState([]);

	useEffect(() => {
		setPoints([
			...points,
			{
				position: new THREE.Vector3(-1.21, 0.6, 1.89),
				element: point0,
			},
			{
				position: new THREE.Vector3(0.77, 0.6, 0.22),
				element: point1,
			},
			{
				position: new THREE.Vector3(-1.3, 0.51, -0.355),
				element: point2,
			}
		]);
	}, [points]);

	useFrame(() => {
		// fireflies 걸러내기
		const sceneFilter = scene.children.filter((element) => {
			if (element.type !== 'Points') {
				return true;
			}
		});

		points.map((point, index) => {
			const screenPosition = point.position.clone();
			screenPosition.project(camera);

			raycaster.setFromCamera(screenPosition, camera);
			const intersects = raycaster.intersectObjects(sceneFilter, true);

			if (point.element.current !== null) {
				if (intersects.length === 0) {
					point.element.current.classList.add('visible');
				} else {
					const intersectionDistance = intersects[0].distance;
					const pointDistance = point.position.distanceTo(camera.position);

					if (intersectionDistance < pointDistance) {
						point.element.current.classList.remove('visible');
					} else {
						point.element.current.classList.add('visible');
					}
				}
			}
		});
	});

	const showHtmlHandler = (ref) => {
		gsap.to(ref.current, {
			delay: 2.5,
			duration: 2,
			opacity: 1
		});
	}

	useEffect(() => {
		if (showHtmlPoint) {
			showHtmlHandler(point0);
			showHtmlHandler(point1);
			showHtmlHandler(point2);
		}
	}, [showHtmlPoint, point0, point1, point2])

	return (
		<>
			<Html
				ref={point0}
				className='point point-0 visible'
				zIndexRange={[0, 0]}
				position={[-1.21, 0.6, 1.89]}
			>
				<div className='label'></div>
				<div className='text'>Low polygon 으로 항구를 만들었습니다.</div>
			</Html>

			<Html
				ref={point1}
				className='point point-1 visible'
				zIndexRange={[0, 0]}
				position={[0.77, 0.6, 0.22]}
			>
				<div className='label'></div>
				<div className='text'>포탈에 멋진 셰이더 효과를 주었습니다.</div>
			</Html>

			<Html
				ref={point2}
				className='point point-2 visible'
				zIndexRange={[0, 0]}
				position={[-1.3, 0.51, -0.355]}
			>
				<div className='label'></div>
				<div className='text'>우리집</div>
			</Html>
		</>
	);
});

export default HtmlPoint;