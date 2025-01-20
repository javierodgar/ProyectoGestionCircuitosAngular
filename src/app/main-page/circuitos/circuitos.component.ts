import { Component } from '@angular/core';
import { DatosCircuitosService } from '../../datos-circuitos.service';
import { FiltrarComponent } from './filtrar/filtrar.component';

@Component({
  selector: 'app-circuitos',
  imports: [FiltrarComponent],
  templateUrl: './circuitos.component.html',
  styleUrl: './circuitos.component.css'
})
export class CircuitosComponent {
    //datos de los circuitos
    circuitos :any;
    nombreRecibido: string = '';
    longitudMaxRecibida = 10000;
    longitudMinRecibida = 0;

    constructor(private datosCircuitosService: DatosCircuitosService){
        this.circuitos=this.datosCircuitosService.retornar();
    }

    recibirFiltro(filtro:any){
        [this.nombreRecibido, this.longitudMaxRecibida, this.longitudMinRecibida] = filtro.split('-');
        console.log (this.nombreRecibido);        
    }

    
}
