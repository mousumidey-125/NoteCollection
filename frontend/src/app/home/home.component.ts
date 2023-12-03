import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 countries=[
  {
    name:'India',
    id:'IN',
    cities:['Delhi','Mumbai']
  },
  {
    name:'Pak',
    id:'PK',
    cities:['Lahore','karachi']
  },


]
selectedCountry: string = '';
  states: string[] = [];

  onCountryChange() {
    // const selectedCountry = this.countries.find(country => country.id === this.selectedCountry);
    // this.states = selectedCountry ? selectedCountry.cities : [];
    console.log(this.selectedCountry)
    this.countries.find((country)=>{
      if(country.id===this.selectedCountry){
        console.log(country.cities)
        this.states=country.cities
      }
      
    })
  }
}
