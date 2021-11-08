import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TypeCompany } from "../models/TypeCompany";
import { ApiServices } from "./ApiServices";

@Injectable()
export class TypeCompanyServices extends ApiServices{


  constructor(protected httpClient:HttpClient) {
    super(httpClient);
  }

  getAllTypeCopany(){
    return this.httpClient.get<TypeCompany[]>(this.host+"/company/type/list", this.httpOptions);
  }
}
