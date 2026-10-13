import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';
import { Reveal, Spotlight } from '../../shared/motion/motion';

@Component({
	selector: 'app-tech-stack',
	imports: [Reveal, Spotlight],
	templateUrl: './tech-stack.html',
})
export class TechStackComponent {
	readonly i18n = inject(LocaleService);
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
		{ name: 'C#', icon: 'cs' },
		{ name: '.NET', icon: 'dotnet' },
		{ name: 'MongoDB', icon: 'mongodb' },
		{ name: 'MySQL', icon: 'mysql' },
		{ name: 'PostgreSQL', icon: 'postgres' },
		{ name: 'Supabase', icon: 'supabase' },
		{ name: 'Sequelize', icon: 'sequelize' },
		{ name: 'Prisma', icon: 'prisma' },
	];

	toolsIcons = [
		{ name: 'Git', icon: 'git' },
		{ name: 'GitHub', icon: 'github' },
		{ name: 'Postman', icon: 'postman' },
		{ name: 'Docker', icon: 'docker' },
		{ name: 'Jest', icon: 'jest' },
		{ name: 'Vitest', icon: 'vitest' },
		{ name: 'GitHub Actions', icon: 'githubactions' },
		{ name: 'Cloudflare', icon: 'cloudflare' },
		{ name: 'Vercel', icon: 'vercel' },
		{ name: 'Azure', icon: 'azure' },
		{ name: 'Linux', icon: 'linux' },
	];

	readonly groups = [
		{ code: 'FE', title: 'Front-end', icons: this.frontendIcons },
		{ code: 'BE', title: 'Back-end', icons: this.backendIcons },
		{ code: 'OPS', title: 'stack.tools', icons: this.toolsIcons },
	];

	iconUrl(icon: string): string {
		return 'https://skillicons.dev/icons?i=' + icon;
	}
}
