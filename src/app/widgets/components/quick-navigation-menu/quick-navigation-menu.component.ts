import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-navigation-menu',
  templateUrl: './quick-navigation-menu.component.html',
  styleUrls: ['./quick-navigation-menu.component.scss']
})
export class QuickNavigationMenuComponent implements OnInit {

  @Input() name:string ='';
  @Input() admissionNo:string='';

  constructor() { }

  ngOnInit(): void {
    ()=>{}
  }

}
