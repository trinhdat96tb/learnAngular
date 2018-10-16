import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DemoService {

    constructor(private http: HttpClient) { }
    getData(params): Observable<any> {
        return this.http.get('https://api.builtwith.com/free1/api.json?KEY=' + params.key + '&LOOKUP=' + params.lookup);
    }
    createData(data): Observable<any> {
        return this.http.post('https://api.builtwith.com/free1/api.json?KEY=87a73fb5-4645-4989-b483-3afecda315f1&LOOKUP=builtwith.com', data);
    }
}