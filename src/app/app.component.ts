import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { Component } from '@angular/core'
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router'
import { BreakPointService } from '@shared/services/breakpoint.service'
import { LocalstorageService } from '@shared/services/localstorage.service'
import { IToolBarMenu } from '@utils/interfaces/toolbarmenu.interface'
import { MenuItemDef } from 'ag-grid-community'
import { filter, Observable, of, Subject, takeUntil } from 'rxjs'
import { menu } from './app.model'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    username = 'Srini'
    role = 'Admin'
    toggleSidebar: boolean = false

    loadLayout$: Observable<boolean> = of(false)

    menuItems: IToolBarMenu[] = [...menu]
    destroyed = new Subject<void>()

    // Create a map to display breakpoint names for demonstration purposes.
    displayNameMap = new Map([
        [Breakpoints.XSmall, 'XSmall'],
        [Breakpoints.Small, 'Small'],
        [Breakpoints.Medium, 'Medium'],
        [Breakpoints.Large, 'Large'],
        [Breakpoints.XLarge, 'XLarge'],
    ])

    title = 'client'
    selectedMenu!: IToolBarMenu;

    loadAuthModules:boolean = true;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private breakPointService: BreakPointService,
        private storageService:LocalstorageService,
        private router:Router
    ) {
        this.loadLayout$ = of(true);
        let auth = ['/auth/login','/auth/register'];
        
        router.events.subscribe((url:any) =>{
            if(url instanceof NavigationStart){
               this.loadAuthModules = auth.includes(url.url) ? true : false
            }
            if(url instanceof NavigationEnd){
                this.loadAuthModules = auth.includes(url.urlAfterRedirects) ? true : false;
            }

         });

        breakpointObserver
            .observe([
                Breakpoints.XSmall,
                Breakpoints.Small,
                Breakpoints.Medium,
                Breakpoints.Large,
                Breakpoints.XLarge,
            ])
            .pipe(takeUntil(this.destroyed))
            .subscribe((result) => {
                for (const query of Object.keys(result.breakpoints)) {
                    if (result.breakpoints[query]) {
                        let currentScreenSize =
                            this.displayNameMap.get(query) ?? 'Unknown'
                        breakPointService.currentScreen = currentScreenSize;
                        this.storageService.setData({currentScreenSize:currentScreenSize})
                    }
                }
            })

    }
    ngOnDestroy() {
        this.destroyed.next()
        this.destroyed.complete()
    }
    ngOnInit(): void {    
        setTimeout(() => {
            this.loadLayout$ = of(false)
        },0.5 * 1000)
    }

    loadRouteToStorage(menu:IToolBarMenu):void{
        this.selectedMenu = {...menu};        
    }
    //events.subscribe(d=>console.log(d))
}