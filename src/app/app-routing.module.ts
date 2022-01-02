import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterString } from './routerStringDeclaration';

const routes: Routes = [
  {
    path: RouterString.DASHBOARD,
    loadChildren: () =>
      import('./container/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    data: { animationState: 'fadeAnimation' },
  },
  // {
  //   path: RouterString.STUDENTS+'sdfsdfsdf',
  //   loadChildren: () =>
  //     import('./container/students/students.module').then(
  //       (m) => m.StudentsModule
  //     ),
  //   data: { animationState: 'fadeAnimation' },
  // },
  {
    path: RouterString.AUTH,
    loadChildren: () =>
      import('./container/auth/auth.module').then((m) => m.AuthModule),
    data: { animationState: 'fader' },
  },
  {
    path: RouterString.AUTH,
    loadChildren: () =>
      import('./container/auth/auth.module').then((m) => m.AuthModule),
    data: { animationState: 'fader' },
  },
  {
    path: RouterString.FEES,

    loadChildren: () =>
      import('./container/fees/fees.module').then((m) => m.FeesModule),
    data: { animationState: 'fader' },
  },
  {
    path: RouterString.PARENTS,

    loadChildren: () =>
      import('./container/parents/parents.module').then((m) => m.ParentsModule),
    data: { animationState: 'fader' },
  },
  {
    path: RouterString.SIBILINGS,

    loadChildren: () =>
      import('./container/sibilings/sibilings.module').then(
        (m) => m.SibilingsModule
      ),
    data: { animationState: 'fader', reload: true },
  },
  {
    path: RouterString.BUSROUTE,
    loadChildren: () =>
      import('./container/bus-route/bus-route.module').then(
        (m) => m.BusRouteModule
      ),
  },
  {
    path: RouterString.ADDRESS,
    loadChildren: () =>
      import('./container/address/address.module').then((m) => m.AddressModule),
  },
  {
    path: RouterString.STUDENTS,
    loadChildren: () =>
      import('./container/studentdetails/studentdetails.module').then(
        (m) => m.StudentdetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
