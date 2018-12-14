import { Injectable } from "@angular/core";
import { BaseApi } from "../base-api";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { ColorModel } from "../models/color.model";

@Injectable()
export class ColorService extends BaseApi{
    constructor(public http: Http) {
        super(http)
    }

    getColors(): Observable<ColorModel[]> {
        return this.get('gradients');
    }
}