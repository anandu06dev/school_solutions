import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions } from '@angular/forms';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { ILogin } from '@utils/interfaces/auth';
import { ConfirmedValidator, deleteMentionedKeys } from '@utils/utility';
import { takeUntil } from 'rxjs';
import { AuthapiService } from '../../services/authapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  hide = true;
  constructor(public fb: FormBuilder,private authService:AuthapiService,private destroy$:AutoUnsubscribe,private storage:LocalstorageService) {
    this.LoginForm = this.fb.group(
      {
        username: ['Srinivasan', Validators.required],
        password: ['1234', Validators.required],
        email: ['rsrini1992@outlook.com', [Validators.required, Validators.email]],
      }
    );
  }

  get f(){
    return this.LoginForm;
  }

  ngOnInit(): void {
    () => {};
  }

  login(){
    let fValue= (deleteMentionedKeys(['retypePassword'],{...this.LoginForm.value} )) as ILogin;
    this.authService.login(fValue).pipe(takeUntil(this.destroy$)).subscribe((d:any)=>{

      if(d?.accessToken){
        this.storage.setData({'token':d.accessToken})
      }
    })
  }


}
