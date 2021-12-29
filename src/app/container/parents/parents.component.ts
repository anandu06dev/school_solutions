import { Component, OnInit } from '@angular/core';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent {
  currentfeatureModule:string = RouterString.PARENTS
}
