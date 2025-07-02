import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { provideHttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('Header', () => {
	let component: Header;
	let fixture: ComponentFixture<Header>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Header, RouterTestingModule],
			providers: [provideHttpClient()],
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
		expect(span.textContent).toContain('João Vitor De Oliveira');
	});

	it('should call scrollTo function', () => {
		const scrollSpy = jest.spyOn(component, 'scrollTo');
		const anchor: HTMLAnchorElement = fixture.nativeElement.querySelector(
			'[data-testid="anchorHome-headerComponent"]'
		);
		anchor.click();
		fixture.detectChanges();
		expect(scrollSpy).toHaveBeenCalledWith('home');
	});
});
