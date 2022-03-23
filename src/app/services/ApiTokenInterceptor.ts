import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { Observable } from "rxjs";

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token ="";
    if(localStorage.getItem("token") === null){
      token ='';
    }
    else{
      let tokenInfo = this.getDecodeAcessToken(<string> localStorage.getItem('token'));
      let expireDate = tokenInfo.exp;
      let tdy = new Date ();

      if(expireDate< (tdy.getTime()/1000)){
        localStorage.clear();
      }
      else{
        token= <string> localStorage.getItem('token');
      }
    }

    let tokenReq = req.clone({
      setHeaders:{
        Authorization:token
      }
    })
    return next.handle(tokenReq);
  }

  getDecodeAcessToken(token:string):any{
    try{
      return jwtDecode(token);
    }
    catch(Error){
      return null;
    }
  }
}


