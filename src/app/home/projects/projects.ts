import { Component, computed, inject } from '@angular/core';
import { getProjects } from './projects-info';
import { Icon } from '../../shared/icon/icon';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LocaleService } from '../../services/locale.service';
import { Magnetic, Reveal, Spotlight } from '../../shared/motion/motion';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [MatDialogModule, Icon, RouterModule, Magnetic, Reveal, Spotlight],
	templateUrl: './projects.html',
	styleUrl: './projects.css',
})
export class Projects {
	private readonly dialog = inject(MatDialog);
	readonly i18n = inject(LocaleService);
	readonly projects = computed(() =>
		getProjects(this.i18n.locale()).map((project) => {
			const [summary, ...rest] = project.bio.split(/\n\s*\n/);
			const points = rest
				.join('\n')
				.split('\n')
				.map((line) => line.replace(/^-\s*/, '').trim())
				.filter(Boolean);
			return { ...project, summary, points, repoName: project.repoLink?.split('/').pop() };
		}),
	);

	readonly forgeProducts = [
		{ name: 'Hub', mark: '/images/atronos-forge/hub-mark.svg' },
		{ name: 'Player', mark: '/images/atronos-forge/player-mark.svg' },
		{ name: 'Dungeon Master', mark: '/images/atronos-forge/dm-mark.svg' },
	];

	async openAtronosDetail(): Promise<void> {
		const { AtronosDetail } = await import('./atronos-detail');
		this.dialog.open(AtronosDetail, {
			width: 'min(1240px, calc(100vw - 24px))',
			maxWidth: 'none',
			maxHeight: 'min(90dvh, 1000px)',
			autoFocus: 'first-heading',
			restoreFocus: true,
			ariaLabelledBy: 'atronos-detail-title',
			panelClass: 'forge-dialog',
			backdropClass: 'forge-backdrop',
		});
	}
}
