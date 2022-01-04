import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  template: ` <div
    class="position-absolute start-50 top-50 translate-middle text-center card w-75 shadow p-3 border-0"
  >
    <div class="card-body">
      <p class="text-danger display-1" mat-line>403</p>
      <h2 mat-line>Access forbidden</h2>
      <a (click)="goBack()" class="cursor-pointer shadow-sm p-2 text-decoration-none"> 🔙 Go Back</a>
      <a (click)="goBackLogin()" class="cursor-pointer shadow-sm p-2 text-decoration-none"> 🔙 Go Login</a>

    </div>
  </div>`,
  styles: [],
})
export class AccessDeniedComponent {
  constructor(private location: Location,private router:Router) {}

  goBack = () => this.location.back();
  goBackLogin = () =>this.router.navigateByUrl('/auth/login')
}
