import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicioPersonas } from '../../services/personas';
@Component({
    selector: 'app-personas',
    standalone: false,
    templateUrl: './personas.html',
    styleUrl: './personas.css',
})
export class Personas implements OnInit {
    public personas!: Array<Persona>;

    constructor(private _service: ServicioPersonas) {}

    ngOnInit(): void {
        // this._service.getPersonas().subscribe((response) => {
        //     this.personas = response;
        // });

        this._service.getPersonasPromises().then((response) => {
            this.personas = response;
        });
    }
}
