import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotfoundComponent } from './notfound/notfound.component'

const routes: Routes = [
    
       {
        path: 'dashboard',
        loadChildren: () =>
            import('./container/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
       { path: 'students', loadChildren: () => import('./container/students/students.module').then(m => m.StudentsModule) },
       { path: 'auth', loadChildren: () => import('./container/auth/auth.module').then(m => m.AuthModule) },

       { path: 'fees', loadChildren: () => import('./container/fees/fees.module').then(m => m.FeesModule) },
       { path: 'parents', loadChildren: () => import('./container/parents/parents.module').then(m => m.ParentsModule) },
       { path: 'siblings', loadChildren: () => import('./container/sibilings/sibilings.module').then(m => m.SibilingsModule) },
       { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
       {
        path:'**', redirectTo: '/auth/login'
      }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
