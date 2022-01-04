import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ISiblings } from '@utils/interfaces/sibilings.interface';
import { Observable } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import {
  IShowTableOnBottomSheet,
  BottomsheetsComponent,
} from '../../components/bottomsheets/bottomsheets.component';

@Component({
  selector: 'app-sibilings-list',
  templateUrl: './sibilings-list.component.html',
  styleUrls: ['./sibilings-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SibilingsListComponent implements OnInit {
  dataSource = new MatTableDataSource<ISiblings[]>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  siblingDetails: any;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.siblingDetails = this.actRoute.snapshot?.data?.['siblings'] || [];
    console.log(this.actRoute.snapshot?.data);
    this.siblingDetails = this.addStudentFirstName(this.siblingDetails);
    this.dataSource = new MatTableDataSource<ISiblings[]>(this.siblingDetails);
    this.obs = this.dataSource.connect();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private addStudentFirstName(data: []) {
    return data.length
      ? data.map((i: any) => {
         
          return i;
        })
      : [];
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
      if (data) {
        this.router.navigateByUrl(
          `${RouterString.SIBILINGS}/form/edit/${data?.id}`
        );
      }
    });
  }
  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}
