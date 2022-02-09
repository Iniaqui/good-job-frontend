import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobOffer } from '../models/JobOffer';
import { JobOfferCompanyDomains } from '../models/JobOfferCompanyDomains';
import { JobOfferDTO } from '../models/JobOfferDTO';
import { JobOfferRecruiterDomains } from '../models/JobOfferRecruiterDomains';
import { Metier } from '../models/Metier';
import { Recruiter } from '../models/Recruiter';
import { TypeContract } from '../models/TypeContract';
import { User } from '../models/User';
import { MetierServices } from '../services/metierServices';
import { UserServices } from '../services/UserServices';

@Component({
  selector: 'app-formulaire-offer',
  templateUrl: './formulaire-offer.component.html',
  styleUrls: ['./formulaire-offer.component.scss']
})
export class FormulaireOfferComponent implements OnInit {

  public jobOfferCompanyDomains = new JobOfferCompanyDomains();
  public jobOffer = new JobOffer();
  public listeMetiers :string[] = [];
  public jobOfferFormGroup !: FormGroup;
  submitted = false;
  private user!: User;


  constructor(private metierService: MetierServices, private userServices:UserServices , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllDataForForm();
    this.jobOfferFormGroup =this.formBuilder.group({
      metier :[null, Validators.required],
      contract:[null, Validators.required],
      title_offer: [null, Validators.required],
      niveau: [null, Validators.required],
      details: [null],
      salaire_offer:[null, Validators.required]
    }) ;

  }

  saveOffer(){
    console.log(this.jobOffer);
    // Extract jobOfferDo From JobOfferFormGroup
    let jobOfferDto :JobOfferDTO = this.getJobOfferDtoFromJobOfferFormGroup();
    console.log(jobOfferDto);



  }

  getJobOfferDtoFromJobOfferFormGroup(): JobOfferDTO {
    throw new Error('Method not implemented.');
    let jobOfferDTO : JobOfferDTO = this.jobOfferFormGroup.getRawValue();

    return jobOfferDTO;
    }
  createObject_JobOfferRecruiterDomains(jobOffer:JobOffer, recruiter :Recruiter, metier : Metier , contract :TypeContract): JobOfferDTO |null{
  /* let JobOfferDTO :JobOfferDTO = {
    metier : this.jobOffer.
   }*/

    return null;
  }

  getAllDataForForm(){
    this.metierService.getAllMetier().subscribe(
      (result) =>{
       this.listeMetiers = result;

      }
    )
    ;
  }

}
