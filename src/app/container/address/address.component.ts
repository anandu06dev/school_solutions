import { Component, OnInit } from '@angular/core';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent{
  currentfeatureModule:string = RouterString.ADDRESS;
}
