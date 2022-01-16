import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { INavTabMenu } from '@utils/interfaces/navTabMenu.interface';
import {
  loadResponsiveTabMenu,
  headerPositionOnsmallScreen,
} from '@utils/utility';
import { Observable, takeUntil, tap } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';

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
  url: any;
  value:string=''

  currentView:any;
  tabMenu!: Observable<any>;

  @Input() featureModulePath: string = '';
  formMenu!: INavTabMenu;

  constructor(
    private destroy$: AutoUnsubscribe,
    private breakPointService: BreakPointService,
    private router: Router
  ) {
    this.tabMenu = this.breakPointService.currentScreen.pipe(
      tap((d:any) => {
        let renderTabMenu = loadResponsiveTabMenu(d);
        this.formMenu = {...renderTabMenu[(renderTabMenu.length)-1]}
        this.renderTabMenu = renderTabMenu.filter((i) => i.url !== 'form');
      })
    );
  }

  ngOnInit() {
    this.fetchRouterUrl();
   
  }

  fetchRouterUrl() {
    this.url = this.router.url;
  }
  navigate(link: any) {
    
    // this.activeLink =
    //   this.renderTabMenu.find((i) => i.url === link.url) ||
    //   this.renderTabMenu[0];
    this.currentView = link.label
    this.router.navigateByUrl(this.featureModulePath + link?.url);
  }
}
