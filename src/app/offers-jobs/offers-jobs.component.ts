import { Component, OnInit } from '@angular/core';
import { JobOffer } from '../models/JobOffer';
import { JobOfferCompanyDomains } from '../models/JobOfferCompanyDomains';
import { JobOfferDTO } from '../models/JobOfferDTO';
import { Recruiter } from '../models/Recruiter';
import { CompanyServices } from '../services/CompayServices';
import { OfferServices } from '../services/OfferServices';

@Component({
  selector: 'app-offers-jobs',
  templateUrl: './offers-jobs.component.html',
  styleUrls: ['./offers-jobs.component.scss']
})
export class OffersJobsComponent implements OnInit {
  
  listeDeOffres: JobOfferDTO[] =[]; 
  spinnerActive: boolean = false;
  constructor(private offerServices:OfferServices) {
    
   }

   
  ngAfterViewInit() {
   // this.listeDeOffres.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.activerSpinner(true)
    this.offerServices.obtenirLaListeDesOffresEmplois().subscribe(
      (result:JobOfferDTO[])=>{
        this.activerSpinner(false);
        console.log(result);
        this.listeDeOffres = result;
      }
    )
    //this.loadingOffer();
  }

  activerSpinner(isActive: boolean) {
    this.spinnerActive = isActive;
  }
  loadingOffer(){
    let jobffer:JobOffer= new JobOffer();
    jobffer.id_job_offer= 2;
    jobffer.date_publication_offer="10/09/2021";
    jobffer.details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    jobffer.id_recruiter=3;
    jobffer.id_type_contract =2;
    jobffer.niveau="BAC + 2";
    jobffer.idmetier=5;
    jobffer.salaire_offer="2000";
    jobffer.title_offer="Ingenieur Base de données";

    let recruiter :Recruiter = new Recruiter();
    recruiter.id_recruiter=2;
    recruiter.id_secteur =3;
    recruiter.id_type_company=2;
    recruiter.id_user=4;
    recruiter.link_description= "Description lorem ipsum";
    recruiter.name_recruiter="Zoé Colmar";
    recruiter.name_company="Colbat Company";


    let jobOffer1:JobOffer= new JobOffer();
    jobOffer1.id_job_offer= 2;
    jobOffer1.date_publication_offer="10/09/2021";
    jobOffer1.details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    jobOffer1.id_recruiter=3;
    jobOffer1.id_type_contract =2;
    jobOffer1.niveau="BAC + 2";
    jobOffer1.idmetier=5;
    jobOffer1.salaire_offer="2000";
    jobOffer1.title_offer="Ingenieur System d'informations";

    let jobOffer2:JobOffer= new JobOffer();
    jobOffer2.id_job_offer= 2;
    jobOffer2.date_publication_offer="10/09/2021";
    jobOffer2.details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    jobOffer2.id_recruiter=3;
    jobOffer2.id_type_contract =2;
    jobOffer2.niveau="BAC + 2";
    jobOffer2.idmetier=5;
    jobOffer2.salaire_offer="2000";
    jobOffer2.title_offer="Ingenieur System d'informations";

    let jobOfferCompanyDomains: JobOfferCompanyDomains= new JobOfferCompanyDomains();
    jobOfferCompanyDomains.jobOffer= jobOffer1;
    jobOfferCompanyDomains.metier="Ingenieur System";
    jobOfferCompanyDomains.number_candidat=5;
    jobOfferCompanyDomains.recruiter=recruiter;
    jobOfferCompanyDomains.type_contract="CDI";


    //this.listeDeOffres.push(jobOfferCompanyDomains, jobOfferCompanyDomains, jobOfferCompanyDomains, jobOfferCompanyDomains,jobOfferCompanyDomains, jobOfferCompanyDomains, jobOfferCompanyDomains);


  }
}
