import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tiempos-personales',
  imports: [RouterLink],
  templateUrl: './tiempos-personales.component.html',
  styleUrl: './tiempos-personales.component.css'
})
export class TiemposPersonalesComponent {
    @Input() tiempos: any = [];
    ngOnInit(): void {
        console.log(this.tiempos)
    }
}
