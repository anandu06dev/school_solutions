import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { takeUntil } from 'rxjs';
import { SettingsService } from '../../services/settings.service';
import { roles } from './roles';

@Component({
  selector: 'app-roles-rules',
  templateUrl: './roles-rules.component.html',
  styleUrls: ['./roles-rules.component.scss'],
})
export class RolesRulesComponent implements OnInit {
  rolesConfig: any = {};
  submitDefinedRolesConfig: any = {};
  definedRoleName:string=''
  mainRoleTableNames: any = [];
  constructor(
    private api: SettingsService,
    private destroy$: AutoUnsubscribe,
    private fb: FormBuilder
  ) {
    this.api
      .getRolesRules()
      .pipe(takeUntil(destroy$))
      .subscribe((data: any) => {
        this.mainRoleTableNames = Object.keys(data);
        this.rolesConfig = { ...data };
      });
  }

  ngOnInit(): void {
    () => {};
  }
  emitRoles(event: any, key: any, tableName: any) {
    let temp = { ...this.rolesConfig };
    temp[tableName][key] = event;
    this.submitDefinedRolesConfig = {...temp}
  }

  submit() {
    let temp:any = {};
    temp[this.definedRoleName] = this.submitDefinedRolesConfig
    console.log(temp);
  }
  cancel(){}
}
