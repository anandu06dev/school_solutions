import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { INavTabMenu } from '@utils/interfaces/navTabMenu.interface';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss'],
})
export class FeesComponent implements OnInit {
  matTabMenu: INavTabMenu[] = [
    { label: 'table', url: '/table', icon: 'table_view' },
    { label: 'list', url: '/list', icon: 'list_view' },
    { label: 'form', url: '/form/new', icon: 'fact_check' },
  ];
  activeLink: INavTabMenu = this.matTabMenu[0];
  currentScreen$!: Observable<string>;
  renderTabMenu: INavTabMenu[] = [];
  headerPosition: 'above' | 'below' = 'above';

  constructor(
    private destroy$: AutoUnsubscribe,
    private breakPointService: BreakPointService,
    private router: Router
  ) {
    this.currentScreen$ = breakPointService.currentScreen;
    this.renderTabMenu = [...this.matTabMenu];
  }

  ngOnInit(): void {
    this.currentScreen$.pipe(takeUntil(this.destroy$)).subscribe((d) => {
      if (d.toLowerCase().includes('small')) {
        this.renderTabMenu = this.matTabMenu.filter(
          (i: any) => i.label != 'table' && i
        );
      } else {
        this.renderTabMenu = [...this.matTabMenu];
      }
      this.headerPosition = d.toLowerCase().includes('small')
        ? 'below'
        : 'above';
    });
    this.navigate(this.renderTabMenu[0]);
  }

  navigate(link: any) {
    this.activeLink =
      this.renderTabMenu.find((i) => i.url === link.url) || this.matTabMenu[0];
    this.router.navigateByUrl('fees' + link?.url);
  }
}
