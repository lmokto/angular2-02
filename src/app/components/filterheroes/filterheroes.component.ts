import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-filterheroes',
  templateUrl: './filterheroes.component.html'
})
export class FilterheroesComponent implements OnInit {

  filterheroes: any[] = [];
  heroes: Heroe[] = [];
  termino: string;

  constructor( private router: Router, private activatedRouter: ActivatedRoute, private _heroesService: HeroesService ) {
    this.heroes = this._heroesService.getHeroes();
   }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
      this.termino = params['heroes'];
      this.filterheroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

}
