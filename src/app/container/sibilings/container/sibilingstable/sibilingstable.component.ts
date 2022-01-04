import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { ISiblings } from '@utils/interfaces/sibilings.interface';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { take, takeUntil } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import { BottomsheetsComponent, IShowTableOnBottomSheet } from '../../components/bottomsheets/bottomsheets.component';
import { sibilingFormModel } from '../../models/sibiling.model';
import { SiblingapiService } from '../../services/siblingapi.service';

@Component({
  selector: 'app-sibilingstable',
  templateUrl: './sibilingstable.component.html',
  styleUrls: ['./sibilingstable.component.scss'],
  providers: [AutoUnsubscribe],
})
export class SibilingstableComponent implements OnInit {
  action: any;
  admissionId = 0;
  siblingDetails:ISiblings[]=[];

  siblingDetaails: any;
  displayedColumns: string[] = ['studentFirstName',...Object.keys(sibilingFormModel)]
  dataSource = new MatTableDataSource<ISiblings[]>([]);
  clickedRows = new Set<ISiblings>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  multiselect: boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private router:Router,
    private bottomSheet: MatBottomSheet
  ) {
    this.siblingDetaails = this.actRoute.snapshot?.data?.['siblings'] || [];

    this.siblingDetaails =  this.addStudentFirstName(this.siblingDetaails)

  }

  private addStudentFirstName(data:[]){
    return data.length ? data.map((i:any)=>{
      i.studentFirstName = i.studentDetails.studentFirstName;
      return i;
    }):[]
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  selectedRows(row: ISiblings) {
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
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ISiblings[]>(
      this.siblingDetaails
    );
    
  }

   
  openBottomSheet(siblings: ISiblings) {
    let forBottomSheet: IShowTableOnBottomSheet;
  

    let sheetRef = this.bottomSheet.open(BottomsheetsComponent, {
      data: {
        viewType: 'list',
        renderData: { ...siblings },
        data: { ...siblings },
        label: 'Siblings lists',
      },
    });
    sheetRef.afterDismissed().subscribe((data) => {
      if (data) {
        this.router.navigateByUrl(`${RouterString.SIBILINGS}/form/edit/${data?.id}`)
      }
    });
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}
