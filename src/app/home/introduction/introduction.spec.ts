import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introduction } from './introduction';

describe('Introduction', () => {
  let component: Introduction;
  let fixture: ComponentFixture<Introduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Introduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have name in H2', () => {
    const h2: HTMLHeadingElement = fixture.nativeElement.querySelector(
      '[data-testid="heading2-introductionComponent"]'
    );
    expect(h2.textContent).toContain('João Vitor');
  })
  it('links the current full-stack platform from the introduction', () => {
    expect(fixture.nativeElement.textContent).toContain('Atronos Forge');
    expect(fixture.nativeElement.querySelector('a[href="#projetos"]')).toBeTruthy();
  });
  it('downloads the updated resume without replacing the original file', () => {
    expect(fixture.nativeElement.querySelector('a[href="/docs/updated/Curriculo_Joao_Vitor_Oliveira_ATS.pdf"]')).toBeTruthy();
  });
  it('downloads the English resume on the English route', () => {
    component.i18n.setFromUrl('/en');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('a[href="/docs/updated/Joao_Vitor_Oliveira_Resume_EN_ATS.pdf"]')).toBeTruthy();
  });
  it('scrolls to Atronos Forge without navigating away from the selected locale', () => {
    const target = document.createElement('div');
    target.id = 'projetos';
    target.scrollIntoView = jest.fn();
    document.body.appendChild(target);
    const link = fixture.nativeElement.querySelector<HTMLAnchorElement>('a[href="#projetos"]');

    link.click();

    expect(target.scrollIntoView).toHaveBeenCalled();
    expect(component.i18n.locale()).toBe('pt-BR');
    target.remove();
  });
});
