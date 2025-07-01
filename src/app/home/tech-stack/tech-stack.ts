import { Component } from '@angular/core';

@Component({
	selector: 'app-tech-stack',
	templateUrl: './tech-stack.html',
})
export class TechStackComponent {
	frontendIcons =
		'https://skillicons.dev/icons?i=html,css,js,ts,angular,react,nextjs,vue,vuetify,tailwind,redux&perline=5';
	backendIcons =
		'https://skillicons.dev/icons?i=nodejs,express,mongodb,mysql,postgres,sequelize,prisma&perline=5';
	toolsIcons =
		'https://skillicons.dev/icons?i=git,github,postman,docker&perline=5';
}
