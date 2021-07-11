import React, { useEffect, memo } from 'react';
import { useThree } from '@react-three/fiber';

// window size
export const sizes = {
	width: 0,
	height: 0,
};

const Resize = memo(() => {
	const { gl, camera } = useThree();

	useEffect(() => {
		const windowResize = () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			gl.setSize(sizes.width, sizes.height);
			gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		};
		window.addEventListener('resize', windowResize);

		return () => window.removeEventListener('resize', windowResize);
	}, [gl, camera]);

	return null;
});

export default Resize;