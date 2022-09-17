import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterExamInstructionsComponent } from './after-exam-instructions.component';

describe('AfterExamInstructionsComponent', () => {
  let component: AfterExamInstructionsComponent;
  let fixture: ComponentFixture<AfterExamInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterExamInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterExamInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
