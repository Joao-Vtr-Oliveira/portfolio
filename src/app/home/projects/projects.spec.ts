import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Projects', () => {
	let component: Projects;
	let fixture: ComponentFixture<Projects>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Projects, HttpClientTestingModule, RouterTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(Projects);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should render section title', () => {
		const title: HTMLHeadingElement = fixture.nativeElement.querySelector(
			'[data-testid="heading2-projectsComponent"]'
		);
		expect(title.textContent).toContain('Meus Projetos');
	});
	it('should render the same number of projects array length', () => {
		const cards: HTMLElement[] =
			fixture.nativeElement.querySelectorAll('mat-card');
		expect(cards.length).toBe(component.projects().length);
	});
	it('should render correctaly every project', () => {
		const cards: HTMLElement[] =
			fixture.nativeElement.querySelectorAll('mat-card');

		cards.forEach((card) => {
			const name = card.querySelector('mat-card-title');
			const item = component
				.projects()
				.find((item) => item.name === name!.textContent);
			expect(name!.textContent).toContain(item!.name);
		});
	});
});
