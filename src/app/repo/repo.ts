import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Github } from '../services/github';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
	selector: 'app-repo',
	standalone: true,
	imports: [MatCardModule, MatIconModule, DatePipe],
	templateUrl: './repo.html',
	styleUrl: './repo.css',
})
export class Repo implements OnInit {
	private route = inject(ActivatedRoute);
	private github = inject(Github);

	repo = this.github.readRepo;
	loading = this.github.readLoading;
	error = this.github.readError;
	commits = this.github.readCommits;

	ngOnInit() {
		const repoName = this.route.snapshot.paramMap.get('repo');
		if (repoName) {
			this.github.fetchRepo(repoName).subscribe();
			this.github.fetchCommits(repoName).subscribe();
		}
	}
}
