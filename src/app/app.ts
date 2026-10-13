import { Component, DOCUMENT, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocaleService } from './services/locale.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, Header],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App implements OnInit {
	router = inject(Router);
	meta = inject(Meta);
	title = inject(Title);
	locale = inject(LocaleService);
	document = inject(DOCUMENT);

	ngOnInit(): void {
		const description = this.locale.isEnglish()
			? 'Portfolio of João Vitor de Oliveira, a full-stack developer building web products and Atronos Forge.'
			: 'Portfólio de João Vitor de Oliveira, desenvolvedor full-stack e criador do Atronos Forge.';
		const locale = this.locale.locale();
		this.title.setTitle(locale === 'en' ? 'João Vitor — Full-stack developer' : 'João Vitor — Desenvolvedor Fullstack');
		const imageUrl = 'https://portfolio-joao-v.vercel.app/images/home.png';
		const url = `https://portfolio-joao-v.vercel.app/${locale}`;

		this.meta.updateTag({ name: 'description', content: description });

		this.meta.updateTag({
			property: 'og:title',
			content: this.title.getTitle(),
		});
		this.meta.updateTag({ property: 'og:description', content: description });
		this.meta.updateTag({ property: 'og:image', content: imageUrl });
		this.meta.updateTag({ property: 'og:url', content: url });
		this.meta.updateTag({ property: 'og:type', content: 'website' });
		this.meta.updateTag({ property: 'og:locale', content: locale === 'en' ? 'en_US' : 'pt_BR' });

		this.meta.updateTag({
			name: 'twitter:title',
			content: this.title.getTitle(),
		});
		this.meta.updateTag({ name: 'twitter:description', content: description });
		this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
		this.meta.updateTag({
			name: 'twitter:card',
			content: 'summary_large_image',
		});

		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event) => {
				this.locale.setFromUrl((event as NavigationEnd).urlAfterRedirects);
				this.ngOnInitMetadata();
				if (window.location.hash) {
					const id = window.location.hash.replace('#', '');
					setTimeout(() => {
						const el = document.getElementById(id);
						if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}, 200); // 200ms para garantir que o DOM já foi renderizado
				}
			});
	}

	private ngOnInitMetadata(): void {
		const locale = this.locale.locale();
		const description = this.locale.isEnglish()
			? 'Portfolio of João Vitor de Oliveira, a full-stack developer building web products and Atronos Forge.'
			: 'Portfólio de João Vitor de Oliveira, desenvolvedor full-stack e criador do Atronos Forge.';
		this.title.setTitle(locale === 'en' ? 'João Vitor — Full-stack developer' : 'João Vitor — Desenvolvedor Fullstack');
		this.document.documentElement.lang = locale;
		this.meta.updateTag({ name: 'description', content: description });
		this.meta.updateTag({ property: 'og:title', content: this.title.getTitle() });
		this.meta.updateTag({ property: 'og:description', content: description });
		this.meta.updateTag({ property: 'og:url', content: `https://portfolio-joao-v.vercel.app/${locale}` });
		this.meta.updateTag({ property: 'og:locale', content: locale === 'en' ? 'en_US' : 'pt_BR' });
		this.meta.updateTag({ name: 'twitter:title', content: this.title.getTitle() });
		this.meta.updateTag({ name: 'twitter:description', content: description });
		const canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? this.document.createElement('link');
		canonical.rel = 'canonical';
		canonical.href = `https://portfolio-joao-v.vercel.app/${locale}`;
		if (!canonical.parentNode) this.document.head.appendChild(canonical);
	}
}
