import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  ReactiveFormsModule,  FormGroup,  FormControl, Validators,} from '@angular/forms';
import { LoginService } from '../login.service';
import { Validaciones } from '../validaciones';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  respuesta = '';

  registro = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required, Validaciones.contrasenasValidator]),
  });

  constructor(private loginServicio: LoginService) {}

  enviar() {
    this.loginServicio.registroUsuario(
        this.registro.value.usuario!,
        this.registro.value.nombre!,
        this.registro.value.email!,
        this.registro.value.contrasena!
      ).subscribe((resultado: any) => {
        console.log(resultado);
      });
  }
}
