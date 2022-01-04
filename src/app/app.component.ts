import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import {
  ActivationEnd,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { fadeAnimation } from '@utils/animations';
import { fader } from '@utils/animations/fader';
import { IToolBarMenu } from '@utils/interfaces/toolbarmenu.interface';
import { currentViewMapTable, RootMenu, screenObserve } from '@utils/utility';
import { MenuItemDef } from 'ag-grid-community';
import { delay, filter, Observable, of, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader],
})
export class AppComponent {
  username = 'Srini';
  role = 'Admin';
  showText: boolean = true;
  toggleSidebar: boolean = false;

  loadLayout$: Observable<boolean> = of(false);

  menuItems: IToolBarMenu[] = [...RootMenu];
  destroyed = new Subject<void>();

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = currentViewMapTable;

  title = 'client';
  selectedMenu!: IToolBarMenu;

  loadAuthModules: boolean = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private breakPointService: BreakPointService,
    private storageService: LocalstorageService,
    private router: Router
  ) {
    this.loadLayout$ = of(true);
    let auth = ['/auth/login', '/auth/register','/noAccess'];

    router.events.pipe().subscribe((url: any) => {
      if (url instanceof NavigationStart) {
        this.loadAuthModules = auth.includes(url.url) ? true : false;
        this.showText = true;
        // this.loadLayout$ = of(true)
      }
      if (url instanceof NavigationEnd) {
        let urlNavigation = [...RootMenu].find((i: any) => {
          if (i.url === url?.urlAfterRedirects) return i;
          // this.loadLayout$ = of(false)
        });
        this.loadRouteToStorage(urlNavigation as IToolBarMenu);
        this.loadAuthModules = auth.includes(url.urlAfterRedirects)
        ? true
        : false;
        this.showText = false;
      }
    });

    breakpointObserver
      .observe(screenObserve)
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            let currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            breakPointService.currentScreen = currentScreenSize;
            this.storageService.setData({
              currentScreenSize: currentScreenSize,
            });
          }
        }
      });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.loadLayout$ = of(false);
    }, 0.5 * 1000);
    this.storageService.setData({role:'FULL_ADMIN'})
  }

  loadRouteToStorage(menu: IToolBarMenu): void {
    this.selectedMenu = { ...menu };
    if (this.selectedMenu.url?.toLowerCase().includes('logout')) {
      this.router.navigateByUrl('/auth/login');
      this.loadAuthModules = false;
    }
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }
  //events.subscribe(d=>console.log(d))
}
