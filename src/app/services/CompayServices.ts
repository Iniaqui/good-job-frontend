import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CompanyDTO } from "../models/CompanyDTO";
import { JobOfferCompanyDomains } from "../models/JobOfferCompanyDomains";
import { JobOfferDTO } from "../models/JobOfferDTO";
import { ApiServices } from "./ApiServices";

@Injectable()
export class CompanyServices extends ApiServices {
  private companyConnected!: CompanyDTO;

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    //Get company Connected
    this.getUserCompanyDomainsConnected().subscribe(
      (result)=>{
        this.companyConnected = result;
      },
      (err)=>{
        throw err;
      }
    );
  }
  /**
   * Permet d'obtenir l'instance company de l'utilisateur connecté
   */
  getUserCompanyDomainsConnected():Observable<CompanyDTO> {
    return this.httpClient.get<CompanyDTO>(this.host + "/company", this.httpOptions);
  }
  /**
   * Methode permettant d'extraire les informations de la comapny connecté , au cas ou la company connecté est null,
   * une tentatives de reconnexion est lancée
   * @returns
   */
  getUserCompanyFromService ():CompanyDTO {
    if(this.companyConnected !== null){
      return this.companyConnected;
    }
    else{
      this.getUserCompanyDomainsConnected().subscribe(
        (result)=>{
          this.companyConnected = result;
        },
        (err)=>{
          throw err;
        }
      );
      if(this.companyConnected !== null){
        return this.companyConnected;
      }
      else{
        throw new Error("Impossible d'obtenir les informations de la company connectée ");
      }
    }
  }
  /**
   *Permet par l'envoie des informations à l'api la création d'une offre sans fichier
   * @param jobOfferDTO
   * @returns
   */
  saveNewJobOffer(jobOfferDTO: JobOfferDTO): Observable<JobOfferDTO>{
    return this.httpClient.post<JobOfferDTO>(this.host+"/company/jobOffer/save", jobOfferDTO, this.httpOptions);
  }

  saveNewJobOfferWithFile(jobOfferDTO: JobOfferDTO, file:File):Observable<JobOfferDTO>{
    const formData = new FormData();
   // const jobOfferDTOBlob = new Blob([JSON.stringify(debug, null, 4)], {type: 'application/json'})
    formData.append("file", file);
    formData.append("jobOfferDTOString", JSON.stringify(jobOfferDTO));

    let params = new HttpParams();
    return this.httpClient.post<JobOfferDTO>(this.host+"/jobOffer/admin/create", formData, this.httpOptions)
  }
}
