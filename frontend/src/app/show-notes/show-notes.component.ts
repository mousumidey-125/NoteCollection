import { Component } from '@angular/core';
import { AdminServiceService } from '../_services/admin-service.service';
import { INote } from '../_models/NoteSchema';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent {

  noteList: INote[] = []
  searchNote: INote[] = []
  showSearchResult: boolean = false
  constructor(public adminServiceObj: AdminServiceService, public note: INote) { }
  ngOnInit() {
    this.adminServiceObj.showNote().subscribe((res: any) => {
      console.log(res)
      this.noteList = res
    })

  }
  showAll(){
    this.adminServiceObj.showNote().subscribe((res: any) => {
      console.log(res)
      this.noteList = res
      this.showSearchResult = false
    })
  }
  onEnterPress(event: any) {
    
    this.adminServiceObj.search(this.note.countryName).subscribe((res: any) => {
      if (res.length > 0) {
        console.log(res)
        this.noteList = res
        this.showSearchResult = false
      }
      else {
        console.log("not found")
        this.noteList = []
        this.showSearchResult = true
      }
    })
  }


}
