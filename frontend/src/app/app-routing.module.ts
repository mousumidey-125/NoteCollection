import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "addNote",
    pathMatch: 'full'
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
