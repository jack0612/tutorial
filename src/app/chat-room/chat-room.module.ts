import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HatoolComponent } from './hatool/hatool.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { HatoolLibModule } from 'hatool';
import { ChatRoomComponent } from './chat-room.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HatoolComponent,
    ChatRoomComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HatoolLibModule,
    HttpClientModule
  ],
  exports:[
    ChatRoomComponent
  ]
})
export class ChatRoomModule { }
