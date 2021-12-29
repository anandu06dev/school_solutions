import { Component, OnInit } from '@angular/core';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-sibilings',
  templateUrl: './sibilings.component.html',
  styleUrls: ['./sibilings.component.scss']
})
export class SibilingsComponent{
  currentfeatureModule:string = RouterString.SIBILINGS

}
