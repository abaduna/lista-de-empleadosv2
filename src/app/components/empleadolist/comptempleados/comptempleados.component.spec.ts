import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptempleadosComponent } from './comptempleados.component';

describe('ComptempleadosComponent', () => {
  let component: ComptempleadosComponent;
  let fixture: ComponentFixture<ComptempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptempleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
