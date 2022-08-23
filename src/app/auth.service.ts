import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

const AUTH_API = 'http://localhost';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient ,private _Router:Router) { 

    if(localStorage.getItem('userToken') != null)
    {
      this.setUserData();
    }
  }


  userData = new BehaviorSubject(null);

 
  setUserData():void{
    let encodeToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodeToken);
    this.userData.next(decodedToken);
    console.log(decodedToken);
  }

  register(UserData:object):Observable<any>{
   return this._HttpClient.post(AUTH_API+"/register", {
    username: UserData,
    password: UserData
  }, httpOptions);
}

  login(UserData:object):Observable<any>{
    return this._HttpClient.post(AUTH_API+"/login" , {
      username: UserData,
      password: UserData
    }, httpOptions);
  }

   logOut():void{
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
   }
}
