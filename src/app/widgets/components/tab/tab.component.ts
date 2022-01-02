import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { INavTabMenu } from '@utils/interfaces/navTabMenu.interface';
import {
  loadResponsiveTabMenu,
  headerPositionOnsmallScreen,
} from '@utils/utility';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  providers: [AutoUnsubscribe],
})
export class AppMatTabComponent {
  renderTabMenu: INavTabMenu[] = [];
  headerPosition: 'above' | 'below' = 'above';
  activeLink: any;
  url: boolean = false;

  @Input() featureModulePath: string = '';

  constructor(
    private destroy$: AutoUnsubscribe,
    private breakPointService: BreakPointService,
    private router: Router
  ) {
    this.breakPointService.currentScreen
      .pipe(
        takeUntil(this.destroy$),
        tap((d: any) => {
          this.renderTabMenu = loadResponsiveTabMenu(d);
        })
      )
      .subscribe();
  }

  navigate(link: any) {
    this.activeLink =
      this.renderTabMenu.find((i) => i.url === link.url) ||
      this.renderTabMenu[0];
    this.router.navigateByUrl(this.featureModulePath + link?.url);
  }
}
