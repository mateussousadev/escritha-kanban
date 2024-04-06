import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-add-column',
  standalone: true,
  imports: [],
  templateUrl: './modal-add-column.component.html',
  styleUrl: './modal-add-column.component.scss'
})

export class ModalAddColumnComponent {
  modalOpen = false;
  openModal() {
   this.modalOpen = true;
  }

 closeModal() {
    this.modalOpen = false;
 }

}
