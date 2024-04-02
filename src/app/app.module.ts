import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';

import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

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

  ]
})
export class AppModule { }

