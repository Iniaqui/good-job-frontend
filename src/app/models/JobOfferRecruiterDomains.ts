import { JobOffer } from "./JobOffer";
import { Metier } from "./Metier";
import { Recruiter } from "./Recruiter";
import { TypeContract } from "./TypeContract";

export class JobOfferRecruiterDomains{
  recruiter !:Recruiter;
  jobOffer !: JobOffer;
  metier !: Metier;
  contract !: TypeContract;

}
