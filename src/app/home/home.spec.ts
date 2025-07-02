import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Home', () => {
	let component: Home;
	let fixture: ComponentFixture<Home>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Home, RouterTestingModule, HttpClientTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(Home);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render all main sections', () => {
		const native = fixture.nativeElement;
		expect(native.querySelector('app-introduction')).toBeTruthy();
		expect(native.querySelector('app-about-me')).toBeTruthy();
		expect(native.querySelector('app-experience')).toBeTruthy();
		expect(native.querySelector('app-projects')).toBeTruthy();
		expect(native.querySelector('app-tech-stack')).toBeTruthy();
		expect(native.querySelector('app-contact-component')).toBeTruthy();
	});

	it('should render main section', () => {
		const section = fixture.nativeElement.querySelector('section');
		expect(section).toBeTruthy();
	});
});
