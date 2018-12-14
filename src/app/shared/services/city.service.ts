import { BaseApi } from "../base-api";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { CityModel } from "../models/city.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CityService extends BaseApi {
    constructor(public http: Http) {
        super(http)
    }

    getCities(): Observable<CityModel[]> {
        return this.get('cities');
    }
    
    addCitites(data: CityModel): Observable<CityModel> {
        console.log(data);
        return this.post('cities', data)
    }
    getCitiesById(id: string): Observable<CityModel>{
        return this.get(`cities/${id}`);
    }
}