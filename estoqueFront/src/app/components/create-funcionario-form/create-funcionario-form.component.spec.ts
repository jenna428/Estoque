import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFuncionarioFormComponent } from './create-funcionario-form.component';

describe('CreateFuncionarioFormComponent', () => {
  let component: CreateFuncionarioFormComponent;
  let fixture: ComponentFixture<CreateFuncionarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFuncionarioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFuncionarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
