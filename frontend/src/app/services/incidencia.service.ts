import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Incidencia} from '../models/incidencia'
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {
  URL_API = "http://localhost:3000/api/incidencias"

  incidencias: Incidencia[];

  constructor(private http: HttpClient) { }

  getInsidencias(){
    return this.http.get<Incidencia[]>(this.URL_API);
  }

  getMunicipio(){
    return this.http.get<Incidencia[]>(this.URL_API);
  }

// Enviar Numero
numeroC = Number;


telefono = NgForm;

enviarMensaje(telefono){
  const numeroT = "+57" + this.numeroC;
  console.log(numeroT)
  return numeroT
}

}