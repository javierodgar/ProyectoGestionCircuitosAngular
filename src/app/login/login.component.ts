import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    usuario: string = '';
    contrasena: string = '';
    errorMessage: string = '';
    mensaje = '';
  
    get usuarioInvalid() {
      return !this.usuario;
    }
  
    get contrasenaInvalid() {
      return !this.contrasena;
    }
  
    constructor(private loginServicio: LoginService, private router: Router) {
      //loginServicio.verificarUsuario();
    }
  
    onLogin() {
      this.loginServicio
        .verificarUsuario(this.usuario, this.contrasena)
        .subscribe((result: any) => {
          console.log(result);
          if (result.mensaje == "Exito") {
          let userId = result.id;
          this.router.navigate([`/main/${userId}`])
          }else{
            this.errorMessage = result.mensaje;
          }
        });
    }
  
}
