import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
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
import { ConnectionService } from '@shared/services/connection-service.service';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { fader } from '@utils/animations/fader';
import { IToolBarMenu } from '@utils/interfaces/toolbarmenu.interface';
import {
  AUTH_URLS,
  currentViewMapTable,
  RootMenu,
  screenObserve,
} from '@utils/utility';
import {
  delay,
  EMPTY,
  filter,
  Observable,
  of,
  Subject,
  take,
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
export class AppComponent implements OnInit, OnDestroy {
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
  networkStatus: boolean = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private breakPointService: BreakPointService,
    private storageService: LocalstorageService,
    private router: Router,
    private facade: StudentFacadeService,
    private connectionService: ConnectionService,
    private http:HttpClient
  ) {
    this.loadLayout$ = of(true);
    let auth = AUTH_URLS;

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
    this.connectionService
      .monitor()
      .pipe(takeUntil(this.destroyed))
      .subscribe((d) => {

        if(this.networkStatus === false && d === true){
          console.log('Went from offline to online')
          this.syncCacheRequest();
        }

        if(this.networkStatus === true && d === false){
          console.log('Went from online to offline')
        }

        this.networkStatus = d;

        
      });
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

  syncCacheRequest() {
    const offline = this.storageService.get('offline');
    if(offline.length){

      for(let i=0;i<offline.length;i++){
        let item = offline[i];
        if(item.method === 'POST'){
          this.http.post(item.url,item.body).pipe(take(1),delay(i*10)).subscribe()
        }
        if(item.method === 'PUT'){
          this.http.put(item.url,item.body).pipe(take(1),delay(i*10)).subscribe()
        }
        if(offline.length === i+1) this.storageService.setData({offline:[]})
      }
    }
  }

}
