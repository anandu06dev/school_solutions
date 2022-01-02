import { Component, OnInit } from '@angular/core';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
  currentfeatureModule: string = RouterString.STUDENTS;

  constructor() { }

  ngOnInit(): void {
    ()=>{}
  }

}
