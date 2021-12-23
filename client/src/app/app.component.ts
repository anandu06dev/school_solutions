import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { Component } from '@angular/core'
import { BreakPointService } from '@shared/services/breakpoint.service'
import { LocalstorageService } from '@shared/services/localstorage.service'
import { IToolBarMenu } from '@utils/interfaces/toolbarmenu.interface'
import { MenuItemDef } from 'ag-grid-community'
import { Observable, of, Subject, takeUntil } from 'rxjs'
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

    constructor(
        private breakpointObserver: BreakpointObserver,
        private breakPointService: BreakPointService,
        private storageService:LocalstorageService,
    ) {
        this.loadLayout$ = of(true)

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
}
