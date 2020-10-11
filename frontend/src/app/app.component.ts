import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import {NgForm} from '@angular/forms';
import{IncidenciaService} from './services/incidencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public incidenciaService: IncidenciaService) {   }

//enviar mensaje 
mensajeUsuario(form: NgForm){
  this.incidenciaService.enviarMensaje(form.value)
}

}
