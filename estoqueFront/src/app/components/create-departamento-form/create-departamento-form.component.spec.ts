import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepartamentoFormComponent } from './create-departamento-form.component';

describe('CreateDepartamentFormComponent', () => {
  let component: CreateDepartamentoFormComponent;
  let fixture: ComponentFixture<CreateDepartamentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepartamentoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDepartamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
