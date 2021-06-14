import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSitLandingPageComponent } from './public-sit-landing-page.component';

describe('PublicSitLandingPageComponent', () => {
  let component: PublicSitLandingPageComponent;
  let fixture: ComponentFixture<PublicSitLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSitLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSitLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
