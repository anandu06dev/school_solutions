import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  sidenavUrl = [
   
    {
      url:'/roles-rules',
      icon:'supervisor_account',
      label:'Roles Rules'
    },
    {
      url:'/roles-assign',
      icon:'person',
      label:'Roles Assign'
    },
    {
      url:'/dashboard-settings',
      icon:'window',
      label:'Dashbord'
    },
   
  ]
  constructor() { }

  ngOnInit(): void {
    ()=>{}
  }

}
