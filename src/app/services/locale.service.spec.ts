import { LocaleService } from './locale.service';

describe('LocaleService', () => {
	it('uses the locale in the URL as the source of truth', () => {
		const service = new LocaleService();
		service.setFromUrl('/en#projects');

		expect(service.locale()).toBe('en');
		expect(service.t('projects.title')).toBe('My projects');

		service.setFromUrl('/pt-BR');
		expect(service.locale()).toBe('pt-BR');
		expect(service.t('projects.title')).toBe('Meus Projetos');
	});
});
