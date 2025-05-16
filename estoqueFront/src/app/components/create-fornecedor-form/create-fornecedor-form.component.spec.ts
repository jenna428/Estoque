import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFornecedorFormComponent } from './create-fornecedor-form.component';

describe('CreateFornecedorFormComponent', () => {
  let component: CreateFornecedorFormComponent;
  let fixture: ComponentFixture<CreateFornecedorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFornecedorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFornecedorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
