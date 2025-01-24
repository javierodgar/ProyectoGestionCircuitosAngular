import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tiempos-personales',
  imports: [],
  templateUrl: './tiempos-personales.component.html',
  styleUrl: './tiempos-personales.component.css'
})
export class TiemposPersonalesComponent {
    @Input() tiempos: any = [];
    ngOnInit(): void {
        console.log(this.tiempos)
    }
}
