import {
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ISiblings } from '@utils/interfaces/sibilings.interface';
import { AppMatTabComponent } from '@widgets/components/tab/tab.component';
import { Subject, takeUntil } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import { sibilingFormModel } from './models/sibiling.model';
import { SiblingapiService } from './services/siblingapi.service';

@Component({
  selector: 'app-sibilings',
  templateUrl: './sibilings.component.html',
  styleUrls: ['./sibilings.component.scss'],
})
export class SibilingsComponent {
  currentfeatureModule: string = RouterString.SIBILINGS;

  constructor() {}

  ngOnInit() {
    () => {};
  }
}
