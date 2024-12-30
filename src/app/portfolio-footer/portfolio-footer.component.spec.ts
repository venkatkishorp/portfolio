import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFooterComponent } from './portfolio-footer.component';

describe('PortfolioFooterComponent', () => {
  let component: PortfolioFooterComponent;
  let fixture: ComponentFixture<PortfolioFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioFooterComponent]
    });
    fixture = TestBed.createComponent(PortfolioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
