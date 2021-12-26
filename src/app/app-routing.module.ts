import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./container/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    data: { animationState: 'fadeAnimation' },
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./container/students/students.module').then(
        (m) => m.StudentsModule
      ),
    data: { animationState: 'fadeAnimation' },
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./container/auth/auth.module').then((m) => m.AuthModule),
    data: { animationState: 'fader' },
  },

  {
    path: 'fees',
    loadChildren: () =>
      import('./container/fees/fees.module').then((m) => m.FeesModule),
    data: { animationState: 'fader' },
  },
  {
    path: 'parents',
    loadChildren: () =>
      import('./container/parents/parents.module').then((m) => m.ParentsModule),
    data: { animationState: 'fader' },
  },
  {
    path: 'siblings',
    loadChildren: () =>
      import('./container/sibilings/sibilings.module').then(
        (m) => m.SibilingsModule
      ),
    data: { animationState: 'fader' },
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
