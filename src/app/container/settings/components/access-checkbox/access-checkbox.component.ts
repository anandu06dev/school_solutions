import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { IAccess } from '@utils/interfaces/access.interface';

@Component({
  selector: 'app-access-checkbox',
  templateUrl: './access-checkbox.component.html',
  styleUrls: ['./access-checkbox.component.scss'],
})
export class AccessCheckboxComponent implements OnInit {
  _access:any = [];
  accessroles:any = {}
  random = Math.random();
  @Input() readonly = false
  @Input() set access(value: IAccess|any){
    this._access =  value.access ? Object.entries(value?.access) : [];
    this.accessroles = {...value}
  }

  @Output() accessRolesEmitter = new EventEmitter<IAccess>();

  constructor() {}

  ngOnInit(): void {
    () => {};
    setTimeout(() => {
      this.readonly = true
    }, 5000);
  }
 

  changeAccessRules(key: string, evnt: any) {
    this.accessroles.access[key] = !this.accessroles.access[key]
    this.accessRolesEmitter.emit(this.accessroles)
  }
}
