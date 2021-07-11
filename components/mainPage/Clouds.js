import React, { memo } from 'react';
import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';

const Clouds = memo(() => {
	const gltf = useGLTF('/models/clouds/clouds.glb');
	const [bakedTexture] = useTexture(['/models/clouds/clouds_baked.jpg']);

	bakedTexture.flipY = false; // 텍스쳐 이미지 플립 false
	bakedTexture.encoding = THREE.sRGBEncoding;

	const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

	const bakedMesh = gltf.scene.children.find((child) => child.name === 'clouds_baked');

	// 머티리얼 적용하기
	bakedMesh.material = bakedMaterial;

	return (
		<>
			<primitive object={gltf.scene} />
		</>
	);
});

export default Clouds;