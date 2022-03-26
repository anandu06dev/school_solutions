import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss'],
})
export class CalComponent implements OnInit {
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: '30rem',
    aspectRatio: 1,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek',
    },
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.Events,
  };
  constructor() {}

  ngOnInit(): void {
    () => {};
    let events = [
      {
        title: `Paid (5)`,
        start: '2022-03-22',
        end: '2022-03-22',
        color: 'green',
        textColor: 'white',
      },
      {
        title: `Pending (4)`,
        start: '2022-03-21',
        end: '2022-03-21',
        color: 'red',
        textColor: 'white',
      },
    ];
    this.Events = [...events];
    setTimeout(() => {
      this.calendarOptions.events = [...this.Events];
    }, 2000);
  }

  handleDateClick(arg: any) {
    let event = {
      title: `Event Date ${arg.dateStr}`,
      start: arg.dateStr,
      end: arg.dateStr,
    };
    this.Events.push(event);
    console.log(this.Events);
    this.calendarOptions.events = [...this.Events];
  }
}
