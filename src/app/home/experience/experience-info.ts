interface Experience {
	id: number;
	name: string;
	bio: string;
	tech: string;
	imgSrc: string;
	deployLink: string;
}

export const experiences: Experience[] = [
	{
		id: 1,
		name: 'Meu Bichin',
		bio: `Fiquei responsável pela criação da página web da empresa MeuBichin CDRV.
Toda a seleção de ferramentas e implemetação total foi de responsabilidade minha.
A página serve para apresentação da empresa, mostrando suas principais marcas, carrousel com imagens da loja, FAQ.

E ainda de tornar o site mais responsivo possível, tendo um menu de navegação para telas pequenas, e um outro para telas maiores e computadores.`,
		deployLink: 'https://meu-bichin-site.vercel.app/',
		imgSrc: '/images/projects/meu-bichin.png',
		tech: 'https://skillicons.dev/icons?i=react,ts,tailwind,nextjs',
	},
];
