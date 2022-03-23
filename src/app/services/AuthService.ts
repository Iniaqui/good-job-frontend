import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiServices } from "./ApiServices";

@Injectable()
export class AuthService extends ApiServices{
  constructor(protected httpClient: HttpClient){
    super(httpClient);
  }
}
