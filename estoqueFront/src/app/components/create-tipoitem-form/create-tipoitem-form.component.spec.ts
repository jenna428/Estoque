import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoitemFormComponent } from './create-tipoitem-form.component';

describe('CreateTipoitemFormComponent', () => {
  let component: CreateTipoitemFormComponent;
  let fixture: ComponentFixture<CreateTipoitemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTipoitemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoitemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
