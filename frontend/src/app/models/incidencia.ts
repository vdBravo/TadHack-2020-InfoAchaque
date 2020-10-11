export class Incidencia {
    constructor(_id = "", municipio = "", enfermedad = "",  totalF = 0, totalM = 0, totalG = 0) {
      this._id = _id;
      this.municipio = municipio;
      this.enfermedad = enfermedad;
      this.totalF = totalF;
      this.totalM = totalM;
      this.totalG = totalG;
    }
  
    _id: string;
    municipio: string;
    enfermedad: string;
    totalF: number;
    totalM: number;
    totalG: number;
  }