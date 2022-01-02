import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISiblings } from '@utils/interfaces/sibilings.interface';
import { renewCacheOnTimer } from '@utils/utility';
import { take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiblingapiService {
  private rootUrl = environment.apiUrl
  private targetResource: string = 'sibling-details';

  constructor(private http:HttpClient) { }

  getSiblingDetailBasedOnAdmissionId = (admissionNo:string='1')=>this.http.get(`${this.rootUrl}/${this.targetResource}/findByAdmissionId/${admissionNo}`)
  
  getAllSiblings =() =>this.http.get(`${this.rootUrl}/${this.targetResource}`);

  getIndividualSiblingdetails = (siblingsId?:string) => this.http.get(`${this.rootUrl}/${this.targetResource}/${siblingsId}`)

  createSiblingDetail = (value:ISiblings) =>
    this.http.post(`${this.rootUrl}/${this.targetResource}`,{...value})
  updateSiblingDetail = (value:ISiblings) =>
    this.http.patch(`${this.rootUrl}/${this.targetResource}/${value?.id}`,{...value})
  

    // addNewSiblings = (value:ISiblings) => this.createSiblingDetail(value).pipe(take(1)).subscribe()
}
