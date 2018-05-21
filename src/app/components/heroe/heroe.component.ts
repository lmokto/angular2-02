import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private activatedRouter: ActivatedRoute, private _heroesServices: HeroesService ) {

    this.activatedRouter.params.subscribe( params => {
      console.log(params);
      this.heroe = this._heroesServices.getHeroe(params['id']);
      console.log(this.heroe);
    });

   }

  ngOnInit() {
  }

}
