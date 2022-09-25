import {Component, OnInit, OnChanges, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import {DatePickerComponent, IDatePickerConfig} from 'ng2-date-picker';
import {DEF_CONF} from './const/consts';
import * as dayjs from "dayjs";
import {Dayjs} from "dayjs";
import {CalendarMode} from "ng2-date-picker/lib/common/types/calendar-mode";

@Component({
  selector: 'app-date-range-pircker',
  templateUrl: './date-range-pircker.component.html',
  styleUrls: ['./date-range-pircker.component.css']
})
export class DateRangePirckerComponent implements OnInit, OnChanges {
  @ViewChild('fromDateComponent') fromDateComponent!: DatePickerComponent;
  @ViewChild('toDateComponent') toDateComponent!: DatePickerComponent;
  @Input() mode: CalendarMode = 'daytime';
  @Input() locale: string = dayjs.locale();
  @Input() format: string = 'YYYY-MM-DD HH:mm:ss';
  @Input() model = {
    fromDate: dayjs().add(-7, 'day'),
    toDate: dayjs()
  };
  @Output() selectEmitter = new EventEmitter<any>();
  ready: boolean = true;

  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: this.format
  };

  placeholder: string = '날짜를 선택해주세요.';
  displayDate!: Dayjs | string;

  constructor() {
  }

  ngOnInit(): void {
    this.config.format = this.format;
    this.onLocaleChange(this.locale);
  }

  ngOnChanges() {
    console.warn(this.config);
  }

  onSelectFrom() {
    console.log('onSelectFrom!');
    if(!this.isValid()){
      this.model.toDate = this.model.fromDate;
    }

    this.selectEmitter.emit(this.model);
  }

  onSelectTo() {
    console.log('onSelectTo!');

    if(!this.isValid()){
      this.model.fromDate = this.model.toDate;
    }

    this.selectEmitter.emit(this.model);
  }

  onLocaleChange(locale: string): void {
    this.ready = false;
    import(`dayjs/locale/${locale}`).then(() => {
      this.locale = locale;
      dayjs.locale(locale);
      this.ready = true;
    });
  }

  isValid(): boolean  {
    const toDate = dayjs(this.model.toDate);
    const fromDAte = dayjs(this.model.fromDate);

    return toDate.diff(fromDAte) >= 0;
  }

  openCalendar() {
    console.log('openCalendar!!');

  }
}
