import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolNavComponent } from './sol-nav.component';

describe('SolNavComponent', () => {
  let component: SolNavComponent;
  let fixture: ComponentFixture<SolNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
