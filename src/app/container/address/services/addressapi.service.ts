import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressApiService {

  private rootUrl = environment.apiUrl
  private postalResource: string = 'postal-ref';
  private addressResource: string = 'address-details';

  private postalApiUrl:string = "/api/postalpincode";
  // 'api.postalpincode.in/pincode'

  constructor(private http:HttpClient) { 
    
  }

  fetchAddress(pincode:string){
    this.http.get(`${this.rootUrl}/${this.postalResource}/${pincode}`)
  }

  fetchDistrictNames(){
    this.http.get(`${this.rootUrl}/${this.postalResource}/getAllState`)

  }

  fetchDetailsBasedPostalPinCode(pincode:string){
    return this.http.get(`${this.postalApiUrl}/pincode/${pincode}`)
  }
}
