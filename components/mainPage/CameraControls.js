import React, { useCallback, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const CameraControls = forwardRef(({ meshRef, setPrevDisabled, setNextDisabled, currentCamera }, ref) => {
	const { camera } = useThree();

	const cameraLookAtGeometry = new THREE.BoxBufferGeometry(0.05, 0.05, 0.05);
	const cameraLookAtMaterial = new THREE.MeshBasicMaterial({
		transparent: true,
		opacity: 0,
		// color: 0xff0000
	});

	useFrame(() => {
		camera.updateProjectionMatrix();
		camera.lookAt(meshRef.current.position);
	});

	const camAction = useCallback((duration1, duration2, fov, [focusX, focusY, focusZ], [camX, camY, camZ]) => {
		gsap.to(meshRef.current.position, {
			duration: duration1, // 2,
			x: focusX, //-1,
			y: focusY, // 0.37,
			z: focusZ, // 1.7,
			ease: 'power3.out',
		});
		gsap.to(camera.position, {
			duration: duration2,
			x: camX, // -2.4,
			y: camY, // 1.1,
			z: camZ, // 3.3,
			ease: 'power3.out',
		});
		gsap.to(camera, {
			duration: duration2,
			fov: fov,
			ease: 'power3.out',
			onStart: () => {
				setPrevDisabled(true);
				setNextDisabled(true);
			},
			onComplete: () => {
				if (currentCamera === 3) {
					setPrevDisabled(false);
					setNextDisabled(true);
				} else if (currentCamera === 0) {
					setPrevDisabled(true);
					setNextDisabled(false);
				} else {
					setPrevDisabled(false);
					setNextDisabled(false);
				}
			},
		});
	}, [meshRef, camera, setPrevDisabled, setNextDisabled, currentCamera]);

	useImperativeHandle(ref, () => ({
		mainSceneHandler() {
			// camAction(1, 1.8, 45, [0, 10, 0], [-25, 10, 25]);
			camAction(1.5, 3.5, 20, [0, 0.5, 0 ], [-6, 3, 6]);
		},
		camHandler1() {
			camAction(1.8, 1.8, 20, [-1, 0.37, 1.7], [-2.4, 0.5, 3.3]);
		},
		camHandler2() {
			camAction(1.8, 1.8, 20, [0.48, 0.5, 0.2], [-0.8, 1.3, 2]);
		},
		camHandler3() {
			camAction(1.8, 1.8, 20, [-1.25, 0.6, -0.6], [-1.7, 1, 2]);
		}
	}));

	return (
		<>
			<OrbitControls
				// enableRotate={false}
				enableZoom={false}
				enablePan={false}
				rotateSpeed={0.1}
				minPolarAngle={Math.PI * 0.2}
				maxPolarAngle={Math.PI * 0.45}
				minAzimuthAngle={Math.PI * -0.35}
				maxAzimuthAngle={Math.PI * 0.2}
			/>
			<mesh ref={meshRef} geometry={cameraLookAtGeometry} material={cameraLookAtMaterial} position-y={10} />
		</>
	);
});

export default CameraControls;