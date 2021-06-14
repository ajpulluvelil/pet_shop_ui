import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSitNavigationComponent } from './public-sit-navigation.component';

describe('PublicSitNavigationComponent', () => {
  let component: PublicSitNavigationComponent;
  let fixture: ComponentFixture<PublicSitNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSitNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSitNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
