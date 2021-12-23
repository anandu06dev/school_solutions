import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
       {
        path: 'dashboard',
        loadChildren: () =>
            import('./container/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
       { path: 'students', loadChildren: () => import('./container/students/students.module').then(m => m.StudentsModule) },
       { path: 'fees', loadChildren: () => import('./container/fees/fees.module').then(m => m.FeesModule) },
       { path: 'parents', loadChildren: () => import('./container/parents/parents.module').then(m => m.ParentsModule) },
       { path: 'siblings', loadChildren: () => import('./container/sibilings/sibilings.module').then(m => m.SibilingsModule) },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
