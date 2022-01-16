import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TableButtonAction } from '@utils/interfaces/tableButtonAction'
import { TableConsts } from '@widgets/mat-custom-table/consts/table'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[action-buttons]',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css'],
})
export class ActionButtonsComponent implements OnInit {
  constructor() { }

  ngOnInit() { 
    ()=>{}
  }

  @Input() value!: string
  @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()

  onEditClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    })
  }
  onDeleteClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.delete })
  }
  onViewClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.view })
  }

}
