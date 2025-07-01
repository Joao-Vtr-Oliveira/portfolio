import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Icon } from './icon';
import { provideHttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

// Componente wrapper para passar o input antes do ngOnInit
@Component({
	selector: 'app-test-host',
	template: `<app-icon [name]="name"></app-icon>`,
	standalone: true,
	imports: [Icon],
})
class TestHostComponent {
	name = 'github';
}

describe('Icon', () => {
	let fixture: ComponentFixture<TestHostComponent>;
	let httpMock: HttpTestingController;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TestHostComponent, HttpClientTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(TestHostComponent);
		httpMock = TestBed.inject(HttpTestingController);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});

	it('should have icon', async () => {
		fixture.detectChanges(); // Inicializa o host
		fixture.detectChanges(); // Inicializa o filho (Icon)
		await fixture.whenStable(); // Aguarda o ciclo de mudanças

		const req = httpMock.expectOne('svgs/github.svg');
		req.flush('<svg></svg>');
		fixture.detectChanges();
		await fixture.whenStable(); // Aguarda o ciclo de mudanças
		expect(req.request.url).toBe('svgs/github.svg');
	});
});
