import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Experiences } from './experience';
import { By } from '@angular/platform-browser';

describe('Experiences', () => {
	let component: Experiences;
	let fixture: ComponentFixture<Experiences>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Experiences],
		}).compileComponents();

		fixture = TestBed.createComponent(Experiences);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render section title', () => {
		const title = fixture.nativeElement.querySelector('h2');
		expect(title.textContent).toContain('Experiência Profissional');
	});

	it('should render the same number of experience array length', () => {
		const cards = fixture.nativeElement.querySelectorAll('mat-card');
		expect(cards.length).toBe(component.experiences().length);
	});

	it('should render the current professional experience', () => {
		const cardTitle = fixture.nativeElement.querySelector('mat-card-title');
		const cardContent = fixture.nativeElement.querySelector(
			'mat-card-content p'
		);
		expect(cardTitle.textContent).toContain('Desenvolvedor Fullstack');
		expect(cardContent.textContent).toContain(
			'Atuei no desenvolvimento e manutenção de aplicações web'
		);
	});

	it('should render the company and period', () => {
		const subtitle = fixture.nativeElement.querySelector('mat-card-subtitle');
		expect(subtitle.textContent).toContain('SHV Digital');
		expect(subtitle.textContent).toContain('Jul. 2025 - Ago. 2026');
	});

	it('should render MeuBichin as a professional experience', () => {
		const titles = Array.from(
			fixture.nativeElement.querySelectorAll('mat-card-title')
		).map((title: Element) => title.textContent);
		const link = fixture.nativeElement.querySelector('a.customBtn');

		expect(titles).toContain('Desenvolvedor Web Freelancer');
		expect(link.getAttribute('href')).toBe(
			'https://meu-bichin-site.vercel.app/'
		);
	});

	it('should render the tech stack image', () => {
		const img = fixture.nativeElement.querySelector('img[alt*="stack"]');
		expect(img).toBeTruthy();
		expect(img.getAttribute('src')).toContain('skillicons.dev');
	});
});
