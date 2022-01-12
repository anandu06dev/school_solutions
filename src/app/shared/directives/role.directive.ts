import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
} from '@angular/core';
import { LocalstorageService } from '@shared/services/localstorage.service';

@Directive({
  selector: '[appUserRole]',
})
export class RoleDirective implements OnChanges {
  allowedRoles: string[] | undefined;
  actualAvailableRoles = ['FULL_ADMIN', 'NAIVE_USER'];
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private storageService: LocalstorageService
  ) {}
  // @Input()
  // set appRole(allowedRoles: string[]) {
  //   this.allowedRoles = allowedRoles;
  //   if (!this.allowedRoles || this.allowedRoles.length === 0) {
  //     this.viewContainer.clear();
  //     return;
  //   }
  //   const isAllowed =
  //     this.actualAvailableRoles.filter(
  //       (role) => this.allowedRoles && this.allowedRoles.includes(role)
  //     ).length > 0;
  // }
  ngOnChanges() {
    this.isAllowed(this.storageService.get('role'));
  }
  isAllowed(currentRole: string) {
    const isAllowed = this.actualAvailableRoles.some(
      (role) => this.allowedRoles && this.allowedRoles.includes(currentRole)
    );
    isAllowed
      ? this.viewContainer.createEmbeddedView(this.templateRef)
      : this.viewContainer.clear();
  }
}
