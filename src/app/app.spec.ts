import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('App', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [App, HttpClientTestingModule],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(App);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should render the header', () => {
		const fixture = TestBed.createComponent(App);
		fixture.detectChanges();
		const header = fixture.nativeElement.querySelector('app-header');
		expect(header).toBeTruthy();
	});
});
