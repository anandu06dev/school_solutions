import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-comp',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent{

  @Input() showText:boolean = false
  @Input() setText:string = ''


  constructor() { }


}
