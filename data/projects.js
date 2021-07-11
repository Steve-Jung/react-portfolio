// project thumbnail images
import cityImg from '../public/images/project/city/city-small.jpg';
import lamborghiniImg from '../public/images/project/lamborghini/lamborghini-small.jpg';
import sorleinoImg from '../public/images/project/sorleino/sorleino-small.jpg';
import metroImg from '../public/images/project/metro/metro-small.jpg';
import modernImg from '../public/images/project/modern/modern-small.jpg';
import weatherImg from '../public/images/project/weather/weather-small.jpg';
import fifaImg from '../public/images/project/fifa/fifa-small.jpg';

// city
import cityHeader from '../public/images/project/city/header.jpg';
import cityFooter from '../public/images/project/city/footer.jpg';
import city from '../public/images/project/city/city.jpg';

// lamborghini
import lamborghiniHeader from '../public/images/project/lamborghini/header.jpg';
import lamborghiniFooter from '../public/images/project/lamborghini/footer.jpg';
import lamborghini from '../public/images/project/lamborghini/lamborghini.jpg';

// sorleino
import sorleinoHeader from '../public/images/project/sorleino/header.jpg';
import sorleinoFooter from '../public/images/project/sorleino/footer.jpg';
import sorleino from '../public/images/project/sorleino/sorleino.jpg';

// metro
import metroHeader from '../public/images/project/metro/header.jpg';
import metroFooter from '../public/images/project/metro/footer.jpg';
import metro from '../public/images/project/metro/metro.jpg';

// modern
import modernHeader from '../public/images/project/modern/header.jpg';
import modernFooter from '../public/images/project/modern/footer.jpg';
import modern from '../public/images/project/modern/modern.jpg';
import modernNav from '../public/images/project/modern/modern-nav.jpg';

// weather
import weatherHeader from '../public/images/project/weather/header.jpg';
import weatherFooter from '../public/images/project/weather/footer.jpg';
import weather1 from '../public/images/project/weather/weather1.jpg';
import weather2 from '../public/images/project/weather/weather2.jpg';

// fifa
import fifaHeader from '../public/images/project/fifa/header.jpg';
import fifaFooter from '../public/images/project/fifa/footer.jpg';
import fifa from '../public/images/project/fifa/fifa.jpg';


const projects = [
	{
		id: 1,
		name: 'City',
		page: 'city',
		year: '2015',
		shortContent: '패럴렉스 스크롤링',
		spec: 'HTML, CSS, JavaScript',
		content: '시티',
		thumb: cityImg,
		videoId: '0s8dL00mJ6g',
		headerImage: cityHeader.src,
		footerImage: cityFooter.src,
		images: [
			{	src: city,	name: 'city' },
		],
	},
	{
		id: 2,
		name: 'Lamborghini',
		page: 'lamborghini',
		year: '2015',
		shortContent: '웹 페이지 디자인 시안 및 코딩',
		spec: 'HTML, CSS, JavaScript, jQuery',
    content: '웹 페이지 디자인 시안 및 코딩',
		videoId: 'mIe0hj98HEY',
		thumb: lamborghiniImg,
		headerImage: lamborghiniHeader.src,
		footerImage: lamborghiniFooter.src,
		images: [
			{	src: lamborghini,	name: 'lamborghini' },
		],
	},
	{
		id: 3,
		name: 'Sorleino',
		page: 'sorleino',
		year: '2015',
		shortContent: '웹 페이지 디자인 시안',
		spec: 'Photoshop',
		content: '웹 페이지 디자인 시안',
		thumb: sorleinoImg,
		headerImage: sorleinoHeader.src,
		footerImage: sorleinoFooter.src,
		images: [
			{	src: sorleino,	name: 'sorleino' },
		],
	},
	{
		id: 4,
		name: 'Metro design',
		page: 'metro',
		year: '2016',
		shortContent: '웹 페이지 디자인 시안 및 코딩',
		spec: 'HTML, CSS, JavaScript',
		content: '웹 페이지 디자인 시안 및 코딩',
		thumb: metroImg,
		headerImage: metroHeader.src,
		footerImage: metroFooter.src,
		images: [
			{	src: metro,	name: 'metro' },
		],
	},
	{
		id: 5,
		name: 'Modern design',
		page: 'modern',
		year: '2016',
		shortContent: '웹 페이지 디자인 시안 및 코딩',
		spec: 'HTML, CSS, JavaScript',
		content: '웹 페이지 디자인 시안 및 코딩',
		videoId: 'sLyWoyXnZ90',
		thumb: modernImg,
		headerImage: modernHeader.src,
		footerImage: modernFooter.src,
		images: [
			{	src: modern,	name: 'modern' },
			{	src: modernNav,	name: 'modern navigation' },
		],
	},
	{
		id: 6,
		name: 'Weather and timer',
		page: 'weather',
		year: '2016',
		shortContent: '웹 페이지 디자인 및 코딩',
		spec: 'HTML, CSS, JavaScript',
		content: '웹 페이지 디자인 및 코딩',
		thumb: weatherImg,
		videoId: 'qbbSbed9ugs',
		headerImage: weatherHeader.src,
		footerImage: weatherFooter.src,
		images: [
			{	src: weather1,	name: 'weather1' },
			{	src: weather2,	name: 'weather2' },
		],
	},
	{
		id: 7,
		name: 'Fifa Keyboard Controller',
		page: 'fifa',
		year: '2019',
		shortContent: '피파 키보드 조작은 불편합니다. 그래서 C# 으로 키보드 후킹을 이용한 간단한 프로그램을 만들었습니다',
		spec: 'C#, WPF',
		link: 'https://cafe.naver.com/realfifaarena/705602',
		content: '피파 키보드 조작은 불편합니다. 그래서 C# 으로 키보드 후킹을 이용한 간단한 프로그램을 만들었습니다',
		thumb: fifaImg,
		headerImage: fifaHeader.src,
		footerImage: fifaFooter.src,
		images: [
			{	src: fifa,	name: 'fifa' },
		],
	},
];

export default projects;