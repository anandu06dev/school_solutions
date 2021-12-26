import { Component, OnInit, TemplateRef } from '@angular/core'
import { BreakPointService } from '@shared/services/breakpoint.service'
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service'
import { IStudentDetails } from '@utils/interfaces/studentData'
import { Observable } from 'rxjs'
import {  takeUntil, tap } from 'rxjs/operators'

import { StudentapiService } from './services/studentapi.service'
import {
    defaultColDefinition,
    studentDetailColDef,
} from './studentTableDefinition'

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    providers:[AutoUnsubscribe]
})
export class StudentsComponent implements OnInit {
    public currentScreen$!: Observable<string>
    headerPosition: 'above' | 'below' = 'above'

    matTabMenu: { label: string; view: string; icon?: string }[] = [
        {
            label: 'table',
            view: 'tableView',
            icon: 'table_view',
        },
        {
            label: 'lists',
            view: 'listView',
            icon: 'list_view',
        },
        {
            icon: 'fact_check',
            view: 'formsView',
            label: 'Forms',
        },
    ]

    studentColDef: any = []
    studentRowData: IStudentDetails[] = []

    constructor(private breakPointService: BreakPointService,private studentDetails:StudentapiService,private detroy$:AutoUnsubscribe) {
        // this.studentRowData = studentTable
        this.studentColDef = [...studentDetailColDef]
        this.currentScreen$ = breakPointService.currentScreen
    }

    ngOnInit(): void {
        this.currentScreen$.pipe().subscribe((d) => {
            this.headerPosition = d.toLowerCase().includes('small')
                ? 'below'
                : 'above'
        })
        this.studentDetails.getStudentDetails().pipe(tap((data:any)=>{
            this.studentRowData = data  ?  [...data] : []
        }),takeUntil(this.detroy$)).subscribe()
    }

    getTimeLoaded(number = 0) {
        return Date.now()
    }
}
