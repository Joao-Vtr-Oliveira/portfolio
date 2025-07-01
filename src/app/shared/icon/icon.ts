import { Component, effect, input, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-icon',
	standalone: true,
	templateUrl: './icon.html',
})
export class Icon implements OnInit {
	name = input.required<string>();
	class = input<string>('');

	private http = inject(HttpClient);
	private sanitizer = inject(DomSanitizer);

	svgContent: SafeHtml | null = null;

	ngOnInit() {
		const iconName = this.name();
		this.http
			.get(`svgs/${iconName}.svg`, { responseType: 'text' })
			.subscribe((svg) => {
				const withClass = svg.replace('<svg', `<svg class="${this.class()}"`);
				this.svgContent = this.sanitizer.bypassSecurityTrustHtml(withClass);
			});
	}
}
