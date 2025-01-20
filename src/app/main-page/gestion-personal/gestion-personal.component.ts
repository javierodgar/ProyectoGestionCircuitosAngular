import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { LoginService } from '../../login.service';
import { TiemposPersonalesComponent } from './tiempos-personales/tiempos-personales.component';

@Component({
  selector: 'app-gestion-personal',
  imports: [TiemposPersonalesComponent, RouterLink],
  templateUrl: './gestion-personal.component.html',
  styleUrls: ['./gestion-personal.component.css']
})
export class GestionPersonalComponent implements OnInit {
  //variables necesarias
  usuarioId = ''; 
  usuarioData: any = {};
  tiempos: any = []; 
  visible = 0;

  constructor(
    private activatedRoute: ActivatedRoute, private loginServicio: LoginService
  ) {}

  //procesos que se realizaran de forma automatica nada mas iniciar la pagina
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.usuarioId = parametros.get('usuario2')!;
      if (this.usuarioId) {
        this.cargarUsuario(this.usuarioId);
        this.cargarTiempos(this.usuarioId);
      }
    });
  }

  //Rescatar datos del usuario de la base de datos mediante un service y un php
  cargarUsuario(id: string): void {
    this.loginServicio.recuperarUsuario(id).subscribe(
      (response: any) => {
        if (response.mensaje === 'Exito') {
          this.usuarioData = response.usuario; 
          console.log('Datos del usuario:', this.usuarioData);
        } else {
          console.error('Error:', response.mensaje);
        }
      },
      (error) => {
        console.error('Error al recuperar el usuario:', error);
      }
    );
  }

  //rescatar tiempos del usuario de la base de datos mediante un service y un php
  cargarTiempos(id: string): void {
    this.loginServicio.recuperarTiempos(id).subscribe(
      (response: any) => {
        if (response.mensaje === 'Exito') {
          this.tiempos = response.tiempos; 
          console.log('Tiempos:', this.tiempos);
        } else {
          console.error('Error:', response.mensaje);
          this.tiempos = [{"tiempo": "no existen tiempos registrados"}]
          console.log('Tiempos:', this.tiempos);
        }
      },
      (error) => {
        console.error('Error al recuperar los tiempos:', error);
      }
    );
  }

  //funcion secilla para mostrar u ocultar, funciona en conjunto con un if
  mostrarOcultar(){
    if(this.visible == 1)
        this.visible = 0;
    else
        this.visible = 1;
  }
}
