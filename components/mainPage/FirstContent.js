import React from 'react';

import SimpleBar from 'simplebar-react';
import {
	SiHtml5,
	SiSass,
	SiJavascript,
	SiReact,
	SiNodeDotJs,
	SiFirebase,
	SiGoogleanalytics,
	SiGoogletagmanager,
	SiOracle,
	SiPhp,
	SiMysql,
	SiMongodb,
	SiWebgl,
	SiWordpress,
	SiBlender,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobeaftereffects,
	SiAdobepremiere
} from "react-icons/si";

const frontSkills = [
	{
		skillId: 'React',
		skillClass: 'skill-react',
		skillIcon: SiReact,
		skillLabel: 'Redux, Next.js, Gatsby 라이브러리나 프레임워크로 다양한 용도의 인터랙티브 웹 서비스를 만들 수 있습니다. 이 포트폴리오 제작에도 사용하였습니다.',
		skillColor: '#61dafb'
	},
	{
		skillId: 'WebGL',
		skillClass: 'skill-webgl',
		skillIcon: SiWebgl,
		skillLabel: 'GLSL, Three.js 라이브러리로 3D 그래픽 디자인을 적용한 인터랙티브 웹 서비스를 만들 수 있습니다. 이 포트폴리오 제작에도 사용하였습니다.',
		skillColor: '#C81C20'
	},
	{
		skillId: 'JavaScript',
		skillClass: 'skill-js',
		skillIcon: SiJavascript,
		skillLabel: '프론트엔드 디자인 UI 라이브러리를 직접 제작하여 사용합니다',
		skillColor: '#f0db4f'
	},
	{
		skillId: 'Css/Sass',
		skillClass: 'skill-sass',
		skillIcon: SiSass,
		skillLabel: '새로운 디자인이 나올때마다 빠르게 습득하여 적용 가능합니다.',
		skillColor: '#CC6699'
	},
	{
		skillId: 'HTML',
		skillClass: 'skill-html',
		skillIcon: SiHtml5,
		skillLabel: 'HTML의 주요 태그들과 해당 속성 사용에 익숙합니다.',
		skillColor: '#f06529'
	},
	{
		skillId: 'Wordpress',
		skillClass: 'skill-wordpress',
		skillIcon: SiWordpress,
		skillLabel: '테마 디자인과 플러그인을 자체 개발하여 20여 개의 웹사이트 제작에 사용하였습니다.',
		skillColor: '#21759b'
	},
];

const BackendSkills = [
	{
		skillId: 'Node.js',
		skillClass: 'skill-node',
		skillIcon: SiNodeDotJs,
		skillLabel: '백엔드 개발에 대부분 사용하며, Oracle Eloqua 웹앱과 관리자 서비스를 구축하였습니다.',
		skillColor: '#026e00'
	},
	{
		skillId: 'Firebase',
		skillClass: 'skill-firebase',
		skillIcon: SiFirebase,
		skillLabel: '파이어베이스의 실시간 NoSQL 데이터베이스를 활용하여 빅데이터를 분석하고 가공 및 처리하는 API 서버를 구축하였습니다.',
		skillColor: '#FFA611'
	},
	{
		skillId: 'PHP',
		skillClass: 'skill-php',
		skillIcon: SiPhp,
		skillLabel: 'Ver. 7.0까지 다뤄봤습니다. 아파치 웹서버를 기반으로 하는, 웹 개발과 자체 개발한 워드프레스 테마와 플러그인으로 20여 개의 사이트를 제작하였습니다.',
		skillColor: '#474A8A'
	},
	{
		skillId: 'MySQL',
		skillClass: 'skill-mysql',
		skillIcon: SiMysql,
		skillLabel: 'Oracle Eloqua 웹앱 제작시 유저의 데이터 관리를 위해 사용했습니다.',
		skillColor: '#00758F'
	},
	{
		skillId: 'Mongodb',
		skillClass: 'skill-mongodb',
		skillIcon: SiMongodb,
		skillLabel: 'mongoose를 사용하여 스키마 정의와 데이터 관계 설정을 할 수 있습니다.',
		skillColor: '#4db33d'
	},
];

const services = [
	{
		skillId: 'Google Analytics',
		skillClass: 'skill-googleanalytics',
		skillIcon: SiGoogleanalytics,
		skillLabel: 'GA의 빅데이터 분석 기술을 국내의 대형 기업들이 실제로 활용할 수 있도록 서비스 라이브러리를 개발하고 이를 장기간 유지 보수를 하였습니다.',
		skillColor: '#F9AB00'
	},
	{
		skillId: 'Google Tag Manager',
		skillClass: 'skill-googletagmanager',
		skillIcon: SiGoogletagmanager,
		skillLabel: '같은 기업 대상에게 GTM 서비스를 적용하고 유지 보수를 하였습니다.',
		skillColor: '#4285f4'
	},
	{
		skillId: 'Oracle Eloqua',
		skillClass: 'skill-eloqua',
		skillIcon: SiOracle,
		skillLabel: '대형 기업용 자동화 마케팅 서비스 웹앱을 개발하고 서비스 및 유지 보수하였습니다.',
		skillColor: '#f80000'
	},
];

const graphicSkills = [
	{
		skillId: 'Blender',
		skillClass: 'skill-blender',
		skillIcon: SiBlender,
		skillLabel: '카메라, 조명, 이펙트 설정에 능숙하며 3D 모델을 자체 제작할 수 있습니다.',
		skillColor: '#EA7600'
	},
	{
		skillId: 'Adobe photoshop',
		skillClass: 'skill-photoshop',
		skillIcon: SiAdobephotoshop,
		skillLabel: '웹 디자인 시안을 준비할 때와 3D 텍스처를 자체 제작할 때 사용합니다.',
		skillColor: '#8BC3FC'
	},
	{
		skillId: 'Adobe illustrator',
		skillClass: 'skill-illustrator',
		skillIcon: SiAdobeillustrator,
		skillLabel: '벡터를 활용한 그래픽 디자인에 사용합니다.',
		skillColor: '#FBB034'
	},
	{
		skillId: 'Adobe aftereffects',
		skillClass: 'skill-aftereffects',
		skillIcon: SiAdobeaftereffects,
		skillLabel: '영상 컨텐츠에 다양한 특수 효과를 삽입할 수 있습니다.',
		skillColor: '#CF96FD'
	},
	{
		skillId: 'Adobe premiere',
		skillClass: 'skill-premiere',
		skillIcon: SiAdobepremiere,
		skillLabel: '영상 컨텐츠 편집 및 제작에 주로 사용합니다.',
		skillColor: '#330D3E'
	},
];

const CustomSkill = ({ Icon, skillId, skillClass, skillLabel, skillColor }) => {
	return (
		<>
			<div className='inner-content-skill'>
				<div className='skill-icon'>
					<Icon className={`icon ${skillClass}`} style={{ color: skillColor }} />
				</div>
				<div className='inner-content'>
					<p className='skill-name'>{skillId}</p>
					<p className='skill-label'>{skillLabel}</p>
				</div>
			</div>
		</>
	);
}

const FirstContent = ({ content1Ref }) => {
	return (
		<>
			<div ref={content1Ref} className='main-content main-content1 no-drag'>
				<SimpleBar style={{ width: '100%', height: '100%' }}>
					<div className='inner-content-wrap'>
						<div className='inner-title'>
							<p>안녕하세요, 디자인을 좋아하는 </p>
							<p>개발자 정지섭입니다.</p>
						</div>

						<div className='inner-content-line' />

						<div className='inner-contents-skills'>
							<div className='inner-content-title'>Frontend Skills</div>
							{frontSkills.map((frontSkill) => (
								<CustomSkill
									key={frontSkill.skillClass}
									Icon={frontSkill.skillIcon}
									skillId={frontSkill.skillId}
									skillClass={frontSkill.skillClass}
									skillLabel={frontSkill.skillLabel}
									skillColor={frontSkill.skillColor}
								/>
							))}
						</div>

						<div className='inner-content-line' />

						<div className='inner-contents-skills'>
							<div className='inner-content-title'>Backend Skills</div>
							{BackendSkills.map((BackendSkill) => (
								<CustomSkill
									key={BackendSkill.skillId}
									Icon={BackendSkill.skillIcon}
									skillId={BackendSkill.skillId}
									skillClass={BackendSkill.skillClass}
									skillLabel={BackendSkill.skillLabel}
									skillColor={BackendSkill.skillColor}
								/>
							))}
						</div>

						<div className='inner-content-line' />

						<div className='inner-contents-skills'>
							<div className='inner-content-title'>Services Skills</div>
							{services.map((service) => (
								<CustomSkill
									key={service.skillId}
									Icon={service.skillIcon}
									skillId={service.skillId}
									skillClass={service.skillClass}
									skillLabel={service.skillLabel}
									skillColor={service.skillColor}
								/>
							))}
						</div>

						<div className='inner-content-line' />

						<div className='inner-contents-skills'>
							<div className='inner-content-title'>Graphic Tool Skills</div>
							{graphicSkills.map((graphicSkill) => (
								<CustomSkill
									key={graphicSkill.skillId}
									Icon={graphicSkill.skillIcon}
									skillId={graphicSkill.skillId}
									skillClass={graphicSkill.skillClass}
									skillLabel={graphicSkill.skillLabel}
									skillColor={graphicSkill.skillColor}
								/>
							))}
						</div>

						<div className='inner-content-line' />

						<div className='inner-contents'>
							<div className='inner-content-title'>경력</div>
							<div className='inner-content-line' />
							<div className='inner-content'>
								<div className='year-month'>2015.01 - 2017.04</div>
								<div className='company-name'>위글 스튜디오</div>
								<div className='company-role'>Frontend Development</div>
								<div className='company-work'>
									<div className='work-list-wrap'>
										<div className='work-title'>워드프레스 관련 업무</div>
										<div className='work-list'>워드프레스 테마 디자인, 전체 개발</div>
										<div className='work-list'>결제 모듈을 활용한 결제 플러그인 전체 개발</div>
										<div className='work-list'>카루셀 플러그인 전체 개발</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>리카틸 쇼핑몰</div>
										<div className='work-list'>디자인(참여인원: 2명, 기여도: 90%)</div>
										<div className='work-list'>전체 개발</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>스마트 카로스</div>
										<div className='work-list'>디자인(참여인원: 2명, 기여도: 80%)</div>
										<div className='work-list'>전체 개발</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>코어 독학 재수학원</div>
										<div className='work-list'>전체 디자인</div>
										<div className='work-list'>전체 개발</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>스마트로직</div>
										<div className='work-list'>디자인(기여도 60%)</div>
										<div className='work-list'>전체 개발</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>퓨리에워터</div>
										<div className='work-list'>디자인(기여도 60%)</div>
										<div className='work-list'>전체 개발</div>
									</div>
								</div>
							</div>
							<div className='inner-content-line' />
							<div className='inner-content'>
								<div className='year-month'>2017.03 - 2018.10</div>
								<div className='company-name'>닷네임코리아 프리랜서</div>
								<div className='company-role'>Frontend Development</div>
								<div className='company-work'>
									<div className='work-list-wrap'>
										<div className='work-title'>와인앤리큐어</div>
										<div className='work-list'>전체 디자인</div>
										<div className='work-list'>전체 개발</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>제타플랜</div>
										<div className='work-list'>전체 개발</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>마케티노</div>
										<div className='work-list'>명함, 로고, 웹, 상세페이지, 관리자 사이트 등 전체 디자인</div>
										<div className='work-list'>웹 사이트, AD 사이트, 관리자 사이트 및 프론트 전체 개발, 유지 보수</div>
										<div className='work-list'>이전에 구축되어 있던 백엔드 서버에서 고객 니즈에 맞지 않는 데이터 응답 및 형태로 인해 리뉴얼</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>365차한의원</div>
										<div className='work-list'>전체 디자인</div>
										<div className='work-list'>전체 개발</div>
									</div>
								</div>
							</div>
							<div className='inner-content-line' />
							<div className='inner-content'>
								<div className='year-month'>2018.12 - 2019.09</div>
								<div className='company-name'>골든플래닛</div>
								<div className='company-role'>Fullstack Development</div>
								<div className='company-work'>
									<div className='work-list-wrap'>
										<div className='work-title'>Oracle Eloqua 웹앱</div>
										<div className='work-list'>전체 디자인</div>
										<div className='work-list'>전체 개발, 유지보수</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>Oracle Eloqua 웹앱 및 관리자 사이트</div>
										<div className='work-list'>전체 디자인</div>
										<div className='work-list'>전체 개발(참여인원: 2명, 기여도 80%), 유지 보수</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>Google Marketing Platform</div>
										<div className='work-list'>GA 적용을 위한 공통화 라이브러리 개발 참여(참여인원: 4명, 기여도: 30%)</div>
										<div className='work-list'>국민, 삼성, 우리, 신한, 인터파크, 무신사 등 여러 기업 대상으로 Google Analytics, Google Tag Manager, google optimizer, Firebase 서비스 적용 및 유지 보수.</div>
									</div>
									<div className='work-list-wrap'>
										<div className='work-title'>TousFlux 관리자 사이트</div>
										<div className='work-list'>디자인(기여도 70%)</div>
										<div className='work-list'>통계 그래프 뷰어 구현(참여인원 2명, 기여도: 80%)</div>
									</div>
								</div>
							</div>
							<div className='inner-content-line' />
							<div className='inner-content'>
								<div className='year-month'>2019.11 - 2020.01</div>
								<div className='company-name'>Globaleur</div>
								<div className='company-role'>Frontend Development</div>
								<div className='company-work'>
									<div className='work-list-wrap'>
										<div className='work-title'>글로벌 투어 플래닝 웹앱</div>
										<div className='work-list'>프론트엔드 개발 주도(참여인원 2명, 기여도: 90%)</div>
										<div className='work-list'>Firebase와 통신하는 웹앱 서비스용 API 및 서버 전체 개발(기여도: 100%)</div>
										<div className='work-list'>빅데이터와 AI를 활용하여 사용자 개개인에게 최적화된 여행 일정 및 코스를 맞춤 설계하는 기능 개발(기여도: 100%)</div>
										<div className='work-list'>정확한 행선지 안내를 위한 자체 네비게이션 기능 개발(기여도: 100%)</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SimpleBar>
			</div>
		</>
	)
}

export default FirstContent;
