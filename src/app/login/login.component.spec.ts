import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './login.component';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
