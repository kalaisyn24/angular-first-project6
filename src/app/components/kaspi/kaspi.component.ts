import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kaspi',
  templateUrl: './kaspi.component.html',
  styleUrls: ['./kaspi.component.css']
})
export class KaspiComponent implements OnInit {
  person1 = {
    fio: 'Язынина Ираида Трофимовна',
    inn: 745902815157,
    rnn: 8896849037,
    summ: '1 500 000$',
    percent: 12,
  };
  person2 = {
    fio: 'Стрельцова Юнона Олеговна',
    inn: 403989978364,
    rnn: 3896849037,
    summ: '1 600 000$',
    percent: 12,
  };

  person3 = {
    fio: 'Капитонова Елизавета Елизаровна',
    inn: 212920739214,
    rnn: 5155481610,
    summ: '2 000 000$',
    percent: 12,
  };
  person4 = {
    fio: 'Бондарчук Гавриил Михаилович',
    inn: 896085270451,
    rnn: 8346978736,
    summ: '1 203 000$',
    percent: 12,
  };
  person5 = {
    fio: 'Ретюнскиха Стела Яновна',
    inn: 154783971755,
    rnn: 8291897637,
    summ: '1 400 000$',
    percent: 12,
  };
  person6 = {
    fio: 'Киселев Лука Кириллович',
    inn: 389336224762,
    rnn: 2790822795,
    summ: '5 555 000$',
    percent: 12,
  };


  constructor() { }

  ngOnInit() {
  }

}
