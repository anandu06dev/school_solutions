import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IParents } from '@utils/interfaces/parents.interface';
import { ISiblings } from '@utils/interfaces/sibilings.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentsapiService {

  private rootUrl = environment.apiUrl
  private targetResource: string = 'parent-details';

  constructor(private http:HttpClient) { }

  createParentDetails = (value:IParents) =>
    this.http.post(`${this.rootUrl}/${this.targetResource}`,{...value})
  updateParentDetail = (value:IParents) =>
    this.http.patch(`${this.rootUrl}/${this.targetResource}/${value?.admissionNo}`,{...value});
}
