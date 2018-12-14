import { Injectable } from "@angular/core";


@Injectable()
export class RndSelectService {
    constructor() {

    }

    getRndItem(array) {
        return array[(Math.round(Math.random() * array.length-1))];
    }
}