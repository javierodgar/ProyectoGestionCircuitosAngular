import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-gestion-personal',
  templateUrl: './gestion-personal.component.html',
  styleUrls: ['./gestion-personal.component.css']
})
export class GestionPersonalComponent implements OnInit {
  usuarioId = ''; 
  usuarioData: any = {};
  tiempos: any = []; // Ajustado para manejar un arreglo de tiempos
  visible = 0;

  constructor(
    private activatedRoute: ActivatedRoute, private loginServicio: LoginService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.usuarioId = parametros.get('usuario2')!;
      if (this.usuarioId) {
        this.cargarUsuario(this.usuarioId);
        this.cargarTiempos(this.usuarioId);
      }
    });
  }

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

  cargarTiempos(id: string): void {
    this.loginServicio.recuperarTiempos(id).subscribe(
      (response: any) => {
        if (response.mensaje === 'Exito') {
          this.tiempos = response.tiempos; // Guardar los tiempos en el arreglo
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

  mostrar(){
    this.visible=1
  }

  ocultar(){
    this.visible=0
  }
}
