import { Component, OnInit } from '@angular/core';
import { DashboardFacadeService } from '../../services/dashboard_facade.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
})
export class StudentCardComponent implements OnInit {
  maleCount: number = 0;
  femaleCount: number = 0;

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
    for (let item of arr) {
      if (item.studentGender.toLowerCase() === 'male') this.maleCount++;
      if (item.studentGender.toLowerCase() === 'female') this.femaleCount++;
    }
  }
  
}
