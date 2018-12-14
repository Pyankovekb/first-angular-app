import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class WeatherService {
    constructor(public http: Http) {
    }

    getDailyWeather(string: string): Observable<any> {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${string}&units=metric&appid=be27d1a7480385f74e13088985354cd4`)
                    .pipe(map((response: Response) => response.json()))
    }

    getWeaklyWeather(string: string): Observable<any> {
        return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${string}&units=metric&appid=be27d1a7480385f74e13088985354cd4`)
                    .pipe(map((response: Response) => response.json()))
    }
}