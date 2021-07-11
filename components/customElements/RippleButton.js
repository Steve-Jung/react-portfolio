import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Ripple = styled.div`
	position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${props => props.color};
    animation-name: ripple;
    animation-duration: ${props => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
	useEffect(() => {
		let bounce = null;
		if (rippleCount > 0) {
			clearTimeout(bounce);

			bounce = setTimeout(() => {
				cleanUpFunction();
				clearTimeout(bounce);
			}, duration * 4);
		}

		return () => clearTimeout(bounce);
	}, [rippleCount, duration, cleanUpFunction]);
};

const RippleButton = ({ duration = 850, color = "#fff", children }) => {
	const [rippleArray, setRippleArray] = useState([]);

	useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

	const createRipple = event => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
				: rippleContainer.height;
		const radius = size / 2;
    const x = event.pageX - rippleContainer.x - radius;
    const y = event.pageY - rippleContainer.y - radius;
    const newRipple = {
      x,
      y,
      size
    };

    setRippleArray([...rippleArray, newRipple]);
  };

	return (
		<Ripple duration={duration} color={color} onClick={createRipple}>
			{children}
			{rippleArray.length > 0 &&
				rippleArray.map((ripple, index) => {
					return (
						<span
							key={"span" + index}
							style={{
								top: ripple.y,
								left: ripple.x,
								width: ripple.size,
								height: ripple.size
							}}
						/>
					);
				})
			}
		</Ripple>
	);
};

export default RippleButton;