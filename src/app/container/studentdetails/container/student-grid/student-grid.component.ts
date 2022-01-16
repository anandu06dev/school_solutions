import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ListConfig } from '@utils/interfaces/listConfig';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { Observable } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import {
  BottomsheetsComponent,
  IShowTableOnBottomSheet,
} from '../../components/bottomsheets/bottomsheets.component';

@Component({
  selector: 'app-student-grid',
  templateUrl: '/student-grid.component.html',
  styleUrls: ['./student-grid.component.scss'],
})
export class StudentGridComponent implements OnInit {
  dataSource = new MatTableDataSource<IStudentDetails>([]);
  studentDetails: any;
  _studentLists: any = [];
  listconfig:ListConfig = {
    avatarInfo:{
      key:'studentFirstName',
      show:true
    },
    mainInfo:{
      key:'studentFirstName',
      secKey:'studentLastName',
    },
    sub1Info:{
      key:'admissionNo',
      label:'#',
      show:true,
    },
    sub2Info:{
      key:'studentBloodGroup',
      label:'Blood Group',
      show:true
    },
    chip1Info:{
      key:'studentClass',
      label:'class',
      show:true
    },
    chip2Info:{
      key:'studentGender',
      label:'class',
      show:true,
      trim:1
    }
  }
  constructor(
    private actRoute: ActivatedRoute,
    private router:Router,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.studentDetails = this.actRoute.snapshot?.data?.['students'] || [];
 
  }

 
  openBottomSheet(student: any) {
    let forBottomSheet: IShowTableOnBottomSheet;

    let sheetRef = this.bottomSheet.open(BottomsheetsComponent, {
      data: {
        viewType: 'list',
        renderData: { ...student },
        data: { ...student },
        label: 'Student lists',
      },
    });
    sheetRef.afterDismissed().subscribe((data) => {
      if (data) {
        this.router.navigateByUrl(`${RouterString.STUDENTS}/form/edit/${data?.admissionNo}`)
      }
    });
  }



 
}
