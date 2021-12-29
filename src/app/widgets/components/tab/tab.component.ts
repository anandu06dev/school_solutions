import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { INavTabMenu } from '@utils/interfaces/navTabMenu.interface';
import {
  loadResponsiveTabMenu,
  headerPositionOnsmallScreen,
} from '@utils/utility';
import { takeUntil, tap } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  providers: [AutoUnsubscribe],
})
export class AppMatTabComponent implements OnInit {
  renderTabMenu:INavTabMenu[]=[];
  headerPosition: 'above' | 'below' = 'above';
  activeLink: any;
 @Input() featureModulePath:string="";


  constructor(
    private destroy$: AutoUnsubscribe,
    private breakPointService: BreakPointService,
    private router: Router
  ) {
    this.breakPointService.currentScreen
    .pipe(
      takeUntil(this.destroy$),
      tap((d:any) => {
        this.renderTabMenu = loadResponsiveTabMenu(d);
        this.headerPosition = headerPositionOnsmallScreen(d);
      })
    )
    .subscribe();
  }

  ngOnInit(){

    this.navigate(this.renderTabMenu[0]);
  }
 


    navigate(link: any) {
      this.activeLink =
      this.renderTabMenu.find((i) => i.url === link.url) || this.renderTabMenu[0];
        this.router.navigateByUrl(this.featureModulePath + link?.url);
    }
}
