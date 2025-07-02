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

	it('should render at least one experience card', () => {
		const cards = fixture.nativeElement.querySelectorAll('mat-card');
		expect(cards.length).toBeGreaterThan(0);
	});

	it('should render experience name and bio', () => {
		const cardTitle = fixture.nativeElement.querySelector('mat-card-title');
		const cardContent = fixture.nativeElement.querySelector(
			'mat-card-content pre'
		);
		expect(cardTitle.textContent).toContain('Meu Bichin');
		expect(cardContent.textContent).toContain(
			'Fiquei responsável pela criação da página web'
		);
	});

	it('should have a link to the deploy if deployLink exists', () => {
		const link = fixture.nativeElement.querySelector('a.customBtn');
		expect(link).toBeTruthy();
		expect(link.getAttribute('href')).toBe(
			'https://meu-bichin-site.vercel.app/'
		);
		expect(link.textContent).toContain('Page');
	});

	it('should render the tech stack image', () => {
		const img = fixture.nativeElement.querySelector('img[alt*="stack"]');
		expect(img).toBeTruthy();
		expect(img.getAttribute('src')).toContain('skillicons.dev');
	});
});
