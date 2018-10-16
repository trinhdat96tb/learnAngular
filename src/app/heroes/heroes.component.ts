import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  groups: any[] = [];
  constructor(private demoService: DemoService) { }
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.demoService.getData({ key: '87a73fb5-4645-4989-b483-3afecda315f1',lookup: 'builtwith.com' }).subscribe(result => {
      this.groups = result.groups;
      console.log(this.groups);
    });
  }

  addUser() {
    alert('add user');
  }

}
