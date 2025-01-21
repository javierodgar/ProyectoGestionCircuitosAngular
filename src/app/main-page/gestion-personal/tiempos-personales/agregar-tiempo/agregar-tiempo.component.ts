import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, ActivatedRoute, ParamMap } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../../../../login.service';
import { DatosCircuitosService } from '../../../../datos-circuitos.service';

@Component({
  selector: 'app-agregar-tiempo',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agregar-tiempo.component.html',
  styleUrl: './agregar-tiempo.component.css'
})
export class AgregarTiempoComponent {

    //variables necesarias
    circuitos :any;
    usuarioId = '';

    //contructor con parametros que vamos a utilizar (activated route y servicios)
    constructor(private activatedRoute: ActivatedRoute, private loginServicio: LoginService, private datosCircuitosService: DatosCircuitosService) {}

    //codigo que e ejecutara al inicio de nuestra pagina
    ngOnInit(): void {
        this.circuitos=this.datosCircuitosService.retornar();
        this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
            this.usuarioId = parametros.get('usuario2')!;
            if (this.usuarioId)
                console.log(this.usuarioId)
        });
    }

    //formGroup co los datos que necesitaremos para agregar un tiempo nuestra base de datos
    tiempo = new FormGroup({
        circuito: new FormControl(''),
        tiempo: new FormControl('')
    })

    //funcion para enviar los datos mediante el servicio y un php
    enviar(){
        console.log(this.tiempo.value.tiempo, this.tiempo.value.circuito)
        this.loginServicio.guardarTiempo(
            this.usuarioId!,
            this.tiempo.value.circuito!,
            this.tiempo.value.tiempo!
        ).subscribe((resultado: any) => {
            console.log(resultado)
        });
    }
}
