import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import{IncidenciaService} from '../services/incidencia.service';
import { MyFilterPipe } from '../shared/pipe/my-filter.pipe';



@Component({
  selector: 'app-comparativa',
  templateUrl: './comparativa.component.html',
  styleUrls: ['./comparativa.component.css'],
  providers: [IncidenciaService]
})
export class ComparativaComponent implements OnInit {

  constructor(public incidenciaService: IncidenciaService) {   }

  p: number = 1;
  filterPost = '';
  

  public ngOnInit(): void {
    
    this.getIncidencias();

    
  };

   
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
