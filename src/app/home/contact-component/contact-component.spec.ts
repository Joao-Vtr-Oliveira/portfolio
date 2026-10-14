import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact-component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoulf have phone number', () => {
    const anchor: HTMLAnchorElement = fixture.nativeElement.querySelector(
      '[data-testid="anchorPhone-contactComponent"]'
    );
    expect(anchor.href).toContain('84169215');
  })
  it('downloads the localized ATS resume PDF', () => {
    expect(component.resumePath()).toBe('/docs/updated/Curriculo_Joao_Vitor_Oliveira_ATS.pdf');

    component.i18n.setFromUrl('/en');

    expect(component.resumePath()).toBe('/docs/updated/Joao_Vitor_Oliveira_Resume_EN_ATS.pdf');
  });
});
