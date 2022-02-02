import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  apiUrl = environment.apiUrl
  targetResource:string = 'user/rolesRules'

  constructor(private http:HttpClient) { }
  getRolesRules(){
    return this.http.get(this.apiUrl+'/'+this.targetResource)
  }
}
