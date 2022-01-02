import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ISiblings } from '@utils/interfaces/sibilings.interface';
import { Observable } from 'rxjs';
import { IShowTableOnBottomSheet, BottomsheetsComponent } from '../../components/bottomsheets/bottomsheets.component'

@Component({
  selector: 'app-sibilings-list',
  templateUrl: './sibilings-list.component.html',
  styleUrls: ['./sibilings-list.component.scss']
})
export class SibilingsListComponent implements OnInit {

  dataSource = new MatTableDataSource<ISiblings[]>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  siblingDetails: any;
  constructor(
    private actRoute: ActivatedRoute,
    private router:Router,
    private bottomSheet: MatBottomSheet
  ) {}
 
  ngOnInit(): void {
    this.siblingDetails = this.actRoute.snapshot?.data?.['siblings'] || [];
    this.dataSource = new MatTableDataSource<ISiblings[]>(
      this.siblingDetails
    );
    this.obs = this.dataSource.connect();
    this.dataSource.paginator = this.paginator;
  }


  openBottomSheet(data: any) {
    let forBottomSheet: IShowTableOnBottomSheet;

    let sheetRef = this.bottomSheet.open(BottomsheetsComponent, {
      data: {
        viewType: 'list',
        renderData: { ...data },
        data: { ...data },
        label: 'Sibling lists',
      },
    });
    sheetRef.afterDismissed().subscribe((data) => {
      console.log(data)
      if (data) {
        this.router.navigateByUrl(`studentSibilings/form/edit/${data?.id}`)
      }
    });
  }
  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}
