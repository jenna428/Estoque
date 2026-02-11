import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemFormComponent } from './delete-item-form.component';

describe('DeleteItemFormComponent', () => {
  let component: DeleteItemFormComponent;
  let fixture: ComponentFixture<DeleteItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
