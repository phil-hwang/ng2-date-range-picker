import {IDatePickerConfig} from "ng2-date-picker";

export enum ECalendarValue {
  Dayjs = 1,
  DayjsArr,
  String,
  StringArr
}

export const DEF_CONF: IDatePickerConfig = {
  firstDayOfWeek: 'su',
  monthFormat: 'MMM, YYYY',
  disableKeypress: false,
  closeOnSelect: undefined,
  closeOnSelectDelay: 100,
  openOnFocus: true,
  openOnClick: true,
  onOpenDelay: 0,
  closeOnEnter: true,
  weekDayFormat: 'ddd',
  showNearMonthDays: true,
  showWeekNumbers: false,
  enableMonthSelector: true,
  yearFormat: 'YYYY',
  showGoToCurrent: true,
  dayBtnFormat: 'DD',
  monthBtnFormat: 'MMM',
  hours12Format: 'hh',
  hours24Format: 'HH',
  meridiemFormat: 'A',
  minutesFormat: 'mm',
  minutesInterval: 1,
  secondsFormat: 'ss',
  secondsInterval: 1,
  showSeconds: false,
  showTwentyFourHours: false,
  timeSeparator: ':',
  multipleYearsNavigateBy: 10,
  showMultipleYearsNavigation: false,
  hideInputContainer: false,
  returnedValueType: ECalendarValue.String,
  unSelectOnClick: true,
  hideOnOutsideClick: true,
  numOfMonthRows: 3
};
