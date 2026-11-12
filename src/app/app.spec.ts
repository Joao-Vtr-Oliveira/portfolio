import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

describe('App', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [App, HttpClientTestingModule, RouterTestingModule],
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

	it('should initialize Portuguese metadata', () => {
		const fixture = TestBed.createComponent(App);
		fixture.detectChanges();
		const meta = TestBed.inject(Meta);
		expect(document.documentElement.lang).toBe('pt-BR');
		expect(TestBed.inject(Title).getTitle()).toBe('João Vitor de Oliveira — Desenvolvedor Fullstack');
		expect(meta.getTag('name="description"')?.content).toContain('Angular, TypeScript, Node.js e .NET');
		expect(meta.getTag('property="og:image"')?.content).toContain('j%C3%A3o.jpg');
		expect(document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe('https://portfolio-joao-v.vercel.app/pt-BR');
	});

	it('should keep metadata in sync when navigating between languages', () => {
		const events = new Subject<NavigationEnd>();
		const router = TestBed.inject(Router);
		jest.spyOn(router, 'events', 'get').mockReturnValue(events);
		const fixture = TestBed.createComponent(App);
		fixture.detectChanges();
		const meta = TestBed.inject(Meta);
		events.next(new NavigationEnd(1, '/en', '/en'));
		expect(document.documentElement.lang).toBe('en');
		expect(TestBed.inject(Title).getTitle()).toBe('João Vitor de Oliveira — Full-stack Developer');
		expect(meta.getTag('property="og:locale"')?.content).toBe('en_US');
		expect(meta.getTag('name="twitter:description"')?.content).toContain('Explore my projects');
		expect(document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe('https://portfolio-joao-v.vercel.app/en');
		events.next(new NavigationEnd(2, '/pt-BR', '/pt-BR'));
		expect(document.documentElement.lang).toBe('pt-BR');
		expect(meta.getTag('property="og:locale"')?.content).toBe('pt_BR');
	});
});
