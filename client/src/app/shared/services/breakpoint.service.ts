import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, Inject, Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export enum BreakPoint{
    XSmall,Small,Medium,Large,XLarge
}

@Injectable({providedIn:'root'})
export class BreakPointService{
    private _currentScreen = new BehaviorSubject<any>(null)
    set currentScreen(value:any){
        this._currentScreen.next(value);
    }
    get currentScreen(){
        return this._currentScreen.asObservable()
    }
}
