import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicioPersonas {
    //PARA PODER REALIZAR PETICIONES NECESITAMOS EL OBJETO HttpClient
    //DICHO OBJETO DEBEMOS INYECTARLO EN LAS CLASES QUE UTILICEMOS
    constructor(private _http: HttpClient) {}

    getPersonas(): Observable<any> {
        let request = 'api/personas';
        return this._http.get(environment.urlPersonas + request);
    }

    getPersonasPromises(): Promise<any> {
        let request = 'api/personas';
        let promise = new Promise((resolve) => {
            this._http.get(environment.urlPersonas + request).subscribe((response) => {
                resolve(response);
            });
        });
        return promise;
    }
}
