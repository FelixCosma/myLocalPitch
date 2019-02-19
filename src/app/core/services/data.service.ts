import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { IPitch, IPagedResults } from '../../shared/interfaces';

@Injectable()
export class DataService {

    // pitchesBaseUrl = 'https://api-v2.mylp.info/pitches/32990/slots?filter%5Bstarts%5D=2018-01-09&filter%5Bends%5D=2018-01-15';
    pitchesBaseUrl = 'https://api-v2.mylp.info';
    pitches: IPitch[];

    constructor(private http: HttpClient) { }

    getPitches(pitchID: string, startDate: string, endDate: string): Observable<IPagedResults<IPitch[]>> {
        return this.http.get<IPitch[]>(
            `${this.pitchesBaseUrl}/pitches/${pitchID}/slots?filter%5Bstarts%5D=${startDate}&filter%5Bends%5D=${endDate}`,
            // this.pitchesBaseUrl,
            { observe: 'response' })
            .pipe(
                map(res => {
                    const totalRecords = res.body['data'].length;
                    const pitches = res.body['data'] as IPitch[];
                    return {
                        results: pitches,
                        totalRecords: totalRecords
                    };
                }),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }
}
