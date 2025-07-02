import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Repo } from './repo';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Repo', () => {
	let component: Repo;
	let fixture: ComponentFixture<Repo>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Repo, RouterTestingModule, HttpClientTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(Repo);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have repo, loading, error, commits signals', () => {
		expect(component.repo).toBeDefined();
		expect(component.loading).toBeDefined();
		expect(component.error).toBeDefined();
		expect(component.commits).toBeDefined();
	});

	it('should have getCommitClass and getCommitIcon methods', () => {
		expect(typeof component.getCommitClass).toBe('function');
		expect(typeof component.getCommitIcon).toBe('function');
	});
});
