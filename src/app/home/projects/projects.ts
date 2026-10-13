import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { projects } from './projects-info';
import { MatIconModule } from '@angular/material/icon';
import { Icon } from '../../shared/icon/icon';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [MatButtonModule, MatCardModule, MatIconModule, MatDialogModule, Icon, RouterModule],
	templateUrl: './projects.html',
	styleUrl: './projects.css',
})
export class Projects {
	projects = signal(projects);
	private readonly dialog = inject(MatDialog);

	async openAtronosDetail(): Promise<void> {
		const { AtronosDetail } = await import('./atronos-detail');
		this.dialog.open(AtronosDetail, {
			width: 'min(1240px, calc(100vw - 24px))',
			maxWidth: 'none',
			maxHeight: 'min(90dvh, 1000px)',
			autoFocus: 'first-heading',
			restoreFocus: true,
			ariaLabelledBy: 'atronos-detail-title',
		});
	}
}
