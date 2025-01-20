import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet, NavComponent, FootComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
    usuario='';

    constructor(private activatedRoute: ActivatedRoute) { 
        this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
            this.usuario = parametros.get("usuario")!;
        }) 
    }

    
}   
