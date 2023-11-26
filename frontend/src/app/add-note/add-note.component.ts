import { Component } from '@angular/core';
import { INote } from '../_models/NoteSchema';
import { AdminServiceService } from '../_services/admin-service.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  countryFlag:any
  frontSide:any
  backside:any
  showmsg:boolean=false
  showerror:boolean=false
  countries: any[] = [];
  constructor(public note: INote, public adminServiceObj: AdminServiceService) { }
  ngOnInit(){
    this.adminServiceObj.getCountryNames().subscribe((res) => {
      this.countries = res;
    });
  }
  onChangeCountryFlag(event:any){
    this.countryFlag = event.target.files[0]
  }
  onChangeFrontSide(event:any){
    this.frontSide = event.target.files[0]

  }
  onChangeBackSide(event:any){
    this.backside = event.target.files[0]

  }
  onSubmit() {
    const formdata=new FormData()
    formdata.append("countryName",this.note.countryName)
    formdata.append("countryFlag",this.countryFlag)
    formdata.append("description",this.note.description)
    formdata.append("currencyName",this.note.currencyName)
    formdata.append("denomination",this.note.denomination)
    formdata.append("frontSide",this.frontSide)
    formdata.append("backside",this.backside)
    this.adminServiceObj.addNote(formdata).subscribe((res:any)=>{
      console.log(res)
      if(res.length>0){
        this.showmsg=true
        this.showerror=false
        this.note.countryName=""
        this.countryFlag=""
        this.note.description=""
        this.note.currencyName=""
        this.note.denomination=""
        this.frontSide=""
        this.backside=""
        
        

      }
      else{
        this.showerror=true
        this.showmsg=false

      }
    })

  }

}
