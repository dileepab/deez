import { Component, OnInit } from '@angular/core';
import {Holiday} from '../../../shared/sdk/models/Holiday';
import {HolidayApi} from '../../../shared/sdk/services/custom/Holiday';

@Component({
  selector: 'app-all-holidays',
  templateUrl: './all-holidays.component.html',
  styleUrls: ['./all-holidays.component.css']
})
export class AllHolidaysComponent implements OnInit {

  public holidays: Array<Holiday> = [];

  constructor(private holidayApi: HolidayApi) { }

  ngOnInit() {
    this.holidayApi.find().subscribe(
      (res: Holiday[]) => {
        this.holidays = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  removeHoliday(holiday: Holiday, idx: any): void {
    this.holidayApi.deleteById(holiday.id).subscribe(
      (res) => {
        this.holidays.splice(idx, 1);
      }
    );
  }

}
