import { Component, Input, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Icon } from '../shared/icon/icon';
import { LocaleService, PortfolioLocale } from '../services/locale.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [MatToolbarModule, MatIconModule, MatButtonModule, Icon],
	templateUrl: './header.html',
	styleUrl: './header.css',
})
export class Header {
	@Input() drawer!: MatSidenav;
	private router = inject(Router);
	readonly i18n = inject(LocaleService);

	goTo(route: string) {
		window.location.href = route;
	}

	scrollTo(targetId: string) {
		const onHome = ['/pt-BR', '/en'].includes(window.location.pathname);
		if (onHome) {
			const target = document.getElementById(targetId);
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		} else {
			// Redireciona para home com hash
			this.router.navigate([`/${this.i18n.locale()}`], { fragment: targetId });
		}
	}

	switchLocale(locale: PortfolioLocale): void {
		this.i18n.switch(locale, this.router);
	}
}
