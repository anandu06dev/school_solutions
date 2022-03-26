import { Component, OnInit } from '@angular/core';
import { groupBy } from '@utils/utility';
import { DashboardFacadeService } from '../../services/dashboard_facade.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
})
export class StudentCardComponent implements OnInit {
  maleCount: number = 0;
  femaleCount: number = 0;
  classBasedCount:any=[];

  constructor(private facade: DashboardFacadeService) {}

  ngOnInit(): void {
    this.facade.selectAllStudentDetails.pipe().subscribe((d) => {
      if (Array.isArray(d) && d.length > 0) {
        this.iterateStudentRecords(d);
      }
    });
  }

  iterateStudentRecords(arr: any) {
    this.maleCount = 0;
    this.femaleCount = 0;
    let classBasedCount = groupBy('studentClass',arr);
    // this.classBasedCount = classBasedCount.map((i:any)=>{
    //   return {label:`class ${i.key}`,count:i.values.length}
    // })
    this.classBasedCount = Array(15).fill(0).map((i:any,index)=>{
      return {label:`class ${index}`,count:Math.random()}
    })
    for (let item of arr) {
      if (item.studentGender.toLowerCase() === 'male') this.maleCount++;
      if (item.studentGender.toLowerCase() === 'female') this.femaleCount++;
    }
  }
  
}
