import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobOffer } from '../models/JobOffer';
import { JobOfferCompanyDomains } from '../models/JobOfferCompanyDomains';
import { JobOfferDTO } from '../models/JobOfferDTO';
import { Metier } from '../models/Metier';
import { Recruiter } from '../models/Recruiter';
import { TypeContract } from '../models/TypeContract';
import { MetierServices } from '../services/MetierServices';
import { UserServices } from '../services/UserServices';
import { DatePipe } from '@angular/common'
import { CompanyServices } from '../services/CompayServices';
import { CompanyDTO } from '../models/CompanyDTO';


@Component({
  selector: 'app-formulaire-offer',
  templateUrl: './formulaire-offer.component.html',
  styleUrls: ['./formulaire-offer.component.scss']
})
export class FormulaireOfferComponent implements OnInit {

  public jobOfferCompanyDomains = new JobOfferCompanyDomains();
  public jobOffer = new JobOffer();
  public listeMetiers: string[] = [];
  public jobOfferFormGroup !: FormGroup;
  submitted = false;
  spinnerActive: boolean = false;
  offerIsSaved : boolean = false ;
  minDate: Date;
  fileOffer: File | null;
  floutage!:string;
  public resultInfo:String = "Impossible de publier l'offre ";


  constructor(private metierService: MetierServices, private userServices: UserServices, private companyService: CompanyServices, private formBuilder: FormBuilder, private datePipe: DatePipe) {
    this.minDate = new Date();
    console.log(this.minDate);
    this.fileOffer = null;

  }

  ngOnInit(): void {
    this.getAllDataForForm();
    this.jobOfferFormGroup = this.formBuilder.group({
      metier: [null, Validators.required],
      contract: [null, Validators.required],
      title_offer: [null, Validators.required],
      niveau: [null, Validators.required],
      details: [null],
      salaire_offer: [null, Validators.required],
      date_limite_candidature: [null, Validators.required],
    });

  }

  /**
   * Effectue les différentes méthode pour la création d'une offre
   */
  saveOffer() {
    this.activerSpinner(true)
    console.log(this.jobOffer);
    // Extract jobOfferDo From JobOfferFormGroup
    let jobOfferDTO: JobOfferDTO = this.getJobOfferDtoFromJobOfferFormGroup();
    //Modification des champs pour inculre les champs de l'entité company
    jobOfferDTO = this.miseAJourDesChampsConcernantEntiteCompany(jobOfferDTO);
    //Modification des champs pour inclure les champs de l'entité User
    jobOfferDTO = this.miseAjourDesChampsConcernantEntiteUser(jobOfferDTO);
    //On vérifie si un fichier à été envoyé par l'utilisateur
    console.log(jobOfferDTO);
    if (this.fileOffer == null) {
      //Envoie des information à l'api avec le fichier
      this.companyService.saveNewJobOffer(jobOfferDTO).subscribe(
        (result) => {
          this.activerSpinner(false);

          this.offerIsSaved= true;
          this.floutage= "floutage";
        },
        (err) => {
          console.log("Conflit sans fichier")
          this.activerSpinner(false);
          this.resultInfo="Erreur";
          throw new Error(err);
        }
      )

    }
    else{
      // Envoie des informations sans fichier
      if(this.fileOffer != null){
        this.companyService.saveNewJobOfferWithFile(jobOfferDTO, this.fileOffer).subscribe(
          (result) => {
            this.activerSpinner(false);
            this.offerIsSaved= true;
            this.floutage= "floutage";
          },
          (err) => {
            console.log("Conflit")
            this.activerSpinner(false);
            throw new Error(err);
          }
        );
      }
      else{
        throw new Error("The file cannot be null")
      }

    }

  }

  /**
   *
   * @param jobOfferDTO Methode permettant d'obtenir les informations de l'utilisateur cnnecté et de setter les champs null avec ces dernières
   * @returns
   */
  miseAjourDesChampsConcernantEntiteUser(jobOfferDTO: JobOfferDTO): JobOfferDTO {
    let userDTO = this.userServices.getUserConnectedFromService();
    jobOfferDTO.city = userDTO?.city;
    jobOfferDTO.phone = userDTO?.phone;
    jobOfferDTO.mail = userDTO?.mail;
    return jobOfferDTO;
  }

  /**
   * Méthode permettant d'obtenir les informations du formulaire envoyé par l'utilisateur
   * @returns
   */
  getJobOfferDtoFromJobOfferFormGroup(): JobOfferDTO {
    //throw new Error('Method not implemented.');
    let jobOfferDTO: JobOfferDTO = this.jobOfferFormGroup.getRawValue();
    if (jobOfferDTO.date_limite_candidature !== null) {
      jobOfferDTO.date_limite_candidature = this.datePipe.transform(jobOfferDTO.date_limite_candidature, 'yyyy-MM-dd')!;
    }
    return jobOfferDTO;
  }

  miseAJourDesChampsConcernantEntiteCompany(jobOfferDTO: JobOfferDTO): JobOfferDTO {
    let companyDTO: CompanyDTO = this.companyService.getUserCompanyFromService();
    jobOfferDTO.name_company = companyDTO?.name_company;
    jobOfferDTO.typeCompany = companyDTO?.typeCompany;
    return jobOfferDTO;;
  }
  createObject_JobOfferRecruiterDomains(jobOffer: JobOffer, recruiter: Recruiter, metier: Metier, contract: TypeContract): JobOfferDTO | null {
    /* let JobOfferDTO :JobOfferDTO = {
      metier : this.jobOffer.
     }*/

    return null;
  }

  getAllDataForForm() {
    this.metierService.getAllMetier().subscribe(
      (result) => {
        this.listeMetiers = result;

      }
    );
  }
  activerSpinner(isActive: boolean) {
    this.spinnerActive = isActive;
  }
  /**
   * Recoit le fichier envoyé par l'utilisateur et l'ajout au parametre de création d'offre
   * @param event :Fichier envoyé par l'utilisateur
   */
  receiveFile(event: File) {
    console.log("I receive File data ");
    console.log(event);
    this.fileOffer = event;
  }

}
