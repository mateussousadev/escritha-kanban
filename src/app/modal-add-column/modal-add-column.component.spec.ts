import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddColumnComponent } from './modal-add-column.component';

describe('ModalAddColumnComponent', () => {
  let component: ModalAddColumnComponent;
  let fixture: ComponentFixture<ModalAddColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAddColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAddColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
