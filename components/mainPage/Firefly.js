import React, { useEffect, memo, useMemo } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';

// Shaders
import firefliesVertexShader from '../../components/shaders/fireflies/vertex';
import firefliesFragmentShader from '../../components/shaders/fireflies/fragment';

// components
import Resize from './Resize';

/**
 * Fireflies
 */
const Firefly = memo(({ setFireflyRatio }) => {
	const { gl, camera } = useThree();
	const firefliesGeometry = useMemo(() => new THREE.BufferGeometry(), []);

	const firefliesCount = 30;
	const positionArray = useMemo(() => new Float32Array(firefliesCount * 3), []);
	const scaleArray = useMemo(() => new Float32Array(firefliesCount), []);

	useMemo(() => {
		for (let i = 0; i < firefliesCount; i++) {
			positionArray[i * 3 + 0] = (Math.random() - 0.5) * 3;
			positionArray[i * 3 + 1] = Math.random() * 1.5;
			positionArray[i * 3 + 2] = (Math.random() - 0.5) * 3;

			scaleArray[i] = Math.random();
		}

		firefliesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
		firefliesGeometry.setAttribute('aScale', new THREE.BufferAttribute(scaleArray, 1));
	}, [firefliesCount, positionArray, scaleArray, firefliesGeometry]);

	const firefliesMaterial = useMemo(() => new THREE.ShaderMaterial({
		uniforms: {
			uTime: { value: 0 },
			uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
			uSize: { value: 100 }
		},
		vertexShader: firefliesVertexShader,
		fragmentShader: firefliesFragmentShader,
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false,
	}), []);

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();

		firefliesMaterial.uniforms.uTime.value = elapsedTime;
	});

	useMemo(() => {
		firefliesMaterial.uniforms.uSize.value = 100;
	}, [firefliesMaterial]);

	useEffect(() => {
		const windowResize = () => {
			firefliesMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
		};
		window.addEventListener('resize', windowResize);

		return () => window.removeEventListener('resize', windowResize);
	}, [firefliesMaterial.uniforms.uPixelRatio]);

	return (
		<>
			<points geometry={firefliesGeometry} material={firefliesMaterial} />
		</>
	);
});

export default Firefly;