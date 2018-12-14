import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";


Injectable()
export class BaseApi {
    private baseUrl = 'http://31.184.255.20/';

    constructor(public http: Http) {}


    private getUrl(url: string = ''): string {
        return this.baseUrl + url;
    }

    public get(url: string = ''): Observable<any> {
        return this.http.get(this.getUrl(url))
                    .pipe(map((response: Response) => response.json()))
    }

    public post(url: string = '', data: any = { }): Observable<any> {
        console.log(url, data, 'this');
        return this.http.post(this.getUrl(url), data)
                    .pipe(map((response: Response) => response.json()));
    }


    
}