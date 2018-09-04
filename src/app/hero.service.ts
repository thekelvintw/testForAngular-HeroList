import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Hero } from './selectedHero';
import { HEROES } from './mock-heroes';
// import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor() { }

  getHeroes(): Observable<Hero[]> {
  	return of (HEROES)
  }
	
}
