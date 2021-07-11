import React, { useRef, useEffect, useCallback, memo } from 'react';
import { gsap } from 'gsap';

// Components
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';

const MainContents = memo(({ start, currentCamera }) => {
	const content1Ref = useRef(null);
	const content2Ref = useRef(null);
	const content3Ref = useRef(null);

	const contentShowHandler = useCallback((ref, display) => {
		if (display === true) {
			gsap.to(ref.current, {
				duration: 1.8,
				visibility: 'visible',
				opacity: 1,
				xPercent: 0,
				ease: 'power3.out',
			});
		} else if (display === false) {
			gsap.timeline()
				.to(ref.current, {
					duration: 0.9,
					visibility: 'hidden',
					opacity: 0,
					xPercent: 50,
					ease: 'power3.out',
				})
				.to(ref.current, {
					xPercent: -100,
				});
		}
	}, []);

	useEffect(() => {
		if (start) {
			if (currentCamera === 0) {
				contentShowHandler(content1Ref, false);
				contentShowHandler(content2Ref, false);
				contentShowHandler(content3Ref, false);
			}
			if (currentCamera === 1) {
				contentShowHandler(content1Ref, true);
				contentShowHandler(content2Ref, false);
				contentShowHandler(content3Ref, false);
			}
			if (currentCamera === 2) {
				contentShowHandler(content1Ref, false);
				contentShowHandler(content2Ref, true);
				contentShowHandler(content3Ref, false);
			}
			if (currentCamera === 3) {
				contentShowHandler(content1Ref, false);
				contentShowHandler(content2Ref, false);
				contentShowHandler(content3Ref, true);
			}
		}
	}, [start, currentCamera, content1Ref, content2Ref, content3Ref, contentShowHandler]);

	return (
		<>
			<FirstContent content1Ref={content1Ref} />
			<SecondContent content2Ref={content2Ref} />
			<ThirdContent content3Ref={content3Ref} />
		</>
	)
});

export default MainContents;
