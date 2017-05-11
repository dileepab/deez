import { Component, OnInit } from '@angular/core';
import {OverTime} from '../../../shared/sdk/models/OverTime';
import {OverTimeApi} from '../../../shared/sdk/services/custom/OverTime';

@Component({
  selector: 'app-add-over-time',
  templateUrl: './add-over-time.component.html',
  styleUrls: ['./add-over-time.component.css']
})
export class AddOverTimeComponent implements OnInit {

  public overTime: OverTime = new OverTime();
  public  loading = false;

  constructor(private overTimeApi: OverTimeApi) { }

  ngOnInit() {}

  addOverTime(): void {
    this.loading = true;
    this.overTimeApi.create(this.overTime).subscribe(
      (res: OverTime) => {
        this.overTime = new OverTime();
        this.loading = false;
      }
    );
  }

}
