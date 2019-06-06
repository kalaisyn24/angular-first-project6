import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  model:string;
  speed:number;
  colors:Colores;
  car:string;
  options:string[];
  constructor() { }

  ngOnInit() {
    this.car = 'BMW';
    this.model ='M5';
    this.speed =320;
    this.options = ['Audi','a8', 'metalic'];
    this.colors = {
      car: 'Black',
      salon: 'red',
      wheels: 'silver'
    };

  }

      carSelect(carName){
        if (carName == 'bmw') {
          this.car = 'BMW';
          this.model ='M5';
          this.speed =320;
          this.options = ['BMW','M5', 'metalic'];
          this.colors = {
            car: 'Black',
            salon: 'red',
            wheels: 'silver'
        };
      }
        else if (carName == 'audi'){
          this.car = 'Audi';
          this.model ='A8';
          this.speed =4320;
          this.options = ['Audi','a8', 'red'];
          this.colors = {
            car: 'Black',
            salon: 'red',
            wheels: 'silver'
        };
      }
        else if (carName == 'mrs')
        {
          this.car = 'Mersedes';
          this.model ='320';
          this.speed =420;
          this.options = ['Mersedes','320', 'Black'];
          this.colors = {
            car: 'Black',
            salon: 'red',
            wheels: 'silver'
        };
      }

    }

}
interface Colores {
  car:string;
  salon:string;
  wheels:string;
}
