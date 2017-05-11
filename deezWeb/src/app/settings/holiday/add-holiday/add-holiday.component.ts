import { Component, OnInit } from '@angular/core';
import {Holiday} from '../../../shared/sdk/models/Holiday';
import {HolidayApi} from '../../../shared/sdk/services/custom/Holiday';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit {

  public holiday: Holiday = new Holiday();
  public  loading = false;

  constructor(private holidayApi: HolidayApi) { }

  ngOnInit() {
  }

  addHoliday(): void {
    this.loading = true;
    this.holidayApi.create(this.holiday).subscribe(
      (res: Holiday) => {
        this.holiday = new Holiday();
        this.loading = false;
      }
    );
  }

}
