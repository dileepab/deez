import { Component, OnInit } from '@angular/core';
import {OverTimeApi} from '../../../shared/sdk/services/custom/OverTime';
import {OverTime} from '../../../shared/sdk/models/OverTime';

@Component({
  selector: 'app-all-over-time',
  templateUrl: './all-over-time.component.html',
  styleUrls: ['./all-over-time.component.css']
})
export class AllOverTimeComponent implements OnInit {

  public overTimes: Array<OverTime> = [];

  constructor(private overTimeApi: OverTimeApi) { }

  ngOnInit() {
    this.overTimeApi.find().subscribe(
      (res: OverTime[]) => {
        this.overTimes = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  removeOverTime(ot: OverTime, idx: any): void {
    this.overTimeApi.deleteById(ot.id).subscribe(
      (res) => {
        this.overTimes.splice(idx, 1);
      }
    );
  }

}
