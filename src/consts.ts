export const SITE_TITLE = 'Miyamoto Ichihiro';
export const SITE_DESCRIPTION =
	'AI Developer & ML Engineer — building intelligent applications, LLM systems, and full-stack AI products.';

export const PERSON = {
	name: 'Miyamoto Ichihiro',
	title: 'AI Developer & ML Engineer',
	tagline:
		'Designing and shipping AI-powered products — from LLM agents and enterprise automation to full-stack intelligent applications.',
	email: 'terryq206@gmail.com',
	phone: '+81 70-9358-3639',
	location: 'Toyosu, Kōtō-ku, Tokyo 135-0061, Japan',
	avatar: '/images/miyamoto-logo.png',
};

export const LOGO = '/images/miyamoto-logo.png';

export const AVATARS = {
	profile: '/images/avatars/avatar-driving.png',
	driving: '/images/avatars/avatar-driving.png',
	brand: '/images/avatars/avatar-icon.png',
	est: '/images/avatars/avatar-est.png',
};

export const SOCIAL = {
	github: 'https://github.com/aomatsun',
	linkedin: 'https://linkedin.com',
};

export const GITHUB = {
	url: 'https://github.com/aomatsun',
	username: 'aomatsun',
	handle: '@aomatsun',
	bio: 'Full stack developer building intelligent applications and production AI systems.',
};

export const ABOUT = [
	'I am an AI developer with 6+ years across machine learning applications, software engineering, product management, and startup operations. I specialize in turning AI research into production-ready systems that solve real business problems.',
	'My work spans LLM-powered agents, enterprise automation, SaaS platforms, and full-stack development. I enjoy architecting intelligent systems, leading cross-functional teams, and continuously pushing the boundaries of what AI can do in production.',
];

export const IMAGES = {
	hero: '/images/portfolio/hero-bentley.png',
	about: '/images/portfolio/office-cafe.png',
	gallery: [
		{
			src: '/images/portfolio/hero-beach.png',
			alt: 'Miyamoto Ichihiro at the beach',
			caption: 'Tokyo Bay',
		},
		{
			src: '/images/portfolio/office-cafe.png',
			alt: 'Working with city skyline view',
			caption: 'Late-night product sessions',
		},
		{
			src: '/images/portfolio/mirror-selfie.png',
			alt: 'Home office workspace',
			caption: 'Minimal workspace',
		},
		{
			src: '/images/portfolio/formal-suit.png',
			alt: 'Professional portrait',
			caption: 'Professional',
		},
		{
			src: '/images/portfolio/driving.png',
			alt: 'Coastal drive at golden hour',
			caption: 'Golden hour',
		},
	],
};

export const SKILL_GROUPS = [
	{
		label: 'AI & Machine Learning',
		icon: 'brain',
		highlight: true,
		skills: [
			'OpenAI APIs',
			'LLM Applications',
			'AI Agents',
			'RAG Pipelines',
			'Prompt Engineering',
			'Recommendation Systems',
			'Data Visualization',
		],
	},
	{
		label: 'Full Stack Development',
		icon: 'code',
		skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'FastAPI', 'ASP.NET Core', 'C#'],
	},
	{
		label: 'Infrastructure & Data',
		icon: 'database',
		skills: ['PostgreSQL', 'SQL Server', 'Redis', 'Docker', 'Kubernetes', 'Analytics Platforms'],
	},
	{
		label: 'Languages',
		icon: 'globe',
		skills: ['English', 'Japanese'],
	},
];

export const GITHUB_REPOS = [
	{
		name: 'pmine-ui-develop',
		language: 'TypeScript',
		description: 'Modern UI development with TypeScript and component-driven architecture.',
		url: 'https://github.com/aomatsun/pmine-ui-develop',
	},
	{
		name: 'mychart',
		language: 'JavaScript',
		description: 'React charting project using ApexCharts, Chart.js, and CanvasJS.',
		url: 'https://github.com/aomatsun/mychart',
	},
	{
		name: '3dslicer',
		language: 'C++',
		description: '3D medical imaging and visualization toolkit integration.',
		url: 'https://github.com/aomatsun/3dslicer',
	},
	{
		name: 'vdc-react-master',
		language: 'CSS',
		description: 'React-based visual data components and interface patterns.',
		url: 'https://github.com/aomatsun/vdc-react-master',
	},
];

export const EXPERIENCE = [
	{
		role: 'Head of Product & Technology',
		company: 'Japan EST Group System',
		period: '2022 — 2023',
		avatar: AVATARS.est,
		icon: 'building',
		highlights: [
			'Leading product strategy and technical execution',
			'Managing engineering, design, and product teams',
			'Building AI-powered SaaS solutions for enterprise customers',
			'Driving product-market fit and growth initiatives',
			'Working closely with founders, investors, and strategic partners',
		],
	},
	{
		role: 'Senior Product Manager',
		company: 'Technology Company Startup of Japan',
		period: '2020 — 2023',
		avatar: AVATARS.driving,
		icon: 'rocket',
		highlights: [
			'Managed product development from concept to launch',
			'Coordinated engineering and design teams',
			'Conducted user research and product analytics',
			'Improved customer retention and engagement metrics',
			'Defined product roadmaps and business priorities',
		],
	},
];

export const EDUCATION = {
	degree: 'Bachelor of Engineering (B.Eng.), Computer Science',
	school: 'Kyoto University',
	period: '2017 — 2021',
	icon: 'graduation',
	avatar: '/images/portfolio/mirror-selfie.png',
};

export const ACCOMPLISHMENTS = [
	{ text: 'Built AI-powered applications for consumer and enterprise markets', icon: 'brain' },
	{ text: 'Launched multiple SaaS products serving thousands of users', icon: 'rocket' },
	{ text: 'Defined enterprise AI roadmaps including workflow automation and intelligent assistants', icon: 'sparkles' },
	{ text: 'Led cross-functional teams across AI, product, engineering, and operations', icon: 'users' },
];

export const FEATURED_PROJECT = {
	title: 'EST Group Enterprise Management Platform',
	role: 'Technical Lead / Team Lead',
	period: '2022 — Present',
	avatar: AVATARS.est,
	icon: 'layers',
	summary:
		'A large-scale enterprise digital transformation initiative that replaced fragmented legacy systems with a unified, production-grade business management platform. As Technical Lead, I architected the system, led the engineering team, and defined the long-term technical strategy — including the AI roadmap launched in 2025.',
	overview:
		'The EST Group Enterprise Management Platform was conceived in 2022 to address a critical operational challenge: multiple disconnected legacy systems that were costly to maintain, difficult to scale, and inefficient for daily business operations. Rather than patching individual applications, we designed a unified enterprise ecosystem — a collection of thirteen integrated systems sharing authentication, master data, business workflows, and reusable components.',
	challenge: [
		'Fragmented legacy systems with no shared data layer',
		'High maintenance costs and technical debt',
		'Inefficient manual business processes',
		'No centralized visibility into operations',
	],
	solution: [
		'Unified enterprise platform with 13 integrated modules',
		'Shared authentication, authorization, and master data',
		'Reusable components and standardized workflows',
		'Scalable architecture built for long-term growth',
	],
	impact: [
		'Unified all enterprise operations into a single platform',
		'Reduced manual business processes across departments',
		'Standardized workflows enterprise-wide',
		'Improved cross-team collaboration and visibility',
		'Simplified scheduling and operational management',
		'Established a scalable architecture for future growth',
	],
	techStack: [
		'ASP.NET Core (.NET 6)',
		'C# & Entity Framework Core',
		'SQL Server',
		'Bootstrap, jQuery & DataTables',
		'RBAC & Google OAuth',
		'Shared Libraries & Logging',
	],
	stats: [
		{ value: '13', label: 'Integrated Modules', icon: 'layers' },
		{ value: '4', label: 'Team Members', icon: 'users' },
		{ value: '3+', label: 'Years in Production', icon: 'chart' },
	],
	modules: [
		'Enterprise Dashboard',
		'Scheduling & Calendar',
		'Shift Management',
		'Attendance Management',
		'Deposit & Payment Management',
		'Reservation & Facility Management',
		'File Management',
		'Approval Workflow & Groupware',
	],
	leadership: [
		'Software architecture design and oversight',
		'Code reviews and quality standards',
		'Backlog coordination with stakeholders',
		'Release planning and deployment',
		'AI roadmap definition (2025+)',
	],
	aiRoadmap: [
		{
			title: 'AI-Powered Workflow Automation',
			description: 'Automate repetitive operational tasks and approval chains.',
			icon: 'sparkles',
		},
		{
			title: 'Automated Document Processing',
			description: 'AI extraction and classification of invoices, contracts, and records.',
			icon: 'layers',
		},
		{
			title: 'Intelligent Business Assistants',
			description: 'Context-aware assistants for scheduling, reporting, and queries.',
			icon: 'brain',
		},
		{
			title: 'Predictive Analytics & Mobile Apps',
			description: 'Business intelligence dashboards and mobile-first access for field teams.',
			icon: 'chart',
		},
	],
};
