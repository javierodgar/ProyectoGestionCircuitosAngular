import { Component } from '@angular/core';
import { DatosFooter, footer } from '../../datos-footer';

@Component({
  selector: 'app-foot',
  imports: [],
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css'
})
export class FootComponent {
  
 
  private datos: DatosFooter;

  constructor() {
    // Inicializa datos con una instancia de 'footer'
    this.datos = new footer('Javier Rodriguez', '1.4', '2025-01-23');
  }

  Foot() {
    return this.datos.imprimir();
  }
}


