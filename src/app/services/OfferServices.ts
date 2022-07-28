import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JobOfferDTO } from "../models/JobOfferDTO";
import { ApiServices } from "./ApiServices";
@Injectable()
export class OfferServices extends ApiServices{

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }
    obtenirLaListeDesOffresEmplois():Observable<JobOfferDTO[]>{
        return this.httpClient.get<JobOfferDTO[]>(this.host+"/jobOffer/getAll/activated",this.httpOptions)
      }
}