import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { IPitch, IPagedResults } from '../shared/interfaces';

import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';

@Component({
    selector: 'app-pitches',
    templateUrl: './pitches.component.html'
})
export class PitchesComponent implements OnInit {

    pitches: IPitch[];
    pagedPitches: IPitch[];
    pitchID: string;
    startDate: string;
    endDate: string;
    totalRecords = 0;
    pageSize = 10;

    constructor(
        private dataService: DataService,
        private growler: GrowlerService
    ) { }

    ngOnInit() {
    }

    pageChanged(page: number) {
        this.getPitchesPage(page);
    }

    onSubmit() {
     //   if (this.pitchID && this.startDate && this.endDate) {
            this.getPitches();
    //    } else {
     //       this.growler.growl('All values are mandatory!', GrowlerMessageType.Danger);
    //    }
    }

    getPitchesPage(page: number)  {
        this.pagedPitches = this.pitches.slice(page * this.pageSize, (page + 1) * this.pageSize);
    }

    getPitches() {
        this.dataService.getPitches(this.pitchID, this.startDate, this.endDate)
            .subscribe((response: IPagedResults<IPitch[]>) => {
                this.pitches = response.results;
                this.getPitchesPage(1);
                this.totalRecords = response.totalRecords;
            },
            (err: any) => {
                console.log(err);
                this.growler.growl('Values could not be retrieved!', GrowlerMessageType.Danger);
            },
            () => this.growler.growl('Values retrieved!', GrowlerMessageType.Success));
    }
}
