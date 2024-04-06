import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-add-task',
  standalone: true,
  imports: [],
  templateUrl: './modal-add-task.component.html',
  styleUrl: './modal-add-task.component.scss'
})
export class ModalAddTaskComponent {
  modalOpen = false;
  openModal() {
   this.modalOpen = true;
  }

 closeModal() {
    this.modalOpen = false;
 }

}
