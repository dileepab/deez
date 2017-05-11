import {Component, OnInit} from '@angular/core';
import {CutApi} from '../../shared/sdk/services/custom/Cut';
import {TitleService} from '../../services/title.service';
import {Cut} from '../../shared/sdk/models/Cut';
import {OtherMaterial} from '../../shared/otherMaterial';

@Component({
    selector: 'app-add-cut',
    templateUrl: './add-cut.component.html',
    styleUrls: ['./add-cut.component.css']
})
export class AddCutComponent implements OnInit {

    public cut: Cut = new Cut();
    customers = [
        {
            name: 'Pettah',
            id: 0
        },
        {
            name: 'Nolimit',
            id: 1
        },
        {
            name: 'Thilakawardane',
            id: 2
        },
        {
            name: 'Other',
            id: 3
        }
    ];

    loading = false;


    constructor(public cutApi: CutApi, private titleService: TitleService) {
    }

    ngOnInit() {
        this.titleService.sendTitle('Add Cut');

        this.cut.otherMaterials = [];
        this.cut.otherMaterials.push(new OtherMaterial());
    }

    addCut() {

        this.loading = true;
        this.cut.date = this.cut.date || new Date().toDateString();
        this.cut.deliverDate = new Date().toDateString();
        this.cutApi.patchOrCreate(this.cut).subscribe(
            (cut: Cut) => {
                this.loading = false;
                this.cut = new Cut();
                this.cut.otherMaterials = [];
                this.cut.otherMaterials.push(new OtherMaterial());
            },
            err => {
                alert(err.message);
                this.loading = false;
            }
        );
    }

    addNewRow(): void {
        this.cut.otherMaterials.push(new OtherMaterial());
    }

    removeRow(idx: any): void {
        this.cut.otherMaterials.splice(idx, 1);
    }

    otherCost(): any {
        if (!this.cut) {return false};
        let otherCost: any = 0;
        for (const entry of  this.cut.otherMaterials) {
            otherCost += parseFloat(entry.price || 0);
        }
        return otherCost;
    }
}
