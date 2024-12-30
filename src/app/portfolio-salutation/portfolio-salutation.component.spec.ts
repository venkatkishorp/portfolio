import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSalutationComponent } from './portfolio-salutation.component';

describe('PortfolioSalutationComponent', () => {
  let component: PortfolioSalutationComponent;
  let fixture: ComponentFixture<PortfolioSalutationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioSalutationComponent]
    });
    fixture = TestBed.createComponent(PortfolioSalutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
