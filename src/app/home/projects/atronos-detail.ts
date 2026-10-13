import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-atronos-detail',
	standalone: true,
	imports: [MatDialogModule],
	templateUrl: './atronos-detail.html',
	styleUrl: './atronos-detail.css',
})
export class AtronosDetail {
	readonly dialogRef = inject(MatDialogRef<AtronosDetail>);
}
