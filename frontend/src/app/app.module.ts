import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { FormsModule } from '@angular/forms';
import { INote } from './_models/NoteSchema';
import { HttpClientModule } from '@angular/common/http';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    ShowNotesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [INote],
  bootstrap: [AppComponent]
})
export class AppModule { }
