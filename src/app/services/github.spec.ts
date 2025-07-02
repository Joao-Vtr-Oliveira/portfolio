import { TestBed } from '@angular/core/testing';
import { Github } from './github';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

describe('Github Service', () => {
	let service: Github;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [Github],
		});
		service = TestBed.inject(Github);
		httpMock = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have fetchRepo and fetchCommits methods', () => {
		expect(typeof service.fetchRepo).toBe('function');
		expect(typeof service.fetchCommits).toBe('function');
	});
});
