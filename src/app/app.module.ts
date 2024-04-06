import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ModalAddColumnComponent } from './modal-add-column/modal-add-column.component';
import { ModalAddTaskComponent } from './modal-add-task/modal-add-task.component';

import { CommonModule } from '@angular/common';
import { DragDropModule, } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';  

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ModalAddColumnComponent,
    ModalAddTaskComponent,

  ],
  exports:[
    ModalAddTaskComponent,
    ModalAddColumnComponent,
  ]
})
export class AppModule { }

