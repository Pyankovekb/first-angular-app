import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Response } from "@angular/http";

@Injectable()
export class NewsCityService {
    constructor(private httpClient: HttpClient) {
        
    }

    getCityNews(string: string): Observable<any> {
        const params = new HttpHeaders({
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : `87f47874b1344d2b81401c143048ddad`,
            'Allow-Control-Allow-Origin': '*'
        });

        return this.httpClient.get(`https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=${encodeURI(string)}&sortBy=Date&freshness=Day`, { headers: params })
                    .pipe(map((response: Response) => response));
    }
}