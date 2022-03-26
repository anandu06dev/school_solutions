import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { RootMenu } from '@utils/utility';
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
  definedRoleName: string = '';
  mainRoleTableNames: any = [];
  menu = RootMenu.map((item: any) => {
    item['checkbox'] = false;
    return item;
  });
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

    let url = ['dashboard'];
    this.menu = this.menu.map((item) => {
      if (url.includes(item.label.toLowerCase())) item['checkbox'] = true;
      else item['checkbox'] = false;
      return item
    });
    console.log(this.menu);
  }

  ngOnInit(): void {
    () => {};
  }
  emitRoles(event: any, key: any, tableName: any) {
    let temp = { ...this.rolesConfig };
    temp[tableName][key] = event;
    this.submitDefinedRolesConfig = { ...temp };
  }
  toggleSwitch(item:any){
    this.menu = this.menu.map(i=>{
      if(item.label.toLowerCase() === i.label.toLowerCase()) i.checkbox = !i.checkbox
      return i;
    })
  }

  checkAllBoxes(e: any, t: any) {
    // let temp = { ...this.rolesConfig[t] };
    // Object.entries(temp).forEach((column) => {
    //   let [key, values]: any = column;
    //   Object.entries(values).forEach((item2) => {
    //     let [key2, value2]: any = item2;

    //     let access = { read: true, write: true, update: true, delete: true };
    //     if (key2 === 'access') {
    //       value2 = { ...value2, ...access };
    //     }
    //     temp[key][key2] = value2;
    //   });
    // });
    // this.rolesConfig = { ...this.rolesConfig, ...temp };
    // e.stopPropagation();
    return false;
  }
  submit() {
    let temp: any = {};
    temp[this.definedRoleName] = this.submitDefinedRolesConfig;
    console.log(temp,this.menu);
  }
  cancel() {}
}
