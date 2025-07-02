import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Github } from '../services/github';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe, NgClass } from '@angular/common';
// Importe o array de projetos
import { projects } from '../home/projects/projects-info';

@Component({
	selector: 'app-repo',
	standalone: true,
	imports: [MatCardModule, MatIconModule, DatePipe, NgClass],
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

	projectImg: string | undefined;

	ngOnInit() {
		const repoName = this.route.snapshot.paramMap.get('repo');
		if (repoName) {
			this.github.fetchRepo(repoName).subscribe();
			this.github.fetchCommits(repoName).subscribe();
			// Busca a imagem do projeto pelo nome
			const project = projects.find(
				(p) => p.name.toLowerCase() === repoName.toLowerCase()
			);
			this.projectImg = project?.imgSrc;
		}
	}

	getCommitClass(message?: string): string {
		if (!message) return '';
		if (message.startsWith('feat'))
			return 'bg-green-100 text-green-800 px-2 py-1 rounded';
		if (message.startsWith('fix'))
			return 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded';
		if (message.startsWith('test'))
			return 'bg-blue-100 text-blue-800 px-2 py-1 rounded';
		if (message.startsWith('refactor'))
			return 'bg-purple-100 text-purple-800 px-2 py-1 rounded';
		if (message.startsWith('docs'))
			return 'bg-orange-100 text-orange-800 px-2 py-1 rounded';
		return 'bg-gray-100 text-gray-800 px-2 py-1 rounded';
	}
}
