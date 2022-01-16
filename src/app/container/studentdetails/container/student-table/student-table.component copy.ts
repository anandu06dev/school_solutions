import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IStudentSearchModel } from '@utils/interfaces/studentSearch.interface';
import { studentDetail } from '../../models/studentDetail.model';
import { IShowTableOnBottomSheet, BottomsheetsComponent } from '../../components/bottomsheets/bottomsheets.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  studentDetails!: IStudentDetails[];
  constructor(private actRoute: ActivatedRoute, private bottomSheet: MatBottomSheet,private router:Router) {}

  displayedColumns: string[] = ['avatar', ...Object.keys(studentDetail)];
  dataSource = new MatTableDataSource<IStudentDetails>([]);
  clickedRows = new Set<IStudentDetails>();

  multiselect:boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    console.log(this.actRoute.snapshot)
    this.studentDetails = this.actRoute.snapshot?.data?.['students'] || [];
    console.log(this.studentDetails)
    this.dataSource = new MatTableDataSource<IStudentDetails>(
      this.studentDetails
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectedRows(row: IStudentDetails) {
    if(this.multiselect){
      if (this.clickedRows.has(row)) {
        this.clickedRows.delete(row);
      } else {
        this.clickedRows.add(row);
      }

    }else{
      this.clickedRows.clear()
      this.clickedRows.add(row);

    }
    this.openBottomSheet(row)
  }
  openBottomSheet(student: IStudentDetails) {
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

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}


// this.data = [
  //   {
  //     "name": "Molly Pope",
  //     "date": "Jul 27, 2021",
  //     "company": "Faucibus Orci Institute",
  //     "country": "New Zealand",
  //     "city": "Campinas",
  //     "phone": "1-403-634-0276"
  //   },
  //   {
  //     "name": "Alfonso Vinson",
  //     "date": "May 11, 2021",
  //     "company": "Non Ante Corp.",
  //     "country": "United Kingdom",
  //     "city": "Redlands",
  //     "phone": "1-405-411-6336"
  //   },
  //   {
  //     "name": "Camden David",
  //     "date": "Aug 6, 2022",
  //     "company": "Cursus Et LLP",
  //     "country": "Nigeria",
  //     "city": "Iguala",
  //     "phone": "(415) 628-6853"
  //   },
  //   {
  //     "name": "Levi Goff",
  //     "date": "Nov 3, 2021",
  //     "company": "Vitae Incorporated",
  //     "country": "Sweden",
  //     "city": "Manavgat",
  //     "phone": "1-545-823-7985"
  //   },
  //   {
  //     "name": "Madaline Leach",
  //     "date": "Jun 13, 2022",
  //     "company": "Erat Volutpat Corp.",
  //     "country": "Chile",
  //     "city": "Niterói",
  //     "phone": "1-678-156-9674"
  //   },
  //   {
  //     "name": "Camden David",
  //     "date": "Aug 6, 2022",
  //     "company": "Cursus Et LLP",
  //     "country": "Nigeria",
  //     "city": "Iguala",
  //     "phone": "(415) 628-6853"
  //   },
  //   {
  //     "name": "Levi Goff",
  //     "date": "Nov 3, 2021",
  //     "company": "Vitae Incorporated",
  //     "country": "Sweden",
  //     "city": "Manavgat",
  //     "phone": "1-545-823-7985"
  //   },
  //   {
  //     "name": "Madaline Leach",
  //     "date": "Jun 13, 2022",
  //     "company": "Erat Volutpat Corp.",
  //     "country": "Chile",
  //     "city": "Niterói",
  //     "phone": "1-678-156-9674"
  //   }
  // ];