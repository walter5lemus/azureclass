import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService,
              private router: Router
            ) {
                this.activatedRoute.params.subscribe(params => {
                  this.heroes = this.heroeService.buscarHeroes(params.nombre);
                  this.termino = params.nombre;
              }); }

  ngOnInit(): void {
  }

  verHeroe(nombre: string): void {
    console.log(this.heroeService.getHeroeNombre(nombre));
    this.router.navigate(['/heroe', this.heroeService.getHeroeNombre(nombre)]);
  }
}
