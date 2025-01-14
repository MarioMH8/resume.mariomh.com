const resume = {
	$schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.2.1/schema.json',
	awards: [
		{
			awarder: 'Techcrunch',
			date: '2014-11-01',
			summary: 'There is no spoon.',
			title: 'Digital Compression Pioneer Award',
		},
	],
	basics: {
		email: 'hola@mariomh.com',
		image: 'https://mariomh.com/me.png',
		label: 'Solution Architect',
		location: {
			address: 'Calle Ponferrada, 7',
			city: 'Madrid',
			countryCode: 'ES',
			postalCode: '28029',
			region: 'España',
		},
		name: 'Mario Menéndez Hidalgo',
		profiles: [
			{
				network: 'X (Twitter)',
				url: 'https://x.com/MarioMH8',
				username: 'MarioMH8',
			},
			{
				network: 'GitHub',
				url: 'https://github.com/MarioMH8',
				username: 'MarioMH8',
			},
			{
				network: 'LinkedIn',
				url: 'https://linkedin.com/in/mhidalgomario/',
				username: 'mhidalgomario',
			},
		],
		shortName: 'MarioMH',
		summary:
			'+10 años de experiencia como Desarrollador Web. Vivo en Madrid, España. He trabajado acelerar el desarrollo de start-ups hasta liderar equipos de empresas multinacionales.',
		summaryShort:
			'+10 años de experiencia como desarrollador Web en Madrid. He impulsado start-ups y liderado equipos en multinacionales, aportando soluciones ágiles y efectivas.',
		url: 'https://mariomh.com',
	},
	certificates: [
		{
			date: '2023-05-01',
			issuer: 'Online University',
			name: 'Full Stack Web Development',
			url: 'https://onlineuniversity.com/certificates/fullstack',
		},
	],
	education: [
		{
			area: 'FP Dual',
			endDate: '2015-06-31',
			institution: 'IES Clara del Rey',
			score: '9.29',
			startDate: '2013-09-01',
			studyType: 'Desarrollo de Aplicaciones Multiplataforma',
			url: 'https://iesclaradelrey.es/',
		},
		{
			area: 'Information Technology',
			courses: ['CS101 - Introduction to Computer Science', 'CS102 - Data Structures'],
			endDate: '2019-12-01',
			institution: 'City College',
			startDate: '2017-01-01',
			studyType: 'Associate Degree',
		},
	],
	interests: [
		{
			keywords: ['Senderismo', 'Escalada', 'Barranquismo'],
			name: 'Naturaleza',
		},
		{
			keywords: ['Naturaleza', 'Espectáculos', 'Danza'],
			name: 'Fotografía',
		},
		{
			keywords: ['Magic The Gathering', 'Juegos de mesa', 'Videojuegos'],
			name: 'Juegos',
		},
	],
	languages: [
		{
			fluency: 'Nativo',
			language: 'Castellano',
		},
		{
			fluency: 'Avanzado',
			language: 'Inglés',
		},
	],
	meta: {
		canonical: 'https://cv.mariomh.com/cv.json',
		lastModified: '2025-01-13T12:34:54',
		version: '0.0.0',
	},
	projects: [
		{
			description: 'A personal portfolio website to showcase my projects and skills.',
			github: 'https://github.com',
			highlights: ['Built with React and Tailwind CSS', 'Includes a blog and contact form'],
			isActive: false,
			name: 'Personal Portfolio',
			url: 'https://johndoe.dev',
		},
		{
			description: 'A web application that provides weather information for any location.',
			highlights: ['Built with JavaScript and OpenWeatherMap API', 'Responsive design'],
			isActive: true,
			name: 'Weather App',
			url: 'https://weatherapp.com',
		},
		{
			description: 'A simple task management app to keep track of daily tasks.',
			github: 'https://github.com',
			highlights: ['Built with Node.js and MongoDB', 'User authentication and CRUD operations'],
			isActive: true,
			name: 'Task Manager',
			url: 'https://taskmanager.com',
		},
		{
			description: 'An online store built with Next.js and Stripe for payment processing.',
			highlights: ['Product management and shopping cart functionality', 'Secure payment integration'],
			isActive: false,
			name: 'E-commerce Site',
			url: 'https://ecommerce.com',
		},
	],
	publications: [
		{
			name: 'Video compression for 3d media',
			publisher: 'Hooli',
			releaseDate: '2014-10-01',
			summary: 'Innovative middle-out compression algorithm that changes the way we store data.',
			url: 'http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)',
		},
		{
			name: 'Video compression for 3d media',
			summary: 'Innovative middle-out compression algorithm that changes the way we store data.',
			url: 'http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)',
		},
		{
			name: 'Video compression for 3d media',
			publisher: 'Hooli',
			summary: 'Innovative middle-out compression algorithm that changes the way we store data.',
			url: 'http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)',
		},
	],
	references: [
		{
			name: 'Erlich Bachman',
			reference:
				'It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.',
		},
		{
			name: 'Erlich Bachman',
			reference:
				'It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.',
		},
	],
	skills: [
		{
			keywords: ['Design', 'UI'],
			level: 'Expert',
			name: 'Figma',
		},
		{
			keywords: ['Version Control', 'Collaboration', 'Source Code'],
			level: 'Intermediate',
			name: 'Gitlab',
		},
		{
			keywords: ['Web Development', 'Frontend'],
			level: 'Intermediate',
			name: 'HTML',
		},
		{
			keywords: ['Web Development', 'Frontend', 'Responsive Design'],
			level: 'Intermediate',
			name: 'CSS',
		},
		{
			keywords: ['Web Development', 'Frontend', 'Backend', 'Fullstack'],
			level: 'Intermediate',
			name: 'JavaScript',
		},
		{
			keywords: ['Web Development', 'Frontend', 'CSS Framework', 'Responsive Design'],
			level: 'Intermediate',
			name: 'Tailwind',
		},
		{
			keywords: ['Web Development', 'Frontend', 'Backend', 'JavaScript Superset'],
			level: 'Intermediate',
			name: 'TypeScript',
		},
		{
			keywords: ['Web Development', 'Backend', 'JavaScript', 'Server'],
			level: 'Intermediate',
			name: 'Node',
		},
		{
			keywords: ['Databases', 'SQL', 'Data Storage', 'Backend'],
			level: 'Intermediate',
			name: 'MySQL',
		},
		{
			keywords: ['Version Control', 'Collaboration', 'Source Code'],
			level: 'Intermediate',
			name: 'Git',
		},
		{
			keywords: ['Version Control', 'Collaboration', 'Source Code', 'Git'],
			level: 'Intermediate',
			name: 'GitHub',
		},
		{
			keywords: ['Web Development', 'Frontend', 'React Framework', 'SSR', 'Static Generation'],
			level: 'Beginner',
			name: 'Next.js',
		},
		{
			keywords: ['Web Development', 'Frontend', 'JavaScript Library', 'UI'],
			level: 'Intermediate',
			name: 'React',
		},
	],
	work: [
		{
			achievements: [
				'Developing and maintaining web applications using JavaScript, HTML, and CSS. Collaborating with the team to implement new features and fix bugs.',
			],
			highlights: ['Improved website performance by optimizing code'],
			location: 'Auckland, New Zealand',
			location_type: 'On site',
			name: 'Tech Startup',
			position: 'Junior Web Developer',
			responsibilities: [
				'Collaborated with senior developers to design and implement web applications using modern JavaScript frameworks.',
				'Assisted in debugging and optimizing front-end code to ensure smooth user experiences.',
				'Participated in code reviews and contributed to improving coding standards within the team.',
			],
			skills: ['React', 'Tailwind', 'GitHub'],
			startDate: '2024-01-01',
			summary:
				'Developing and maintaining web applications using JavaScript, HTML, and CSS. Collaborating with the team to implement new features and fix bugs.',
			url: 'https://techstartup.com',
		},
		{
			achievements: [
				'Successfully implemented a feature that enhanced user authentication, improving security measures.',
			],
			endDate: '2023-06-01',
			highlights: [
				'Contributed to a major project that streamlined internal workflows, improving efficiency by 30%',
			],
			location: 'Wellington, New Zealand',
			location_type: 'Hybrid',
			name: 'Innovative Solutions',
			position: 'Junior Software Developer',
			responsibilities: [
				'Developed and maintained backend services using Python and Django.',
				'Worked closely with front-end developers to integrate user-facing elements with server-side logic.',
				'Participated in daily stand-ups and bi-weekly sprint planning meetings to ensure alignment with project goals.',
			],
			skills: ['Python', 'Django', 'SQL', 'Git'],
			startDate: '2022-06-01',
			summary:
				'Assisting in the development and maintenance of software applications using Python and Django. Collaborating with cross-functional teams to ensure quality and timely delivery of software solutions.',
			url: 'https://innovativesolutions.com',
		},
		{
			endDate: '2015-03-01',
			highlights: ['Completed several client projects successfully'],
			location: 'Madrid, España',
			location_type: 'Presencial',
			name: 'Avanade',
			position: 'Application Developer',
			skills: ['.NET', 'Microsoft Dynamics 365'],
			startDate: '2014-04-01',
			summary:
				'Assisted in developing client websites and applications. Gained hands-on experience with front-end and back-end technologies.',
			url: 'https://www.avanade.com',
		},
	],
};

export default resume;
