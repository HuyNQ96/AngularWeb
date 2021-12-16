import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDataJsonComponent } from './post-data-json.component';

describe('PostDataJsonComponent', () => {
  let component: PostDataJsonComponent;
  let fixture: ComponentFixture<PostDataJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDataJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDataJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
