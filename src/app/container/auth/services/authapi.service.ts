import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '@utils/interfaces/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  apiUrl:string = environment.apiUrl

  constructor(private http:HttpClient) { }

  register(data:ILogin){
    let register = 'auth/register'
    return this.http.post(this.apiUrl+'/'+register,{...data})
  }

  login(data:ILogin){
    let login = 'auth/login'
    return this.http.post(this.apiUrl+'/'+login,{...data})
  }

 
}
