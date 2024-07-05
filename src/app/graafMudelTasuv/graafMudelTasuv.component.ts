import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graafmudeltasuv',
  templateUrl: './graafMudelTasuv.component.html',
  styleUrls: [ './graafMudelTasuv.component.scss' ]
})
export class GraafMudelTasuvComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  key: string = 'tasuvMadal';
  localValue: string = '';
  madalString: string;
  madalNumber: number;

  getTasuvMadal() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'tasuvKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getTasuvKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'tasuvKorge';
  korgeString: string;
  korgeNumber: number;

  getTasuvKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }









  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
                
      title: {
        text: '',
        left: 'center',
        top: 'center'
      },
      color: ['#EFB2B2', '#FFE1A0', '#ACCFBA'],
      series: [
        {
          type: 'pie',
          data: [
            {
              value: this.getTasuvMadal(),
              name: 'Madal'
            },
            {
              value: this.getTasuvKeskmine(),
              name: 'Keskmine'
            },
            {
              value: this.getTasuvKorge(),
              name: 'Kõrge'
            }
          ],
          radius: ['40%', '70%']
        }
      ]
        
    };
  }
}