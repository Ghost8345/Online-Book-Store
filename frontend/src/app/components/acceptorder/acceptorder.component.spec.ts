import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorderComponent } from './acceptorder.component';

describe('AcceptorderComponent', () => {
  let component: AcceptorderComponent;
  let fixture: ComponentFixture<AcceptorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
