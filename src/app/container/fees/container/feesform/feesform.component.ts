import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feesform',
  templateUrl: './feesform.component.html',
  styleUrls: ['./feesform.component.scss']
})
export class FeesformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ()=>{}
  }

  selectedValue(event: any) {
    console.log(event)
    this.updateAddmissinNo(event);
  }
  updateAddmissinNo(value: any) {
    console.log(value)
    // this.siblingDetailsForms.patchValue({ admissionNo: value });
  }
}
