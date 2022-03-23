import { JobOfferDTO } from "./JobOfferDTO";
import { UserDTO } from "./UserDTO";

export interface CompanyDTO {
  name_recruiter: string;
  link_description: string;
  name_company: string;
  typeCompany: string;
  userDTO: UserDTO;
  jobOfferDTOS: JobOfferDTO[];

}
