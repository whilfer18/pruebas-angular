import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
  // styles: []
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.termino = params['termino'];
      // tslint:disable-next-line: no-string-literal
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });

  }

}
