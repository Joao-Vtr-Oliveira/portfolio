import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { provideHttpClient } from '@angular/common/http';

describe('Header', () => {
	let component: Header;
	let fixture: ComponentFixture<Header>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Header],
      providers: [provideHttpClient()]
		}).compileComponents();

		fixture = TestBed.createComponent(Header);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('span should have name', () => {
		const span: HTMLSpanElement = fixture.nativeElement.querySelector(
			'[data-testid="spanName-headerComponent"]'
		);
    expect(span.textContent).toContain('João Vitor de Oliveira');
	});
});
