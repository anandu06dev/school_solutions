import { Injectable } from '@angular/core';
import { Page } from '@utils/interfaces/page.meta';
import { ISiblings } from '@utils/interfaces/sibilings.interface';
import { Observable } from 'rxjs';
import { Query, StoreConfig } from 'src/app/store_decorators';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({featureKey:'siblingDetails'})
export class SiblingFacadeService {

  @Query({ featureKey: 'siblingDetails', select: 'allSiblingsInfo' })
  selectAllSiblingsDetails!: Observable<ISiblings>;
  @Query({ featureKey: 'siblingDetails', select: 'pagesiblingdetails' })
  pageSiblingsDetails!: Observable<Page>;

  constructor() { }
}
