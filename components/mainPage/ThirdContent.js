import React from 'react';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';

// image import
import myPic from '../../public/images/photo/myPhoto.jpg';

const ThirdContent = ({ content3Ref }) => {
	return (
		<>
			<div ref={content3Ref} className='main-content main-content3 no-drag'>
				<SimpleBar style={{ width: '100%', height: '100%' }}>
					<div className='inner-content-wrap'>
						<div className='my-photo-wrap'>
							<div className='my-photo-inner'>
								<Image className='my-photo' src={myPic} alt="Jung ji sub's photo" placeholder='blur' />
							</div>
						</div>

						<div className='inner-title'>
							<p>85.11.17</p>
							<p>정지섭</p>
						</div>

						<div className='inner-content-line' />


						<div className='inner-contents-portfolio'>
							<div className='inner-content-title'>프로필</div>
						</div>

						<div className='inner-contents'>
							<div className='inner-content-title'>자기소개</div>
							<div className='inner-content-line' />
							<div className='inner-content'>
								<p className='content-text'>저는 사용자에게 좋은 경험을 주기 위해 만들고 배우는 것을 좋아하는 개발자입니다.</p>
								<p className='content-text'>사용자를 매료시킬 수 있는 흥미로운 디자인과 오래도록 머물고 싶어지는 편안한 UI를 만들기 위해 늘 고심하고 있습니다.</p>
								<p className='content-text'>최근에는 3D 그래픽을 활용한 인터랙티브 웹개발에 빠져있습니다.</p>
							</div>
						</div>

						<div className='inner-contents'>
							<div className='inner-content-title'>관심사</div>
							<div className='inner-content-line' />
							<div className='inner-content'>
								<p className='content-text'>3D 웹개발, 모델링, Typescript, UX/UI</p>
							</div>
						</div>

						<div className='inner-contents'>
							<div className='inner-content-title'>학력</div>
							<div className='inner-content-line' />
							<div className='inner-content'>
								<div className='year-month'>2017.06 - 2021-01</div>
								<p className='content-text'>한국방송통신대학교 2학년 휴학중</p>
							</div>
						</div>

					</div>
				</SimpleBar>
			</div>
		</>
	)
}

export default ThirdContent;
