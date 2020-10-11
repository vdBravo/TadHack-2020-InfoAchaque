import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {NgForm} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { MyFilterPipe } from './shared/pipe/my-filter.pipe';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { IncidenciaComponent } from './components/incidencia/incidencia.component';
import { ComparativaComponent } from './comparativa/comparativa.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidenciaComponent,
    ComparativaComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
