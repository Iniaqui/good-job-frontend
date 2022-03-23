import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { User } from '../models/User';
import { UserServices } from '../services/UserServices';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit{
public userConnect = new User();

  constructor(private userServices:UserServices) { }

  ngOnInit(): void {
  }

  seConnecter(){
      console.log(this.userConnect);
      //Tentavies de connexion
      this.userServices.login(this.userConnect).subscribe(
        (result)=>{
            console.log("User is authenticated ")
            alert("User is authenticated ");
            //SETTING TOKEN
            this.userServices.token = <string>result.headers.get("authorization");
            localStorage.setItem('token',this.userServices.token);

      });

  }
  emailFormControl = new FormControl(
    '',
  [Validators.required,Validators.email]
  );
  passwordFormControl = new FormControl(
    '',
    [Validators.required]
  )

 matcher = new MyErrorStateMatcher();


}
