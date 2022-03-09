import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Page } from '@utils/interfaces/page.meta';
import { Observable, map, switchMap, take, Subscription } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import {
  BottomsheetsComponent,
  IShowTableOnBottomSheet,
} from '../components/bottomsheets/bottomsheets.component';
import { StudentFacadeService } from '../services/students.facade.service';
import { StudentDetailsFacade } from '../services/students.facade_bck';

export interface IStudentDetailsCoreLogicFacade {
  abstractingOpenBottomSheet(student: any, bottomSheet: MatBottomSheet, router: Router): void;
  // paginationData(facade: StudentFacadeService): Observable<any>;
  // loadStudentDetails(facade: StudentFacadeService): Observable<any>;
  abstractingLoadNextSetOfRecords(facade: StudentFacadeService): Subscription;
}

export abstract class StudentDetailsCoreLogicFacade
  implements IStudentDetailsCoreLogicFacade {
  paginationData(facade: StudentFacadeService): Observable<any> {
    throw new Error('Method not implemented.');
  }
  loadStudentDetails(facade: StudentFacadeService): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public abstract pagination$: Observable<Page>;
  public abstract loadStudentDetails$: Observable<any>;
  public abstractingOpenBottomSheet(
    student: any,
    bottomSheet: MatBottomSheet,
    router: Router
  ) {
    return bottomSheet
      .open(BottomsheetsComponent, {
        data: {
          viewType: 'list',
          renderData: { ...student },
          data: { ...student },
          label: 'Student lists',
        },
      })
      .afterDismissed()
      .pipe(take(1))
      .subscribe((data: any) => {
        if (data) {
          router.navigateByUrl(
            `${RouterString.STUDENTS}/form/edit/${data?.admissionNo}`
          );
        }
      });
  }

  // public paginationData = (facade: StudentDetailsFacade): Observable<any> =>
  //   facade.getPaginationData();

  // public loadStudentDetails = (facade: StudentDetailsFacade) =>
  //   facade.loadStudentDetails();

  public abstractingLoadNextSetOfRecords = (
    facade: StudentFacadeService
  ): Subscription =>
    this.loadNextRec()
      .pipe(
        take(1),
        switchMap((d) => facade.getStudentListFacade(d))
      )
      .subscribe();
  private loadNextRec = () =>
    this.pagination$.pipe(map((d) => this.mapPages(d)));

  private mapPages(d: Page): { page: number; take: number } {
    let { page, take } = d;
    let temp: any = { page, take };
    if (d.hasNextPage) temp.page = temp.page ? temp.page + 1 : 1;
    return temp;
  }
}
