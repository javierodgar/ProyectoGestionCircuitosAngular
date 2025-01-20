import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filtrar',
  imports: [FormsModule],
  templateUrl: './filtrar.component.html',
  styleUrl: './filtrar.component.css'
})
export class FiltrarComponent {
    nombreC = '';
    granPremio ='';
    longitudMax = 0;
    longitudMin = 0;

    @Output() enviar = new EventEmitter<string>();

    enviarFiltro(){
        if(this.longitudMax < 1 && this.longitudMin < 1 ){
            this.enviar.emit(this.nombreC + - + 10000 + - + 1);
        }  else if (this.longitudMax < 1){
            this.enviar.emit(this.nombreC + - + 10000 + - + this.longitudMin);
        } else if (this.longitudMin < 1){
            this.enviar.emit(this.nombreC + - + this.longitudMax + - + 1);
        }else {
            this.enviar.emit(this.nombreC + - + this.longitudMax + - + this.longitudMin);
        }
    }
}
