import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secondary-sidenav',
  templateUrl: './secondary-sidenav.component.html',
  styleUrls: ['./secondary-sidenav.component.scss'],
})
export class SecondarySidenavComponent implements OnInit {
  @Input() sidenav: any = [];
  sidenavtoggle: boolean = true;
  clickedNav: any = {};

  constructor(private router: Router, public storage: LocalstorageService) {}

  ngOnInit(): void {
    () => {};
    this.clickedNav  = this.storage.get('sec-nav')
  }
  toggle() {
    this.sidenavtoggle = !this.sidenavtoggle;
  }
  navigateTo(item: any) {
    this.router.navigateByUrl('settings' + item.url);
    this.storage.setData({ 'sec-nav': item });
    this.clickedNav = item;
  }
  goBack() {
    this.storage.setData({ 'sec-nav': '' });
    this.router.navigateByUrl('/settings');
  }
}

