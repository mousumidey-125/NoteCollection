import { Component } from '@angular/core';
import { IAdmin } from '../_models/adminSchema';
import { AdminServiceService } from '../_services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public admin: IAdmin, public adminServiceObj: AdminServiceService, public routerobj:Router) { }
  onSubmit() {
    this.adminServiceObj.adminlogin(this.admin).subscribe((res: any) => {
      if (res.length > 0) {
        console.log(res)
        this.routerobj.navigate(['/admin'])

      }
      else {
        console.log("mismatched")
      }
    })
  }
}
