import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Response } from "@angular/http";


@Injectable()
export class CityImgService {
    constructor(private httpClient: HttpClient) {

    }

    getCityImg(string: string): Observable<any> {
        const params = new HttpHeaders({
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : `87f47874b1344d2b81401c143048ddad`,
            'Allow-Control-Allow-Origin': '*'
        });
        
        // .set('size', 'Large')
        // .set('minWidth', `800`);
        return this.httpClient.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${encodeURI(string)}`, { headers: params })
                    .pipe(map((response: Response) => response));
    }
}