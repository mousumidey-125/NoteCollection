import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "shownotes",
    pathMatch: 'full'
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"shownotes",
    component:ShowNotesComponent
  },
  {
    path:"addNote",
    component:AddNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
