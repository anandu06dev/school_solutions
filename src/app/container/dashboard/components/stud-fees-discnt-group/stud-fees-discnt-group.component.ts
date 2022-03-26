import { Component, OnInit } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartDataset,
  ChartEvent,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { groupBy, mergeMap, reduce, toArray, tap } from 'rxjs/operators';
import { DashboardFacadeService } from '../../services/dashboard_facade.service';
@Component({
  selector: 'app-student-fees-discount-group',
  templateUrl: './stud-fees-discnt-group.component.html',
  styleUrls: ['./stud-fees-discnt-group.component.scss'],
})
export class StudFeesDiscntGroupComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  public barChartLabels = [1,2];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataset[] = [];
  constructor(private facade: DashboardFacadeService) {}

  ngOnInit(): void {
    this.facade.selectAllStudentDetails.pipe().subscribe((d) => {
      if (d && Array.isArray(d)) {
        const byDiscount = this.groupBy('studentDiscount', d);
        this.barChartData = [];
        for (let item of byDiscount) {
          let data = item?.values?.count ?? 0;
          this.barChartData.push({data,label: item.key});
          console.log(this.barChartData)
        }
      }
    });
  }
  groupBy(key: any, array: any) {
    return array.reduce((all: any, current: any) => {
      const existingKey = all.find(
        (existing: any) => existing.key === current[key]
      );
      if (!existingKey) {
        all.push({ key: current[key], values: [current] });
      } else {
        existingKey.values.push(current);
      }
      return all;
    }, []);
  }
}
