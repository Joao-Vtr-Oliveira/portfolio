import type { PortfolioLocale } from '../../services/locale.service';

interface Project {
	id: number;
	name: string;
	bio: string;
	tech: string;
	imgSrc: string;
	featured?: boolean;
	repoLink?: string;
	deployLink: string;
}

const PROJECTS: Record<PortfolioLocale, Project[]> = {
	'pt-BR': [
	{
		id: 1,
		name: 'Brasil API',
		bio: `Aplicação que consome a BrasilAPI para buscar dados como DDD, CEP e CNPJ.

- Desenvolvido com Angular Signals, rotas standalone e services.
- Interface construída com Angular Material e TailwindCSS.
- Testes automatizados com Jest cobrindo todos os componentes e serviços.`,
		deployLink: 'https://brasil-api-angular.vercel.app/',
		imgSrc: '/images/projects/brasil-API.png',
		repoLink: 'https://github.com/Joao-Vtr-Oliveira/Brasil-API-Angular',
		tech: 'https://skillicons.dev/icons?i=ts,angular,tailwind,jest',
	},
	{
		id: 2,
		name: 'Github API',
		bio: `Projeto simples para exibir perfis do GitHub com dados como nome, repositórios, seguidores e redes sociais.

- Utiliza Angular Signals, rotas e serviços para consumo da API.
- Todos os componentes foram testados com Jest.`,
		deployLink: 'https://github-api-angular-drab.vercel.app/',
		imgSrc: 'images/projects/github-API.png',
		repoLink: 'https://github.com/Joao-Vtr-Oliveira/github-api-angular',
		tech: 'https://skillicons.dev/icons?i=ts,angular,tailwind,jest',
	},
	{
		id: 3,
		name: 'League of Legends - Random Champion Selector (Front-end)',
		bio: `Aplicação para selecionar campeões aleatórios do LoL com base em filtros como rota, tipo de dano e estilo de jogo.

- Interface moderna com filtros interativos.
- Inclui listagem completa dos campeões, rota dinâmica para edição/remoção e criação de novos.
- Desenvolvido com React, Tailwind e Next.js.`,
		deployLink: '',
		imgSrc: 'images/projects/lol-RCS-front.png',
		repoLink:
			'https://github.com/Joao-Vtr-Oliveira/lol-random-champ-selector-frontend',
		tech: 'https://skillicons.dev/icons?i=react,ts,tailwind,nextjs,docker',
	},
	{
		id: 4,
		name: 'League of Legends - Random Champion Selector (Back-end)',
		bio: `API em Node.js com MongoDB para servir campeões do LoL baseados em filtros como rota, tipo de dano e alcance.

- Fornece endpoints para listagem, criação, edição e deleção de campeões.
- Integração com banco MongoDB e uso de Docker para containerização.`,
		deployLink: '',
		imgSrc: 'images/projects/lol-RCS-back.png',
		repoLink:
			'https://github.com/Joao-Vtr-Oliveira/lol-random-champ-selector-backend',
		tech: 'https://skillicons.dev/icons?i=nodejs,ts,mongodb,postman,docker',
	},
	{
		id: 5,
		name: 'Pomodoro',
		bio: `Aplicação baseada na técnica Pomodoro para gerenciar tempo de foco e descanso.

- Ciclos padrão de 25/5/15 minutos com controle para iniciar, pausar, pular ou resetar.
- Rádio Lo-Fi integrada e contador de ciclos.
- Configurações com presets salvos via localStorage.
- Visual moderno com animações e suporte a modo escuro.`,
		deployLink: 'https://pomodoro-three-ruddy.vercel.app/',
		imgSrc: 'images/projects/pomodoro.png',
		repoLink: 'https://github.com/Joao-Vtr-Oliveira/pomodoro',
		tech: 'https://skillicons.dev/icons?i=ts,angular,tailwind,jest',
	},
],
	en: [
		{ id: 1, name: 'Brasil API', bio: `An application that uses BrasilAPI to look up data such as area codes, postal codes, and company registration numbers.

- Built with Angular Signals, standalone routes, and services.
- Interface built with Angular Material and Tailwind CSS.
- Automated Jest tests covering all components and services.`, deployLink: 'https://brasil-api-angular.vercel.app/', imgSrc: '/images/projects/brasil-API.png', repoLink: 'https://github.com/Joao-Vtr-Oliveira/Brasil-API-Angular', tech: 'https://skillicons.dev/icons?i=ts,angular,tailwind,jest' },
		{ id: 2, name: 'GitHub API', bio: `A small project that displays GitHub profiles with names, repositories, followers, and social links.

- Uses Angular Signals, routes, and services to consume the API.
- All components are covered by Jest tests.`, deployLink: 'https://github-api-angular-drab.vercel.app/', imgSrc: 'images/projects/github-API.png', repoLink: 'https://github.com/Joao-Vtr-Oliveira/github-api-angular', tech: 'https://skillicons.dev/icons?i=ts,angular,tailwind,jest' },
		{ id: 3, name: 'League of Legends — Random Champion Selector (Front end)', bio: `An application that selects random League of Legends champions based on role, damage type, and playstyle filters.

- Modern interface with interactive filters.
- Includes full champion listing and dynamic routes for editing, removal, and creation.
- Built with React, Tailwind, and Next.js.`, deployLink: '', imgSrc: 'images/projects/lol-RCS-front.png', repoLink: 'https://github.com/Joao-Vtr-Oliveira/lol-random-champ-selector-frontend', tech: 'https://skillicons.dev/icons?i=react,ts,tailwind,nextjs,docker' },
		{ id: 4, name: 'League of Legends — Random Champion Selector (Back end)', bio: `A Node.js and MongoDB API that serves League of Legends champions based on role, damage type, and range filters.

- Provides endpoints to list, create, edit, and delete champions.
- MongoDB integration and Docker containerization.`, deployLink: '', imgSrc: 'images/projects/lol-RCS-back.png', repoLink: 'https://github.com/Joao-Vtr-Oliveira/lol-random-champ-selector-backend', tech: 'https://skillicons.dev/icons?i=nodejs,ts,mongodb,postman,docker' },
		{ id: 5, name: 'Pomodoro', bio: `An application based on the Pomodoro technique for managing focus and rest time.

- Standard 25/5/15-minute cycles with controls to start, pause, skip, and reset.
- Integrated Lo-Fi radio and cycle counter.
- Saved presets through localStorage.
- Modern interface with animations and dark-mode support.`, deployLink: 'https://pomodoro-three-ruddy.vercel.app/', imgSrc: 'images/projects/pomodoro.png', repoLink: 'https://github.com/Joao-Vtr-Oliveira/pomodoro', tech: 'https://skillicons.dev/icons?i=ts,angular,tailwind,jest' },
	],
};

export const getProjects = (locale: PortfolioLocale): Project[] => PROJECTS[locale];

// Backwards-compatible Portuguese source used by the repository detail route.
export const projects = getProjects('pt-BR');
