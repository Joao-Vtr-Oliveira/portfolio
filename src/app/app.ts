import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { Header } from './header/header';
import { Icon } from "./shared/icon/icon";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MatSidenavModule, Header, Icon],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
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
}
