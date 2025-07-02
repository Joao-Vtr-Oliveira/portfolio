import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact-component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
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
});
