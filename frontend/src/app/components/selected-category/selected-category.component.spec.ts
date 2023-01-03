import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCategoryComponent } from './selected-category.component';

describe('SelectedCategoryComponent', () => {
  let component: SelectedCategoryComponent;
  let fixture: ComponentFixture<SelectedCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
