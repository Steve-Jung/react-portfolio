// portfolio thumbnail images
import smartcarrosImg from '../public/images/portfolio/smartcarros/smartcarros-small.jpg';
import coreAcademyImg from '../public/images/portfolio/core/core-small.jpg';
import wineImg from '../public/images/portfolio/wineAndLiquor/wine-small.jpg';
import zetaplanImg from '../public/images/portfolio/zetaplan/zetaplan-small.jpg';
import marketinoImg from '../public/images/portfolio/marketino/maketino-small.jpg';
import chaClinicImg from '../public/images/portfolio/chaClinic/chaclinic-small.jpg';

// smart carros
import SCHeader from '../public/images/portfolio/smartcarros/header.jpg';
import SCFooter from '../public/images/portfolio/smartcarros/footer.jpg';
import SC1 from '../public/images/portfolio/smartcarros/1.jpg';
import SC2 from '../public/images/portfolio/smartcarros/2.jpg';
import SC3 from '../public/images/portfolio/smartcarros/3.jpg';
import SC4 from '../public/images/portfolio/smartcarros/4.jpg';
import SC5 from '../public/images/portfolio/smartcarros/5.jpg';
import SC6 from '../public/images/portfolio/smartcarros/6.jpg';
import SC7 from '../public/images/portfolio/smartcarros/7.jpg';
import SCConcept from '../public/images/portfolio/smartcarros/concept.png';

// core
import CoreHeader from '../public/images/portfolio/core/header.jpg';
import CoreFooter from '../public/images/portfolio/core/footer.jpg';
import Core1 from '../public/images/portfolio/core/1.jpg';
import Core2 from '../public/images/portfolio/core/2.jpg';
import Core3 from '../public/images/portfolio/core/3.jpg';
import Core4 from '../public/images/portfolio/core/4.jpg';
import Core5 from '../public/images/portfolio/core/5.jpg';
import Core6 from '../public/images/portfolio/core/6.jpg';
import Core7 from '../public/images/portfolio/core/7.jpg';
import Core8 from '../public/images/portfolio/core/8.jpg';
import CoreConcept from '../public/images/portfolio/core/concept.png';

// wine
import WineHeader from '../public/images/portfolio/wineAndLiquor/header.jpg';
import WineFooter from '../public/images/portfolio/wineAndLiquor/footer.jpg';
import Wine1 from '../public/images/portfolio/wineAndLiquor/1.jpg';
import Wine2 from '../public/images/portfolio/wineAndLiquor/2.jpg';

// zeta
import ZetaHeader from '../public/images/portfolio/zetaplan/header.jpg';
import ZetaFooter from '../public/images/portfolio/zetaplan/footer.jpg';
import Zeta1 from '../public/images/portfolio/zetaplan/1.jpg';
import Zeta2 from '../public/images/portfolio/zetaplan/2.jpg';

// marketino
import MarketinoHeader from '../public/images/portfolio/marketino/header.jpg';
import MarketinoFooter from '../public/images/portfolio/marketino/footer.jpg';
import Marketino1 from '../public/images/portfolio/marketino/1.jpg';
import Marketino2 from '../public/images/portfolio/marketino/2.jpg';
import Marketino3 from '../public/images/portfolio/marketino/3.jpg';
import Marketino4 from '../public/images/portfolio/marketino/4.jpg';
import Marketino5 from '../public/images/portfolio/marketino/5.jpg';
import Marketino6 from '../public/images/portfolio/marketino/6.jpg';
import Marketino7 from '../public/images/portfolio/marketino/7.jpg';
import Marketino8 from '../public/images/portfolio/marketino/8.jpg';
import Marketino9 from '../public/images/portfolio/marketino/9.jpg';
import Marketino10 from '../public/images/portfolio/marketino/10.jpg';
import MarketinoCard from '../public/images/portfolio/marketino/card.jpg';
import MarketinoConcept from '../public/images/portfolio/marketino/concept.png';

// core
import chaClinicHeader from '../public/images/portfolio/chaClinic/header.jpg';
import chaClinicFooter from '../public/images/portfolio/chaClinic/footer.jpg';
import chaClinic1 from '../public/images/portfolio/chaClinic/1.jpg';
import chaClinic2 from '../public/images/portfolio/chaClinic/2.jpg';
import chaClinic3 from '../public/images/portfolio/chaClinic/3.jpg';
import chaClinic4 from '../public/images/portfolio/chaClinic/4.jpg';
import chaClinic5 from '../public/images/portfolio/chaClinic/5.jpg';
import chaClinic6 from '../public/images/portfolio/chaClinic/6.jpg';
import chaClinic7 from '../public/images/portfolio/chaClinic/7.jpg';
import chaClinicConcept from '../public/images/portfolio/chaClinic/concept.png';

const portfolios = [
	{
		id: 1,
		name: 'Smart Carros',
		page: 'smartcarros',
		year: '2016',
		shortContent: '중고차 해외 거래 사이트',
		spec: 'HTML, CSS, JavaScript, jQuery, PHP, WordPress, MariaDB',
		content: '중고차 해외 거래 사이트',
		thumb: smartcarrosImg,
		headerImage: SCHeader.src,
		footerImage: SCFooter.src,
		images: [
			{	src: SC1,	name: 'main1' },
			{	src: SC2,	name: 'main2' },
			{	src: SC3,	name: 'information' },
			{	src: SC4,	name: 'carousel' },
			{	src: SC5,	name: 'detail1' },
			{	src: SC6,	name: 'detail2' },
			{	src: SC7,	name: 'search' },
			{	src: SCConcept,	name: 'concept' },
		],
	},
	{
		id: 2,
		name: '코어독학재수학원',
		page: 'core',
		year: '2017',
		shortContent: '싱글페이지 학원사이트',
		spec: 'HTML, CSS, JavaScript, jQuery, PHP, WordPress',
		content: '싱글페이지 학원사이트',
		thumb: coreAcademyImg,
		headerImage: CoreHeader.src,
		footerImage: CoreFooter.src,
		images: [
			{	src: Core1,	name: 'main' },
			{	src: Core2,	name: 'map' },
			{	src: Core3,	name: 'modal' },
			{	src: Core4,	name: 'detail1' },
			{	src: Core5,	name: 'detail2' },
			{	src: Core6,	name: 'accordion and questions' },
			{	src: Core7,	name: 'teachers' },
			{	src: Core8,	name: 'mobile' },
			{	src: CoreConcept,	name: 'concept' },
		],
	},
	{
		id: 3,
		name: '와인앤리큐어',
		page: 'wine',
		year: '2017',
		shortContent: '해외 주류 수입사',
		spec: 'HTML, CSS, JavaScript, jQuery, PHP, WordPress, MariaDB',
		link: 'http://www.winenliquor.co.kr/',
		content: '해외 주류 수입사',
		thumb: wineImg,
		headerImage: WineHeader.src,
		footerImage: WineFooter.src,
		images: [
			{	src: Wine1,	name: 'main' },
			{	src: Wine2,	name: 'detail' }
		],
	},
	{
		id: 4,
		name: '제타플랜',
		page: 'zetaplan',
		year: '2017',
		shortContent: '기업 사이트',
		spec: 'HTML, CSS, JavaScript, jQuery, PHP, WordPress, MariaDB',
		link: 'http://www.vietzeta.com/',
		content: '기업 사이트',
		thumb: zetaplanImg,
		headerImage: ZetaHeader.src,
		footerImage: ZetaFooter.src,
		images: [
			{	src: Zeta1,	name: 'main' },
			{	src: Zeta2,	name: 'detail' }
		],
	},
	{
		id: 5,
		name: '마케티노',
		page: 'marketino',
		year: '2018',
		shortContent: '블로그 체험단 사이트',
		spec: 'HTML, CSS, JavaScript, jQuery, PHP, Apache, MariaDB',
		content: '블로그 체험단 사이트',
		thumb: marketinoImg,
		headerImage: MarketinoHeader.src,
		footerImage: MarketinoFooter.src,
		images: [
			{	src: Marketino1,	name: 'main1' },
			{	src: Marketino2,	name: 'main2' },
			{	src: Marketino3,	name: 'category' },
			{	src: Marketino4,	name: 'category hover' },
			{	src: Marketino5,	name: 'detail' },
			{	src: Marketino6,	name: 'subscription' },
			{	src: Marketino7,	name: 'my page' },
			{	src: Marketino8,	name: 'login' },
			{	src: Marketino9,	name: 'mobile' },
			{	src: Marketino10,	name: 'commercial' },
			{	src: MarketinoCard,	name: 'business card' },
			{	src: MarketinoConcept,	name: 'concept' },
		],
	},
	{
		id: 6,
		name: '365차한의원',
		page: 'chaClinic',
		year: '2018',
		shortContent: '한의원 사이트',
		spec: 'HTML, CSS, JavaScript, jQuery, PHP, WordPress, MariaDB',
		link: 'http://365chaclinic.co.kr/',
		content: '한의원 사이트',
		thumb: chaClinicImg,
		headerImage: chaClinicHeader.src,
		footerImage: chaClinicFooter.src,
		images: [
			{	src: chaClinic1,	name: 'main' },
			{	src: chaClinic2,	name: 'blog' },
			{	src: chaClinic3,	name: 'questions' },
			{	src: chaClinic4,	name: 'detail' },
			{	src: chaClinic5,	name: 'information' },
			{	src: chaClinic6,	name: 'map' },
			{	src: chaClinic7,	name: 'mobile' },
			{	src: chaClinicConcept,	name: 'concept' },
		],
	},
];


export default portfolios;