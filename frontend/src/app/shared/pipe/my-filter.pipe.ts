import { Pipe, PipeTransform } from '@angular/core';
import{IncidenciaService} from '../../services/incidencia.service';

@Pipe({
  name: 'filter'
})
export class MyFilterPipe implements PipeTransform { 

  constructor(public incidenciaService: IncidenciaService) {
  }

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

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
   
    for (const incidencia of value) {
      console.log("-----------------");
      if (incidencia.municipio.toString().toLowerCase().indexOf(arg.toString().toLowerCase()) > -1) {
        resultPosts.push(incidencia);
      }
    }
    return resultPosts;
  }


}
