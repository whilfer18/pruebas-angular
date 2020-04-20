import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router
  ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    // console.log( this.heroes );
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
