import { Component, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';
import { CommonModule } from '@angular/common';
import { Task } from "../../models/task-model";
  

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  imports: [CdkDropList, CdkDrag,CommonModule],
  standalone: true,
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board = new Board('Meu Quadro', [
    new Column('To Do', [new Task('Banhar cachorro')]),
    new Column('In Progress', []),
    new Column('Done', [])
 ]);
  

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
}

getConnectedColumns(index: number): string[] {
    // Retorna todos os IDs de colunas, exceto o próprio ID da coluna atual
    return this.board.columns.map((_, i) => 'column-' + i).filter(id => id !== 'column-' + index);

}
modalOpen = false;
currentColumnIndex: number | null = null; // Inicializa como null

openModal(index: number) {
   this.currentColumnIndex = index;
   this.modalOpen = true;
  }

 closeModal() {
    this.modalOpen = false;
 }

 addTask(event: Event, columnIndex: number, taskName: string) {
   event.preventDefault(); // Previne a atualização da página
   const newTask = new Task(taskName);
   this.board.columns[columnIndex].tasks.push(newTask);
   this.closeModal(); // Fecha o modal após adicionar a tarefa
  }


}