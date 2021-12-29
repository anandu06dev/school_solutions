import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakPointService } from '@shared/services/breakpoint.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { INavTabMenu } from '@utils/interfaces/navTabMenu.interface';
import { headerPositionOnsmallScreen, loadResponsiveTabMenu } from '@utils/utility';
import { Observable, takeUntil, tap } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss'],
})
export class FeesComponent{
  currentfeatureModule:string = RouterString.FEES
}
