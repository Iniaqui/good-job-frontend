import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Candidat } from '../models/Candidat';
import { Recruiter } from '../models/Recruiter';
import { TypeCompany } from '../models/TypeCompany';
import { User } from '../models/User';
import { UserCandidatDomains } from '../models/UserCandidatDomains';
import { UserCompanyDomains } from '../models/UserCompanyDomains';
import { TypeCompanyServices } from '../services/TypeCompanyServices';
import { UserServices } from '../services/UserServices';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {


  //DATA ENTITY
  public userSaved = new User();
  public candidatSaved = new Candidat();
  public recruiterSaved = new Recruiter();
  public passwordConfirm?:string;
  public typeListCompany!:TypeCompany[];


  //VARIABLE FOR STYLE SCSS
  public profil_user!:string ;
  public profil_user_inscription!:string;
  public profil_choice!:string;
  public profil_candidat!:string;
  public profil_candidat_fin!:string;
  public profil_recruiter!:string;
  public profil_recruiter_end!:string;


  matcher = new MyErrorStateMatcher();

//SYSTEM OF VALIDATION AND FORM CONTROL
  emailFormControl = new FormControl(
    '',
  [Validators.required,Validators.email]
  );
  passwordFormControl = new FormControl(
    '',
    [Validators.required]
  );

  numberPhoneFormControl = new FormControl(
    '',
    [Validators.required, Validators.min(10000000), Validators.max(99999999)]
  );
  adressFormControl  = new FormControl(
    '',
    [Validators.required]
  );
  nameFormControl  = new FormControl(
    '',
    [Validators.required]
  );
  birthdayFormControl = new FormControl(
    '',
    [Validators.required]
  )

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }



  constructor(private userServices :UserServices, private typeCompanyServices:TypeCompanyServices) {

   }


  ngOnInit(): void {
     this.profil_user_inscription= "";
     this.profil_choice="profil-choice";
     this.profil_user="profil-user";
     this.profil_choice="profil-choice";
     this.profil_candidat="profil-candidat";
     this.profil_candidat_fin="profil-candidat-fin";
     this.profil_recruiter="profil-recruiter";
     this.profil_recruiter_end="profil-recruiter-end";
    this.loadTypeCompany();

  }

  loadTypeCompany(){
    this.typeCompanyServices.getAllTypeCopany().subscribe(
      (result)=>{
        console.log("Chargement des types company ");
        console.log(result);
        this.typeListCompany = result;
      }
    )
  }
  isdisabledStep1() :boolean{
    if(this.userSaved.mail =="" || this.userSaved.mail == undefined){
      return true;
    }
    else{
      return false ;
    }
  }
  step1(){
    console.log(this.userSaved);

    this.profil_user_inscription="profil-user-inscription";
    this.profil_user = "";

  }
  step2(){
    this.profil_user="profil-user";
    this.profil_choice="";
  }

  isCandidat(){
    console.log("ok");
    this.profil_choice="profil-choice";
    this.profil_candidat="";
  }
  saveCandidatStep1(){
    console.log(this.candidatSaved);
    this.profil_candidat="profil-candidat";
    this.profil_candidat_fin="";
  }
  saveCandidatStep2(){
    console.log(this.candidatSaved);
    //START THE SAVING MODEL USER AND CANDIDAT
    let userCandidatDomains = new UserCandidatDomains(this.userSaved, this.candidatSaved);

    this.userServices.saveUserAsCandidat(userCandidatDomains).subscribe(
      (result)=>{
            console.log("AUthentication success");
            this.userServices.setUserCandidatDomains(result);
            let data = this.userServices.getUserCandidatDomains();
            console.log(data);
      }
    )
  }


  isRecruiter(){
    this.profil_choice="profil-choice";
    this.profil_recruiter="";
  }

  saveRecruiterStep1(){
    this.profil_recruiter="profil-recruiter";
    this.profil_recruiter_end="";

  }
  saveRecruiterStep2(){
    this.recruiterSaved.id_secteur= this.recruiterSaved.id_type_company;
    console.log(this.recruiterSaved);
    let userCompanyDomains = new UserCompanyDomains(this.userSaved, this.recruiterSaved);
    //START THE SAVING MODEL USER AND COMPANY
    this.userServices.saveUserAsCompany(userCompanyDomains).subscribe(
      (result)=>{
        console.log("SAVING FOR COMPANY SUCESS ");
        console.log(result);
      }
    )

  }






  saveProfil_user(){
    console.log("Profil save");
    console.log(this.userSaved);
    this.userServices.setUser(this.userSaved);
  }

  statut(){

  }




}
