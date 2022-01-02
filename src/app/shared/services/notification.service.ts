import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private small_screen_position: 'top-center' = 'top-center';
  private large_screen_position: 'top-right' = 'top-right';
  private defaultStyle = {
    style: {
      'box-shadow':
        '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      padding: '16px',
    },
  };
  constructor(
    private storage: LocalstorageService,
    private toaster: HotToastService
  ) {
  }
  public successNotification(message: string = '') {
    let pos = this.storage
      .get('currentScreenSize')
      .toLowerCase()
      .includes('small')
      ? this.small_screen_position
      : this.large_screen_position;
    this.toaster.success(message, { position: pos,...this.defaultStyle });
  }
  public warningNotification(message: string = '') {
    let pos = this.storage
      .get('currentScreenSize')
      .toLowerCase()
      .includes('small')
      ? this.small_screen_position
      : this.large_screen_position;
    this.toaster.warning(message, { position: pos,...this.defaultStyle });
  }
  public errorNotification(message: string = '') {

    let style = {...this.defaultStyle.style,...{color:'#dc3545'}}
    let position = this.storage
      .get('currentScreenSize')
      .toLowerCase()
      .includes('small')
      ? this.small_screen_position
      : this.large_screen_position;
    this.toaster.error(message, { position,style,dismissible:true,});
  }
}
