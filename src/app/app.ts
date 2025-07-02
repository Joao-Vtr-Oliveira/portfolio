import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { Header } from './header/header';
import { Icon } from './shared/icon/icon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MatSidenavModule, Header, Icon],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App implements OnInit {
	@ViewChild('drawer') drawer!: MatSidenav;

	goTo(route: string) {
		window.location.href = route;
	}

	scrollTo(targetId: string) {
		const target = document.getElementById(targetId);
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
		if (this.drawer && this.drawer.opened) {
			this.drawer.close();
		}
	}

	constructor(private meta: Meta, private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('Portfólio João Vitor');

		const description =
			'Confira meus projetos, experiências e tecnologias que uso.';
		const imageUrl = 'https://portfolio-joao-v.vercel.app/images/home.png';
		const url = window.location.href;

		this.meta.updateTag({ name: 'description', content: description });

		this.meta.updateTag({
			property: 'og:title',
			content: 'Portfólio do João Vitor',
		});
		this.meta.updateTag({ property: 'og:description', content: description });
		this.meta.updateTag({ property: 'og:image', content: imageUrl });
		this.meta.updateTag({ property: 'og:url', content: url });
		this.meta.updateTag({ property: 'og:type', content: 'website' });
		this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });

		this.meta.updateTag({
			name: 'twitter:title',
			content: 'Portfólio do João Vitor',
		});
		this.meta.updateTag({ name: 'twitter:description', content: description });
		this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
		this.meta.updateTag({
			name: 'twitter:card',
			content: 'summary_large_image',
		});
	}
}
