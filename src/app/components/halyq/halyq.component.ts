import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halyq',
  templateUrl: './halyq.component.html',
  styleUrls: ['./halyq.component.css']
})
export class HalyqComponent implements OnInit {

    title = 'app';
    employees: employees[] = [];
    firstName : string;
    Id : number;
    ngOnInit()  {
        this.nameOfBank= "KaspiBank";
        this.employees = [
            {
              Id: 1,
              firstName: 'Язынина Ираида Трофимовна',
              region: 'Almaty',
              phoneNumber: '+77470507282',
              emailAddress: 'kalaisyn24@gmail.com'
            },
            {
              Id: 2,
              firstName: 'Стрельцова Юнона Олеговна',
              region: 'Astana',
              phoneNumber: '+77479856942',
              emailAddress: 'info@google.com'
            },
            {
              Id: 3,
              firstName: 'Капитонова Елизавета Елизаровна',
              region: 'Aqtau',
              phoneNumber: '+77470589624',
              emailAddress: 'fruit-ninja@gmail.com'
            }
        ];

    }
    select(bankName) {
      if (bankName == 'kaspi') {
        this.nameOfBank= "KaspiBank";
        this.employees = [
            {
              Id: 1,
              firstName: 'Язынина Ираида Трофимовна',
              region: 'Almaty',
              phoneNumber: '+77470507282',
              emailAddress: 'kalaisyn24@gmail.com'
            },
            {
              Id: 2,
              firstName: 'Стрельцова Юнона Олеговна',
              region: 'Astana',
              phoneNumber: '+77479856942',
              emailAddress: 'info@google.com'
            },
            {
              Id: 3,
              firstName: 'Капитонова Елизавета Елизаровна',
              region: 'Aqtau',
              phoneNumber: '+77470589624',
              emailAddress: 'fruit-ninja@gmail.com'
            }
        ];
      }
      else if (bankName == 'sber') {
        this.nameOfBank= "SberBank";
        this.employees = [
            {
              Id: 1,
              firstName: 'Феднов Карл Никонович',
              region: 'Almaty',
              phoneNumber: '+77470507282',
              emailAddress: 'kalaisyn24@gmail.com'
            },
            {
              Id: 2,
              firstName: 'Толстой Мефодий Владиславович',
              region: 'Astana',
              phoneNumber: '+77479856942',
              emailAddress: 'info@google.com'
            },
            {
              Id: 3,
              firstName: 'Климушин Ефрем Игоревич',
              region: 'Aqtau',
              phoneNumber: '+77470589624',
              emailAddress: 'fruit-ninja@gmail.com'
            }
        ];
      }
      else if (bankName == 'halyq') {
        this.nameOfBank= "HalyqBank";
        this.employees = [
            {
              Id: 1,
              firstName: 'Коржева Лиана Михеевна',
              region: 'Almaty',
              phoneNumber: '+77470507282',
              emailAddress: 'kalaisyn24@gmail.com'
            },
            {
              Id: 2,
              firstName: 'Тычкина Регина Тимуровна',
              region: 'Astana',
              phoneNumber: '+77479856942',
              emailAddress: 'info@google.com'
            },
            {
              Id: 3,
              firstName: 'Ковригина Татьяна Виталиевна',
              region: 'Aqtau',
              phoneNumber: '+77470589624',
              emailAddress: 'fruit-ninja@gmail.com'
            }
        ];
      }

    }

Search() {
  if(this.firstName != "") {
    this.employees = this.employees.filter(res=>{
      return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
    });
  }else if(this.firstName == ""){
    this.ngOnInit();
  }

}

}
export class employees{
  Id : number;
  firstName: string;
  lastName: string;
  region: string;
  phoneNumber: string;
  emailAddress: string;
}
