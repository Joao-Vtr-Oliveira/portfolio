import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Github } from '../services/github';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../services/locale.service';
// Importe o array de projetos
import { projects } from '../home/projects/projects-info';

@Component({
	selector: 'app-repo',
	standalone: true,
	imports: [MatIconModule, DatePipe, RouterLink],
	templateUrl: './repo.html',
	styleUrl: './repo.css',
})
export class Repo implements OnInit {
	private route = inject(ActivatedRoute);
	private github = inject(Github);
	readonly i18n = inject(LocaleService);

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
			// Busca o projeto pelo nome do repositório no repoLink e pega o imgSrc direto
			const project = projects.find((p) =>
				p.repoLink?.toLowerCase().endsWith('/' + repoName.toLowerCase())
			);
			this.projectImg = project?.imgSrc;
		}
	}

	getCommitClass(message?: string): string {
		const kind = ['feat', 'fix', 'test', 'refactor', 'docs'].find((prefix) => message?.startsWith(prefix));
		return `commit__tag commit__tag--${kind ?? 'other'}`;
	}

	getCommitIcon(message?: string): string {
		if (!message) return 'commit';
		if (message.startsWith('feat')) return 'new_releases';
		if (message.startsWith('fix')) return 'build';
		if (message.startsWith('test')) return 'science';
		if (message.startsWith('refactor')) return 'sync_alt';
		if (message.startsWith('docs')) return 'description';
		return 'commit';
	}
}
