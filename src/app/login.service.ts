import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    //cambiar por direccion de los php
    url="http://localhost/";
    constructor(private http: HttpClient) {  }

    //verificar si un usuario existe en la base de datos
    verificarUsuario(usuario:string, contrasena:string){
      let fd = new FormData()
      fd.append('usuario', usuario)
      fd.append('contrasena', contrasena)
      return this.http.post(`${this.url}php/CompruebaUsuario.php`,fd);
    }

    //registrar un nuevo usuario en nuestra base de datos
    registroUsuario(usuario:string, nombre:string, correo:string, cortraseña:string){
        let fd = new FormData()
        fd.append('usuario', usuario);
        fd.append('nombre', nombre);
        fd.append('email', correo);
        fd.append('contrasena', cortraseña);
        return this.http.post(`${this.url}php/GeneraUsuario.php`,fd);
    }

    //recuperar todos los datos de un usuario por su id
    recuperarUsuario(id:string){
        let fd = new FormData()
        fd.append('id', id);
        return this.http.post(`${this.url}php/RecuperarUsuario.php`,fd);
    }

    //recuperar todos los tiempos de un usuario por su id
    recuperarTiempos(id: string) {
        let fd = new FormData();
        fd.append('id', id); // Enviar el ID del usuario en el FormData
        return this.http.post(`${this.url}php/recuperarTiempos.php`, fd);
    }

    //guardar un nuevo tiempo para un determinado usuario en un determinado circuito
    guardarTiempo(id: string, circuito: string, tiempo:string){
        let fd = new FormData();
        fd.append('id', id);
        fd.append('circuito', circuito);
        fd.append('tiempo', tiempo);
        return this.http.post(`${this.url}php/GuardarTiempo.php`, fd);
    }
}
