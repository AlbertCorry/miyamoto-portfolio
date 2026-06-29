export const SITE_TITLE = 'Miyamoto Ichihiro';
export const SITE_DESCRIPTION =
	'Software Engineer & AI Architect — building enterprise platforms, SaaS products, and AI-powered solutions.';

export const PERSON = {
	name: 'Miyamoto Ichihiro',
	title: 'Software Engineer, AI Architect',
	tagline:
		'Solving complex problems, creating scalable systems, and building meaningful products with talented teams.',
	email: 'terryq206@gmail.com',
	phone: '+81 70-9358-3639',
	location: 'Toyosu, Kōtō-ku, Tokyo 135-0061, Japan',
};

export const SOCIAL = {
	github: 'https://github.com',
	linkedin: 'https://linkedin.com',
};

export const ABOUT = [
	'Over the past 6 years, I have worked across software development, product management, and startup operations. My experience ranges from building enterprise software and SaaS platforms to leading product teams and launching new digital products.',
	'I enjoy solving complex problems, creating scalable systems, and working with talented people who are passionate about building meaningful products. I believe that successful startups are built by teams that genuinely care about their users and continuously improve both their product and themselves.',
];

export const IMAGES = {
	hero: '/images/portfolio/formal-suit.png',
	about: '/images/portfolio/winter-portrait.png',
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
			src: '/images/portfolio/winter-portrait.png',
			alt: 'Winter portrait',
			caption: 'Winter in Japan',
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
		label: 'Frameworks & Technologies',
		skills: [
			'React',
			'Next.js',
			'Node.js',
			'FastAPI',
			'ASP.NET Core',
			'C#',
			'PostgreSQL',
			'SQL Server',
			'Redis',
			'Docker',
			'Kubernetes',
		],
	},
	{
		label: 'AI & Data',
		skills: [
			'OpenAI APIs',
			'LLM Applications',
			'AI Agents',
			'Recommendation Systems',
			'Analytics Platforms',
			'Data Visualization',
		],
	},
	{
		label: 'Languages',
		skills: ['English', 'Japanese'],
	},
];

export const EXPERIENCE = [
	{
		role: 'Head of Product & Technology',
		company: 'Japan EST Group System',
		period: '2022 — 2023',
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
};

export const ACCOMPLISHMENTS = [
	'Launched multiple SaaS products serving thousands of users',
	'Built and scaled engineering teams from early-stage startup environments',
	'Successfully led cross-functional teams across product, engineering, and operations',
	'Developed AI-powered applications for consumer and enterprise markets',
];

export const FEATURED_PROJECT = {
	title: 'EST Group Enterprise Management Platform',
	role: 'Technical Lead / Team Lead',
	period: '2022 — Present',
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
		{ value: '13', label: 'Integrated Modules' },
		{ value: '4', label: 'Team Members' },
		{ value: '3+', label: 'Years in Production' },
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
		},
		{
			title: 'Automated Document Processing',
			description: 'AI extraction and classification of invoices, contracts, and records.',
		},
		{
			title: 'Intelligent Business Assistants',
			description: 'Context-aware assistants for scheduling, reporting, and queries.',
		},
		{
			title: 'Predictive Analytics & Mobile Apps',
			description: 'Business intelligence dashboards and mobile-first access for field teams.',
		},
	],
};
