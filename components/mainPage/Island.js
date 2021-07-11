import React, { useRef, useEffect, memo, useMemo } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';

// Shaders
import portalVertexShader from '../../components/shaders/portal/vertex';
import portalFragmentShader from '../../components/shaders/portal/fragment';

import galaxyVertexShader from '../../components/shaders/galaxy/vertex';
import galaxyFragmentShader from '../../components/shaders/galaxy/fragment';

const options = {
	count: 10000,
	size: 0.005,
	radius: 0.15,
	branches: 5,
	spin: 320,
	uSize: 25,
	randomness: 0.2,
	randomnessPower: 5,
	insideColor: '#8a3dbd',
	outsideColor: '#7c74d2',
};

const Island = memo(() => {
	const { gl } = useThree();

	const gltf = useGLTF('/models/island/island.glb');
	const [bakedTexture] = useTexture(['/models/island/baked.jpg']);

	bakedTexture.flipY = false; // 텍스쳐 이미지 플립 false
	bakedTexture.encoding = THREE.sRGBEncoding;

	const bakedMaterial = useMemo(() => new THREE.MeshBasicMaterial({ map: bakedTexture }), [bakedTexture]);
	const mergedLightMaterial = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffe5 }), []);
	const portalLightMaterial = useMemo(() => new THREE.ShaderMaterial({
		uniforms: {
			uTime: { value: 0 },
			uColorStart: { value: new THREE.Color('#000000') },
			uColorEnd: { value: new THREE.Color('#ffffff') }
		},
		vertexShader: portalVertexShader,
		fragmentShader: portalFragmentShader
	}), []);

	// meshes
	const bakedMesh = gltf.scene.children.find((child) => child.name === 'baked');
	const mergedLightMesh = gltf.scene.children.find((child) => child.name === 'mergedLight');
	const portalLightMesh = gltf.scene.children.find((child) => child.name === 'portalLight');

	// 오브젝트 가져오기
	// gltf.scene.traverse((child) => {
	// 	child.material = bakedMaterial;
	// });

	// 머티리얼 적용하기
	bakedMesh.material = bakedMaterial;
	mergedLightMesh.material = mergedLightMaterial;
	portalLightMesh.material = portalLightMaterial;

	/* Galaxy */
	const galaxyRef = useRef(null);
	const galaxyGeometry = useMemo(() => new THREE.BufferGeometry(), []);

	const positions = useMemo(() => new Float32Array(options.count * 3), []);
	const colors = useMemo(() => new Float32Array(options.count * 3), []);
	const scales = useMemo(() => new Float32Array(options.count * 1), []);

	const colorInside = useMemo(() => new THREE.Color(options.insideColor), []);
	const colorOutside = useMemo(() => new THREE.Color(options.outsideColor), []);

	useMemo(() => {
		for (let i = 0; i < options.count; i++) {
			const i3 = i * 3;

			const radius = Math.random() * options.radius;
			const spinAngle = radius * options.spin;
			const branchAngle = (i % options.branches) / options.branches * Math.PI * 2;

			const randomX = Math.pow(Math.random(), options.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * options.randomness * radius;
			const randomY = Math.pow(Math.random(), options.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * options.randomness * radius;
			const randomZ = Math.pow(Math.random(), options.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * options.randomness * radius;

			positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX;
			positions[i3 + 1] = randomY;
			positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

			const mixedColor = colorInside.clone();
			mixedColor.lerp(colorOutside, radius / options.radius);

			colors[i3 + 0] = mixedColor.r;
			colors[i3 + 1] = mixedColor.g;
			colors[i3 + 2] = mixedColor.b;

			// Scale
			scales[i] = Math.random();
		}

		galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
		galaxyGeometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
	}, [galaxyGeometry, positions, colors, scales, colorInside, colorOutside ]);

	const galaxyMaterial = useMemo(() => new THREE.ShaderMaterial({
		transparent: false,
		depthTest: true,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		vertexColors: true,
		uniforms: {
			uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
			uSize: { value: options.uSize * gl.getPixelRatio() }
		},
		vertexShader: galaxyVertexShader,
		fragmentShader: galaxyFragmentShader,
	}), [gl]);

	useEffect(() => {
		galaxyRef.current.rotation.reorder('XZY');
		galaxyRef.current.rotation.x = Math.PI * 0.5;
		galaxyRef.current.rotation.z = Math.PI * 0.295;
	}, []);

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();

		// portalLightMaterial.uniforms.uTime.value = elapsedTime;

		galaxyRef.current.rotation.y = elapsedTime * 0.1;
		galaxyRef.current.updateMatrixWorld();
	});

	useMemo(() => {
		portalLightMaterial.uniforms.uColorStart.value.set('#000000');
		portalLightMaterial.uniforms.uColorEnd.value.set('#ffffff');
	}, [portalLightMaterial]);

	useEffect(() => {
		const windowResize = () => {
			galaxyMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
		};
		window.addEventListener('resize', windowResize);

		return () => window.removeEventListener('resize', windowResize);
	}, [galaxyMaterial.uniforms.uPixelRatio]);

	return (
		<>
			<primitive object={gltf.scene} />
			<points
				ref={galaxyRef}
				// position={[0.62, 0.6, 0.09]}
				position={[0.71, 0.6, 0.03]}
				geometry={galaxyGeometry}
				material={galaxyMaterial}
			/>
		</>
	);
});

export default Island;