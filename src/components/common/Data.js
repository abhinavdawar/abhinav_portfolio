import { FiZap } from 'react-icons/fi';
import { PiDevicesBold } from 'react-icons/pi';
import { GrStatusGood } from 'react-icons/gr';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import project1 from '../../assests/project1.png';
import project3 from '../../assests/project3.png';

export const aboutInfoA = [
	{
		name: 'BirthDate:',
		value: '03.03.1998',
	},
	{
		name: 'Address:',
		value: 'Sector 14, Gurugram, India',
	},
	{
		name: 'Email:',
		value: 'abhinav1998dawar@gmail.com',
	},
];
export const aboutInfoB = [
	{
		name: 'Study:',
		value: 'GGSIPU, New Delhi',
	},
	{
		name: 'Hobbies:',
		value: 'Reading and Listening Songs',
	},
	{
		name: 'Mobile:',
		value: '+91 9518045000',
	},
];

export const featuresArray = [
	{
		icon: <FiZap />,
		title: 'Fast',
		description:
			'Fast load times and lag free interaction, my highest priority.I give importance to the impact of design and develop accordingly.',
	},
	{
		icon: <PiDevicesBold />,
		title: 'Responsive',
		description:
			'Resposive web designes which will work smoothly on every screen be it small, medium or large.',
	},
	{
		icon: <GrStatusGood />,
		title: 'Easy',
		description:
			'Developed designs and UI is very easy to understand and you can navigate through all the features easily without any issue.',
	},
	{
		icon: <HiOutlineRocketLaunch />,
		title: 'Optimized',
		description:
			'optimized for different devices, browsers, data speed, search  engines, and users.',
	},
];

export const skillArrayA = [
	{
		label: 'Python',
		percentage: '90%',
	},
	{
		label: 'Django',
		percentage: '85%',
	},
	{
		label: 'SQL',
		percentage: '85%',
	},
	{
		label: 'Javascript',
		percentage: '80%',
	},
];
export const skillArrayB = [
	{
		label: 'Docker',
		percentage: '90%',
	},
	{
		label: 'Kubernetes',
		percentage: '90%',
	},
	{
		label: 'Google Cloud Platform(GCP)',
		percentage: '80%',
	},
	{
		label: 'Shell Scripting',
		percentage: '90%',
	},
];

export const educationArray = [
	{
		period: '2025',
		instituteName: 'UpGrad',
		education: 'UI/UX Design Bootcamp',
	},
	{
		period: '2019-2021',
		instituteName: 'NMIMS, Maharashtra',
		education: 'PGBDM in International Trade Management',
	},
	{
		period: '2012–2015',
		instituteName: 'NIIFT, Mohali',
		education: 'BSc. Fashion Technology',
	},
];

export const experienceArray = [
	{
		period: '2022-Present',
		company: 'Pasarpolis',
		designation: 'Senior Software Engineer',
	},
	{
		period: '2021-2022',
		company: 'To The New',
		designation: 'Software Engineer',
	}
];

export const projectsArray = [
	{
		id: '01',
		name: 'Prime File Advisors',
		description:
			'Designing and Developed a web app using React Streamlining Acquisition of all necessary financial documents, One stop solution for immigration agencies and Comprehensive Business Support.',
		link: 'https://primefileadvisors.com/',
		image: project1,
	},
	{
		id: '02',
		name: 'Web Crawler',
		description:
			'Developed a web crawler using Python and Scrapy to scrape data from multiple websites and store it in a database for further analysis.',
		link: 'https://webmagic.netlify.app/',
		image: project3,
	}
];
