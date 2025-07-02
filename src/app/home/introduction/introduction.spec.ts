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
});
