import { HttpClient, HttpHeaders } from "@angular/common/http";

export class ApiServices {
 protected host = 'http://localhost:8080';
  //protected host = 'http://51.255.49.63:8080/good-job-api';

  constructor(protected httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Cross-origin': 'cross-site'
    })
  };
}
