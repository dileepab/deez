import { Component, OnInit } from '@angular/core';
import {Cut} from '../../shared/sdk/models/Cut';
import {CutApi} from '../../shared/sdk/services/custom/Cut';
import {TitleService} from '../../services/title.service';

@Component({
  selector: 'app-all-cutts',
  templateUrl: './all-cutts.component.html',
  styleUrls: ['./all-cutts.component.css']
})
export class AllCuttsComponent implements OnInit {

  public cuts: Cut[] = new Array<Cut>();

  constructor(public cutApi: CutApi, private titleService: TitleService) { }

  ngOnInit() {

    this.titleService.sendTitle('All Cuts');

    this.cutApi.find().subscribe(
        (cuts: Cut[]) => this.cuts = cuts,
        err => alert(err.message)
    );
  }
}
