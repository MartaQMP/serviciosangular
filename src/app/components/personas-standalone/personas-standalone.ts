import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicioPersonas } from '../../services/personas';

@Component({
    selector: 'app-personas-standalone',
    standalone: true,
    templateUrl: './personas-standalone.html',
    styleUrl: './personas-standalone.css',
})
export class PersonasStandalone implements OnInit {
    public personas!: Array<Persona>;

    constructor(private _service: ServicioPersonas) {}

    ngOnInit(): void {
        this._service.getPersonas().subscribe((response) => {
            this.personas = response;
        });
    }
}
