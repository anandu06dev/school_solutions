import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { Observable } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { StudentDatashareService } from './services/student-datashare.service';

import { StudentapiService } from './services/studentapi.service';
import {
  defaultColDefinition,
  studentDetailColDef,
} from './studentTableDefinition';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [AutoUnsubscribe],
})
export class StudentsComponent implements OnInit {
  public currentScreen$!: Observable<string>;
  headerPosition: 'above' | 'below' = 'above';
  renderTabMenu: { label: string; view: string; icon?: string }[] = [];

  matTabMenu: { label: string; view: string; icon?: string }[] = [
    {
      label: 'table',
      view: 'tableView',
      icon: 'table_view',
    },
    {
      label: 'lists',
      view: 'listView',
      icon: 'list_view',
    },
    {
      icon: 'fact_check',
      view: 'formsView',
      label: 'Forms',
    },
  ];

  studentColDef: any = [];
  studentRowData: IStudentDetails[] = [];
  selectedIndex$: Observable<0 | 1 | 2 | 3 | 4>;

  constructor(
    private breakPointService: BreakPointService,
    private studentDetails: StudentapiService,
    private dataShare: StudentDatashareService,
    private detroy$: AutoUnsubscribe,
    private router: ActivatedRoute
  ) {
    this.studentColDef = [...studentDetailColDef];
    this.currentScreen$ = breakPointService.currentScreen;
    this.selectedIndex$ = this.dataShare.tabIndex$;
  }

  ngOnInit(): void {
    this.currentScreen$.pipe().subscribe((d) => {
      this.renderTabMenu = [...this.matTabMenu];
      if (d.toLowerCase().includes('small')) {
        this.renderTabMenu = this.matTabMenu.filter(
          (i: any) => i.view != 'tableView' && i
        );
      }
      this.headerPosition = d.toLowerCase().includes('small')
        ? 'below'
        : 'above';
    });
    this.getStudentDetails();
  }


  getStudentDetails(){
    this.studentDetails
    .getStudentDetails()
    .pipe(
      tap((data: any) => {
        this.studentRowData = data ? [...data] : [];
        this.dataShare.updateAllStudentDetails(this.studentRowData);
      }),
      take(1)
    )
    .subscribe();
  }
  ngAfterViewInit() {
    console.log('afterviewinit');

    this.router.params
      .pipe(
        takeUntil(this.detroy$),
        tap((d) => console.log(d))
      )
      .subscribe((d) => {
        console.log(d);
      });
  }
  updateTabIndex(e:any){
    this.dataShare.tabindex = e;
    /**this api call will be trigger based on table or list */
    if(e<2){
        this.getStudentDetails()
    }
  }
}
