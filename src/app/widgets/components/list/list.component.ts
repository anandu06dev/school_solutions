import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListConfig } from '@utils/interfaces/listConfig';
import { listInitSubData } from '@utils/utility';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  cardData!: ListConfig;

  @Input() set listConf(value:any){
    this.cardData.mainInfo = {...this.cardData.mainInfo,...value.mainInfo}
    this.cardData.sub1Info = {...this.cardData.sub1Info , ...value.sub1Info}
    this.cardData.sub2Info = {...this.cardData.sub2Info , ...value.sub2Info}
    this.cardData.chip1Info = {...this.cardData.chip1Info , ...value.chip1Info}
    this.cardData.chip2Info = {...this.cardData.chip2Info , ...value.chip2Info}
    this.cardData.avatarInfo = {...this.cardData.chip2Info , ...value.avatarInfo}


  }
  @Input() data: any;

  selecedData = new Set();


  @Output() selected = new EventEmitter();

  constructor() {
    this.cardData = {
      mainInfo: { ...listInitSubData },
      avatarInfo: {...listInitSubData},
      sub1Info:{...listInitSubData},
      sub2Info:{...listInitSubData},
      chip1Info:{...listInitSubData},
      chip2Info:{...listInitSubData}
    };
  }

  ngOnInit(): void {
    () => {};
  }

  selectedData(data: any) {
    this.selecedData.clear();
    this.selecedData.add(data);
    this.selected.emit({ selected: data });
  }
}
