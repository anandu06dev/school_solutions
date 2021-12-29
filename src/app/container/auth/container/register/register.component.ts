import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { NotificationService } from '@shared/services/notification.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { ILogin } from '@utils/interfaces/auth';
import { ConfirmedValidator, deleteMentionedKeys } from '@utils/utility';
import { pluck, takeUntil } from 'rxjs';
import { AuthapiService } from '../../services/authapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  viewProviders: [AutoUnsubscribe],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hide = true;
  toggleLogin = false;
  showImage: boolean = false;
  constructor(
    public fb: FormBuilder,
    private authService: AuthapiService,
    private destroy$: AutoUnsubscribe,
    private notifier:NotificationService,
    private storage:LocalstorageService
  ) {
  
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        retypePassword: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.email],
        ],
      },
      {
        validator: ConfirmedValidator('password', 'retypePassword'),
      } as AbstractControlOptions
    );
  }

  get f() {
    return this.registerForm;
  }

  ngOnInit(): void {
    this.storage.rxStorage.asObservable().pipe(pluck('currentScreenSize'),takeUntil(this.destroy$)).subscribe((screen)=>{
      this.showImage = screen.toLowerCase().includes('small') ? false :true
    })
  }

  register() {
    let fValue = deleteMentionedKeys(['retypePassword'], {
      ...this.registerForm.value,
    }) as ILogin;
    this.authService
      .register(fValue)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: {success:string,message:string}| any) => {
        if(data?.success){
          this.toggleLogin = true;
          this.notifier.successNotification(data?.message)
        }
      });
  }



}
