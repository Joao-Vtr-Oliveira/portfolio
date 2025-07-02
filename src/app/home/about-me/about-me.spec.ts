import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMe } from './about-me';

describe('AboutMe', () => {
  let component: AboutMe;
  let fixture: ComponentFixture<AboutMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoud have "sobre mim"', () => {
    const h1: HTMLHeadingElement = fixture.nativeElement.querySelector(
      '[data-testid="heading1-abouteMe"]'
    );

    expect(h1.textContent).toContain('Sobre mim')
  })
});
