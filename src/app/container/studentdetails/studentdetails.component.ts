import { Component, OnInit } from '@angular/core';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { pluck, takeUntil, tap } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss'],
  providers:[AutoUnsubscribe]
})
export class StudentdetailsComponent {
  currentfeatureModule: string = RouterString.STUDENTS;


  constructor() {}

 
}
