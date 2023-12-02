import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { countries } from 'countries-list';

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

  getCountryNames(): Observable<string[]> {
    const countryNames = Object.values(countries).map((country) => country.name);
    return of(countryNames);
  }
}
