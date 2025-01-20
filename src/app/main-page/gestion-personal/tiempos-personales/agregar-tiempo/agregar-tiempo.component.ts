import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-agregar-tiempo',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agregar-tiempo.component.html',
  styleUrl: './agregar-tiempo.component.css'
})
export class AgregarTiempoComponent {

    tiempo = new FormGroup({
        circuito: new FormControl(''),
        tiempo: new FormControl('')
    })

    enviar(){}
}
