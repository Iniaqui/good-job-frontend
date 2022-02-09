import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiServices } from "./ApiServices";

@Injectable()
export class   MetierServices extends ApiServices{


  constructor(protected httpClient:HttpClient) {
    super(httpClient);
  }

  getAllMetier(){
    return this.httpClient.get<string[]>(this.host+"/metier/list", this.httpOptions);
  }
}
