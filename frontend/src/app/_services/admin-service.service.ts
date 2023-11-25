import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { INote } from '../_models/NoteSchema';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(public httpObj:HttpClient) { }

  baseUrl="http://localhost:5000/admin"

  addNote(note:any){
    let url=this.baseUrl+"/addNote"
    return this.httpObj.post(url,note)
  }

  showNote(){
    let url=this.baseUrl+"/showNotes"
    return this.httpObj.get(url)
  }
}
