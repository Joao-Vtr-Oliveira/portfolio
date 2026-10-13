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
			fixture.nativeElement.querySelectorAll('.project-card');
		expect(cards.length).toBe(component.projects().length);
	});
	it('should render correctaly every project', () => {
		const cards: HTMLElement[] =
			fixture.nativeElement.querySelectorAll('.project-card');

		cards.forEach((card) => {
			const name = card.querySelector('[data-testid="project-title"]');
			const item = component
				.projects()
				.find((item) => item.name === name!.textContent);
			expect(name!.textContent).toContain(item!.name);
		});
	});

	it('should present Atronos Forge as one platform rather than two helper cards', () => {
		const featuredCards = fixture.nativeElement.querySelectorAll(
			'.project-card-featured'
		);

		expect(featuredCards.length).toBe(0);
		expect(fixture.nativeElement.querySelectorAll('.forge-feature').length).toBe(1);
		expect(fixture.nativeElement.textContent).toContain('Atronos Forge');
		expect(fixture.nativeElement.querySelector('.forge-feature a')?.getAttribute('href'))
			.toBe('https://atronos-forge.com');
	});

	it('opens a deep dive with distinct products and verified public links', async () => {
		fixture.nativeElement.querySelector('.forge-button').click();
		await fixture.whenStable();
		fixture.detectChanges();
		const dialog = document.querySelector('mat-dialog-container');
		expect(dialog?.textContent).toContain('Dungeon Master');
		expect(dialog?.textContent).toContain('IndexedDB');
		expect(dialog?.querySelector('a[href="https://player.atronos-forge.com/"]'))
			.toBeTruthy();
		dialog?.querySelector<HTMLButtonElement>('.detail-close')?.click();
	});
});
