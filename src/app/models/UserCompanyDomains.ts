import { Recruiter } from "./Recruiter";
import { User } from "./User";

export class UserCompanyDomains{
  private user!: User;
  private recruiter!:Recruiter;

 constructor(user:User, recruiter:Recruiter){
   this.user= user;
   this.recruiter= recruiter;
 }
}
