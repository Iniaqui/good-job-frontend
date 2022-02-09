import { ResponseMessage } from "./ResponseMessage";

export interface JobOfferDTO{
  metier:string,
  name_company:string,
  contract:string,
  typeCompany:string ,
  title_offer:string,
  niveau:string,
  salaire_offer:string,
  details: string,
  link_description:string ,
  mail:string,
  city:string,
  phone:string,
  responseMessage:ResponseMessage
}
