import { Component, OnInit } from '@angular/core';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent{
  currentfeatureModule:string = RouterString.BUSROUTE
}
