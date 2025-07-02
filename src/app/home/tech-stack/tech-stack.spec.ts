import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechStackComponent } from './tech-stack';

describe('TechStackComponent', () => {
	let component: TechStackComponent;
	let fixture: ComponentFixture<TechStackComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TechStackComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TechStackComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render section title', () => {
		const title = fixture.nativeElement.querySelector('h2');
		expect(title.textContent).toContain('Tech Stack');
	});
});
