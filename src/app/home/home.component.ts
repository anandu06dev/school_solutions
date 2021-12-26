import { Component, OnInit } from '@angular/core';
import { IToolBarMenu } from '@utils/interfaces/toolbarmenu.interface';
import { menu } from '../app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedMenu!: IToolBarMenu;
  menuItems: IToolBarMenu[] = [...menu]
  username = 'Srini'
    role = 'Admin'
    toggleSidebar: boolean = false
  constructor() { }

  ngOnInit(): void {
    ()=>{}
  }
  loadRouteToStorage(menu:IToolBarMenu):void{
    this.selectedMenu = {...menu};        
}

}
