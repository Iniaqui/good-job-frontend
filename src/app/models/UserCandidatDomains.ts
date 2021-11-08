import { Candidat } from "./Candidat";
import { User } from "./User";

export class UserCandidatDomains{
  private user!:User;
  private candidat!:Candidat;

  constructor(user:User, candidat:Candidat){
    this.user = user;
    this.candidat = candidat;
  }

  public getUser():User{
    return this.user;
  }
  public getCandidat():Candidat{
    return this.candidat;
  }
}
