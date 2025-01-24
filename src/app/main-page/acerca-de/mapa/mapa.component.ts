import { Component } from '@angular/core';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {
  showMap: boolean = false;

  constructor() { }

  ocultarMostrarMapa() {
    this.showMap = !this.showMap;
    console.log('showMap:', this.showMap);
  }
}
