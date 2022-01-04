import { Directive } from '@angular/core';
import { LocalstorageService } from '@shared/services/localstorage.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  constructor(private storage:LocalstorageService) { }

}
