import { JobOffer } from "./JobOffer";
import { Recruiter } from "./Recruiter";

export class JobOfferCompanyDomains{

  jobOffer!:JobOffer;

  recruiter!:Recruiter;
  metier!:string;
  type_contract!:string;
  number_candidat:number =0;
/*constructor(jobOffer:JobOffer, metier:string, type_contract:string, number_candidat:number){
  this.jobOffer = jobOffer;
  this.metier=metier;
  this.number_candidat = number_candidat;
  this.type_contract= type_contract;
}*/


}
