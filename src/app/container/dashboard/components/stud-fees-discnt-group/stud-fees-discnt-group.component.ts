import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { groupBy } from '@utils/utility';
import {
  ChartConfiguration,
  ChartData,
  ChartDataset,
  ChartEvent,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { takeUntil } from 'rxjs';
import { DashboardFacadeService } from '../../services/dashboard_facade.service';
@Component({
  selector: 'app-student-fees-discount-group',
  templateUrl: './stud-fees-discnt-group.component.html',
  styleUrls: ['./stud-fees-discnt-group.component.scss'],
  providers:[AutoUnsubscribe]
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
  public barChartLabels = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataset[] = [];
  constructor(private facade: DashboardFacadeService,private destroy$:AutoUnsubscribe) {}

  ngOnInit(): void {
    
    this.facade.selectAllStudentDetails.pipe(takeUntil(this.destroy$)).subscribe((d) => {
      if (d && Array.isArray(d)) {
        const byDiscount = groupBy('studentDiscount', d);
        let temp = [];
        for (let item of byDiscount) {
          let data = item.values.length ? [item.values.length]: [0];
          temp.push({ data, label: `Disc. ${item.key}%` });
        }
        this.barChartData =[...temp]
        this.barChartLabels = byDiscount.map((i:any)=>`Disc. ${i.key}%`)
      }
    });
  }
 
}
