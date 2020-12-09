import { Component, OnInit, Input } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() id = -1;
  @Input() nombre = '';

  constructor(private router: Router, private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  verHeroe(): void {
    if (this.id === -1){
      this.router.navigate(['/heroe', this.heroesService.getHeroeNombre(this.nombre)]);
    }else{
      this.router.navigate(['/heroe', this.id]);
    }
  }

}
