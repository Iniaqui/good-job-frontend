import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { UserCandidatDomains } from "../models/UserCandidatDomains";
import { UserCompanyDomains } from "../models/UserCompanyDomains";
import { ApiServices } from "./ApiServices";
@Injectable()
export class UserServices extends ApiServices{

  private user!: User;
  private userCandidatDomains!:UserCandidatDomains;
  constructor(protected httpClient:HttpClient) {
    super(httpClient);
  }

  login(user:User){
    return this.httpClient.post(this.host+"/login", user, this.httpOptions);
  }

  setUser(user:User){
    this.user = user;
    console.log("The user is setted");
  }
  setUserCandidatDomains(userCandidatDomains:UserCandidatDomains){
    this.userCandidatDomains = userCandidatDomains;
  }
  getUserCandidatDomains():UserCandidatDomains{
    return this.userCandidatDomains;
  }
  saveUserAsCandidat(userCandidatDomains:UserCandidatDomains){
      return this.httpClient.post<UserCandidatDomains> (this.host+"/user/candidat/save", userCandidatDomains, this.httpOptions);
  }
  saveUserAsCompany(userCompanyDomains:UserCompanyDomains){
    return this.httpClient.post<UserCompanyDomains>(this.host+"/user/company/save", userCompanyDomains, this.httpOptions);
  }
}
