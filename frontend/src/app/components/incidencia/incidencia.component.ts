import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import{IncidenciaService} from '../../services/incidencia.service';
import {NgForm} from '@angular/forms';

@Component({ 
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css'],
  providers: [IncidenciaService]
})
export class IncidenciaComponent implements OnInit { 

  constructor(public incidenciaService: IncidenciaService) { }

  p2: number = 1;
  

  public ngOnInit(): void {
    
    this.getIncidencias();
    
  }
  getIncidencias(){
    this.incidenciaService.getInsidencias().subscribe(
      res => {
        this.incidenciaService.incidencias = res;
        console.log(res)
      },
      err => console.error(err)
    )
  }


}