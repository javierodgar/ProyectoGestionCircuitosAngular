import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    //cambiar por direccion de los php
    url="http://localhost/";
    constructor(private http: HttpClient) {  }

    verificarUsuario(usuario:string, contrasena:string){
      let fd = new FormData()
      fd.append('usuario', usuario)
      fd.append('contrasena', contrasena)
      return this.http.post(`${this.url}php/CompruebaUsuario.php`,fd);
    }

    registroUsuario(usuario:string, nombre:string, correo:string, cortraseña:string){
        let fd = new FormData()
        fd.append('usuario', usuario);
        fd.append('nombre', nombre);
        fd.append('email', correo);
        fd.append('contrasena', cortraseña);
        return this.http.post(`${this.url}php/GeneraUsuario.php`,fd);
    }

    recuperarUsuario(id:string){
        let fd = new FormData()
        fd.append('id', id);
        return this.http.post(`${this.url}php/RecuperarUsuario.php`,fd);
    }

    recuperarTiempos(id: string) {
        let fd = new FormData();
        fd.append('id', id); // Enviar el ID del usuario en el FormData
        return this.http.post(`${this.url}php/recuperarTiempos.php`, fd);
    }
}
