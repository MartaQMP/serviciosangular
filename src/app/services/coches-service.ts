import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import axios from 'axios';
import { Coche } from '../models/coche';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CochesService {
    constructor(private _http: HttpClient) {}

    getCochesAxios() {
        let request = 'webresources/coches';
        return axios.get(environment.urlCoches + request);
    }

    getCochesFetch(): Promise<Array<Coche>> {
        let request = 'webresources/coches';
        return fetch(environment.urlCoches + request).then((response) => response.json());
    }

    getCochesHttp(): Observable<Array<Coche>> {
        let request = 'webresources/coches';
        return this._http.get<Array<Coche>>(environment.urlCoches + request);
    }
}
