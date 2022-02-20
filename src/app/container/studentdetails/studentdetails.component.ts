import { Component, OnInit } from '@angular/core';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { initPage, Page } from '@utils/interfaces/page.meta';
import { concatMap, map, pluck, take, takeUntil, tap } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import { EntityStore } from 'src/app/store/store.service';
import { StudentDetailsFacade } from './services/students.facade';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss'],
  
})
export class StudentdetailsComponent {
  currentfeatureModule: string = RouterString.STUDENTS;

  constructor(
    private facade: StudentDetailsFacade,
  ) {
    
  }

  ngOnInit() {
   const initPaged:Page = {...initPage};
    initPaged.page = 1;
    initPaged.take = 100000;
    this.facade.getStudentListFacade(initPaged).pipe(take(1)).subscribe();
  }


}
