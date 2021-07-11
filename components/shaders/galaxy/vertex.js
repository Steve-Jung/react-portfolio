/**
 * Shader
 */
const vertexShader = `
	uniform float uSize;
	uniform float uPixelRatio;

	attribute float aScale;

	varying vec3 vColor;

	void main() {
		/**
		 * Position
		 */
		vec4 modelPosition = modelMatrix * vec4(position, 1.0);
		vec4 viewPosition = viewMatrix * modelPosition;
		vec4 projectionPosition = projectionMatrix * viewPosition;

		gl_Position = projectionPosition;

		/**
		 * Size
		 */
		gl_PointSize = uSize * aScale * uPixelRatio;
		// sizeAttenuation
		gl_PointSize *= ( 1.0 / - viewPosition.z );

		vColor = color;
	}
`;

export default vertexShader;