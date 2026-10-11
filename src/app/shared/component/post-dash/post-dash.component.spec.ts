import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDashComponent } from './post-dash.component';

describe('PostDashComponent', () => {
  let component: PostDashComponent;
  let fixture: ComponentFixture<PostDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
