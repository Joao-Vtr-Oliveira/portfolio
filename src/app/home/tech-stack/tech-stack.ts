import { Component } from '@angular/core';

@Component({
	selector: 'app-tech-stack',
	templateUrl: './tech-stack.html',
})
export class TechStackComponent {
	frontendIcons = [
		{ name: 'HTML', icon: 'html' },
		{ name: 'CSS', icon: 'css' },
		{ name: 'JavaScript', icon: 'js' },
		{ name: 'TypeScript', icon: 'ts' },
		{ name: 'Angular', icon: 'angular' },
		{ name: 'React', icon: 'react' },
		{ name: 'Next.js', icon: 'nextjs' },
		{ name: 'Vue.js', icon: 'vue' },
		{ name: 'Vuetify', icon: 'vuetify' },
		{ name: 'TailwindCSS', icon: 'tailwind' },
		{ name: 'Redux', icon: 'redux' },
	];

	backendIcons = [
		{ name: 'Node.js', icon: 'nodejs' },
		{ name: 'Express', icon: 'express' },
		{ name: 'MongoDB', icon: 'mongodb' },
		{ name: 'MySQL', icon: 'mysql' },
		{ name: 'PostgreSQL', icon: 'postgres' },
		{ name: 'Sequelize', icon: 'sequelize' },
		{ name: 'Prisma', icon: 'prisma' },
	];

	toolsIcons = [
		{ name: 'Git', icon: 'git' },
		{ name: 'GitHub', icon: 'github' },
		{ name: 'Postman', icon: 'postman' },
		{ name: 'Docker', icon: 'docker' },
		{ name: 'Jest', icon: 'jest' },
	];
}
