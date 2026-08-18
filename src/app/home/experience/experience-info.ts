interface Experience {
	id: number;
	role: string;
	company: string;
	period: string;
	bio: string;
	tech: string;
	deployLink?: string;
}

export const experiences: Experience[] = [
	{
		id: 1,
		role: 'Desenvolvedor Fullstack',
		company: 'SHV Digital',
		period: 'Jul. 2025 - Ago. 2026',
		bio: `Atuei no desenvolvimento e manutenção de aplicações web utilizando principalmente Angular, C#/.NET, TypeScript, PostgreSQL, Docker, Git/GitHub e Azure.

Trabalhei na criação de APIs, testes automatizados, integrações, novas funcionalidades, correção de bugs e manutenção de código, além de deploys e análise de logs.`,
		tech: 'https://skillicons.dev/icons?i=angular,cs,dotnet,ts,postgres,docker,git,github,azure',
	},
	{
		id: 2,
		role: 'Desenvolvedor Web Freelancer',
		company: 'MeuBichin Ltda',
		period: 'Dez. 2023 - Mar. 2024',
		bio: `Desenvolvi a página do MeuBichin usando React, Next.js e TypeScript, garantindo um código eficiente.

Fui responsável por todas as etapas, desde a escolha das ferramentas até a implementação total. A interface foi estilizada com Tailwind CSS e Chakra UI, com rotas em Next.js para exibir informações detalhadas da loja.`,
		tech: 'https://skillicons.dev/icons?i=react,ts,tailwind,nextjs',
		deployLink: 'https://meu-bichin-site.vercel.app/',
	},
];
