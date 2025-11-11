import { Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { CochesService } from '../../services/coches-service';
import { Persona } from '../../models/persona';

@Component({
    selector: 'app-coches',
    standalone: false,
    templateUrl: './coches.html',
    styleUrl: './coches.css',
})
export class Coches implements OnInit {
    public coches!: Array<Coche>;

    constructor(private _service: CochesService) {}

    ngOnInit(): void {
        //this._service.getCochesAxios().then((response) => (this.coches = response.data));
        //this._service.getCochesFetch().then((response) => (this.coches = response));
        this._service.getCochesHttp().subscribe((resolve) => (this.coches = resolve));
    }
}
