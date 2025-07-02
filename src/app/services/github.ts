import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { RepoInterface } from './repo.model';

@Injectable({
	providedIn: 'root',
})
export class Github {
	private httpClient = inject(HttpClient);
	private repo = signal<RepoInterface | undefined>(undefined);
	private loading = signal(false);
	private error = signal<string | null>(null);
	private commits = signal<any[]>([]);

	readRepo = this.repo.asReadonly();
	readLoading = this.loading.asReadonly();
	readError = this.error.asReadonly();
	readCommits = this.commits.asReadonly();

	fetchRepo(repoName: string) {
		return this.httpClient
			.get<RepoInterface>(
				'https://api.github.com/repos/' + 'joao-vtr-oliveira/' + repoName,
				{}
			)
			.pipe(
				tap((repoData) => {
					this.repo.set(repoData);
					this.loading.set(false);
				}),
				catchError((error) => {
					const message = this.handleHttpError(error);
					this.error.set(message);
					this.loading.set(false);
					this.repo.set(undefined);
					return throwError(() => new Error(message));
				})
			);
	}

	fetchCommits(repoName: string) {
		this.loading.set(true);
		return this.httpClient
			.get<any[]>(
				`https://api.github.com/repos/joao-vtr-oliveira/${repoName}/commits`
			)
			.pipe(
				tap((commitsData) => {
					this.commits.set(commitsData);
					this.loading.set(false);
				}),
				catchError((error) => {
					this.commits.set([]);
					this.loading.set(false);
					return throwError(() => new Error('Erro ao buscar commits'));
				})
			);
	}

	private handleHttpError(error: any): string {
		if (error.status === 404) return 'Repo not found';
		if (error.status === 403) return 'Max request limit';
		return 'Unkown error. Please, try later.';
	}
}
