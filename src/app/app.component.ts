import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { fader } from '@utils/animations/fader';
import { IToolBarMenu } from '@utils/interfaces/toolbarmenu.interface';
import { currentViewMapTable, RootMenu, screenObserve } from '@utils/utility';
import {
  delay,
  EMPTY,
  filter,
  Observable,
  of,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { StudentFacadeService } from './container/studentdetails/services/students.facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
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
    private router: Router,
    private facade: StudentFacadeService
  ) {
    this.loadLayout$ = of(true);
    let auth = ['/auth/login', '/auth/register', '/noAccess'];

    router.events
      .pipe(
        takeUntil(this.destroyed),
        tap((route) => this.routeUiInit(auth, route)),
        delay(10), // just for fancy animation
        filter(
          (e) =>
            e instanceof NavigationStart ||
            e instanceof NavigationEnd ||
            e instanceof NavigationCancel ||
            e instanceof NavigationError
        )
        // debounceTime(500)
      )
      .subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.routeUiEnd(auth, e);
        }
        if (e instanceof NavigationCancel || e instanceof NavigationError) {
          this.router.navigateByUrl('/auth/login');
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
    this.loadLayout$ = of(false).pipe(delay(2 * 1000)); // jsut for fancy animation
    this.storageService.setData({ role: 'FULL_ADMIN' });
  }

  loadRouteToStorage(menu: IToolBarMenu): void {
    this.selectedMenu = { ...menu };
    if (this.selectedMenu.url?.toLowerCase().includes('logout')) {
      this.router.navigateByUrl('/auth/login');
      this.loadAuthModules = false;
    } else {
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }

  routeUiInit(auth: any, url: any) {
    this.showText = true;
    this.loadAuthModules = auth.includes(url.url) ? true : false;
  }

  routeUiEnd(auth: any, url: any): Observable<any> {
    let urlNavigation = [...RootMenu].find((i: any) => {
      if (i.url === url?.urlAfterRedirects) return i;
      // this.loadLayout$ = of(false)
    });
    this.loadRouteToStorage(urlNavigation as IToolBarMenu);
    this.loadAuthModules = auth.includes(url.urlAfterRedirects) ? true : false;
    this.showText = false;
    return EMPTY;
  }
  ngAfterViewInit() {
    if (this.loadAuthModules === false)
      this.facade
        .getStudentListFacade({ page: 1, take: 1*100000 })
        .pipe(takeUntil(this.destroyed))
        .subscribe();
  }
}
