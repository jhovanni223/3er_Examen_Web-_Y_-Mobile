import { Component, OnInit } from '@angular/core';
import { Universidades } from './universidades';
import { UniversidadesService } from './universidades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Lista_Uni:string="Lista de Universidades";
  prueba:string="Esto es una prueba";

  
  universidad: Universidades[] = [];

    

  constructor(private universidadService:UniversidadesService) { }

  ngOnInit(): void {
    this.universidadService.getAll().subscribe(
      u => this.universidad= u
    );
  }

    

  }




