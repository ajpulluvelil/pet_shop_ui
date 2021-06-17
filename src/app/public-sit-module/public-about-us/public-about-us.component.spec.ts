import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAboutUsComponent } from './public-about-us.component';

describe('PublicAboutUsComponent', () => {
  let component: PublicAboutUsComponent;
  let fixture: ComponentFixture<PublicAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
