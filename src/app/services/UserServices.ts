import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/User";
import { UserCandidatDomains } from "../models/UserCandidatDomains";
import { UserCompanyDomains } from "../models/UserCompanyDomains";
import { UserDTO } from "../models/UserDTO";
import { ApiServices } from "./ApiServices";
@Injectable()
export class UserServices extends ApiServices{
   token ="";
  private user!: User;
  private userConnected!: UserDTO ;
  private userCandidatDomains!:UserCandidatDomains;
  constructor(protected httpClient:HttpClient) {
    super(httpClient);
    this.getUserConnected().subscribe(
      (result) =>{
        this.userConnected = result;
      },
      (err) =>{
        throw new Error(err);
      }
    );
  }

  login(user:User){
    localStorage.removeItem("token");
    return this.httpClient.post(this.host+"/login", user, {observe : 'response', headers:this.httpOptions.headers});
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
  getUserConnected(): Observable<UserDTO> {

    return this.httpClient.get<UserDTO>(this.host+"/user", this.httpOptions);
  }

  getUserConnectedFromService():UserDTO{
    if(this.userConnected !== null){
      return  this.userConnected;
    }
    else{
      this.getUserConnected().subscribe(
        (result) =>{
          this.userConnected = result;
        },
        (err) =>{
          throw new Error(err);
        }
      );
      if(this.userConnected !== null){
        return  this.userConnected;
      }
      else{
        throw new Error("IMPOSSIBLE D'OBTENIR LES INFORMATIONS DE L'UTILISATEUR CONNECTE ")
      }
    }
  }

}
