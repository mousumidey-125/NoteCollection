import { Component } from '@angular/core';
import { AdminServiceService } from '../_services/admin-service.service';
import { INote } from '../_models/NoteSchema';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent {
  
  noteList:INote[]=[]
  constructor(public adminServiceObj:AdminServiceService){}
  ngOnInit(){
    this.adminServiceObj.showNote().subscribe((res:any)=>{
      console.log(res)
      this.noteList=res
    })

  }
  contentArray = ["Item 1", "Item 2", "Item 3", "Item 4"];


}
