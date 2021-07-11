import React, { memo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';

const CloudA = memo(() => {
	const gltf = useGLTF('/models/cloudA/cloudA.glb');
	const [bakedTexture] = useTexture(['/models/cloudA/cloudA_baked.jpg']);

	bakedTexture.flipY = false; // 텍스쳐 이미지 플립 false
	bakedTexture.encoding = THREE.sRGBEncoding;

	const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

	// 오브젝트 가져오기
	const bakedMesh = gltf.scene.children.find((child) => child.name === 'cloudA_baked');

	// 머티리얼 적용하기
	bakedMesh.material = bakedMaterial;

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();

		bakedMesh.position.y = Math.sin(elapsedTime * 0.3 - 0.5) * 0.1 + 2;
	});

	return (
		<>
			<primitive object={gltf.scene} />
		</>
	);
});

export default CloudA;