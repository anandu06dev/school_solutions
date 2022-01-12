import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from '@core/gaurds/is-authenticated.guard';
import { RolesGuard } from '@core/gaurds/roles.guard';
import { AccessDeniedComponent } from './notAccess';
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
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    canActivate: [IsAuthenticatedGuard],
  },
  // {
  //   path: RouterString.AUTH,
  //   loadChildren: () =>
  //     import('./container/auth/auth.module').then((m) => m.AuthModule),
  //   data: { animationState: 'fader' },
  //   runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  //   canActivate: [IsAuthenticatedGuard, RolesGuard],
  // },
  {
    path: RouterString.AUTH,
    loadChildren: () =>
      import('./container/auth/auth.module').then((m) => m.AuthModule),
    data: { animationState: 'fader' },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  },
  {
    path: RouterString.FEES,

    loadChildren: () =>
      import('./container/fees/fees.module').then((m) => m.FeesModule),
    data: { animationState: 'fader', roles: ['FULL_ADMIN', 'NAIVE_USER'] },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    canActivate: [IsAuthenticatedGuard, RolesGuard],
  },
  {
    path: RouterString.PARENTS,

    loadChildren: () =>
      import('./container/parents/parents.module').then((m) => m.ParentsModule),
    data: { animationState: 'fader', roles: ['FULL_ADMIN', 'NAIVE_USER'] },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    canActivate: [IsAuthenticatedGuard, RolesGuard],
  },
  {
    path: RouterString.SIBILINGS,

    loadChildren: () =>
      import('./container/sibilings/sibilings.module').then(
        (m) => m.SibilingsModule
      ),
    data: {
      animationState: 'fader',
      reload: true,
      roles: ['FULL_ADMIN', 'NAIVE_USER'],
    },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    canActivate: [IsAuthenticatedGuard, RolesGuard],
  },
  {
    path: RouterString.BUSROUTE,
    loadChildren: () =>
      import('./container/bus-route/bus-route.module').then(
        (m) => m.BusRouteModule
      ),
    data: { animationState: 'fader', reload: true, roles: ['FULL_ADMIN'] },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    canActivate: [IsAuthenticatedGuard, RolesGuard],
  },
  {
    path: RouterString.ADDRESS,
    loadChildren: () =>
      import('./container/address/address.module').then((m) => m.AddressModule),
    data: {
      animationState: 'fader',
      reload: true,
      roles: ['FULL_ADMIN', 'NAIVE_USER'],
    },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    canActivate: [IsAuthenticatedGuard, RolesGuard],
  },
  {
    path: RouterString.STUDENTS,
    loadChildren: () =>
      import('./container/studentdetails/studentdetails.module').then(
        (m) => m.StudentdetailsModule
      ),
    data: { animationState: 'fader', reload: true, roles: ['FULL_ADMIN'] },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    canActivate: [IsAuthenticatedGuard, RolesGuard],
  },

  { path: 'noAccess', component: AccessDeniedComponent },

  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
