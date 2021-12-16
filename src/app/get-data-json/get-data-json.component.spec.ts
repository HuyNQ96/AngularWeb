import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataJsonComponent } from './get-data-json.component';

describe('GetDataJsonComponent', () => {
  let component: GetDataJsonComponent;
  let fixture: ComponentFixture<GetDataJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
