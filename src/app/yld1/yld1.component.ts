import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'yld1-component',
  templateUrl: './yld1.component.html',
  styleUrls: ['./yld1.component.scss']
})
export class Yld1Component {
  
  key3: string = 'efektKorge';
  korgeString: string;
  korgeNumber: number;

  getEfektKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }

  key3m: string = 'makseKorge';
  korgeStringm: string;
  korgeNumberm: number;

  getMakseKorge() {
    this.korgeStringm = localStorage.getItem(this.key3m);
    this.korgeNumberm=Number(this.korgeStringm);
    return this.korgeNumberm;
  }  

  key3v: string = 'voimKorge';
  korgeStringv: string;
  korgeNumberv: number;

  getVoimKorge() {
    this.korgeStringv = localStorage.getItem(this.key3v);
    this.korgeNumberv=Number(this.korgeStringv);
    return this.korgeNumberv;
  }

  key3t: string = 'tasuvKorge';
  korgeStringt: string;
  korgeNumbert: number;

  getTasuvKorge() {
    this.korgeStringt = localStorage.getItem(this.key3t);
    this.korgeNumbert=Number(this.korgeStringt);
    return this.korgeNumbert;
  }

  key3j: string = 'toojoudKorge';
  korgeStringj: string;
  korgeNumberj: number;

  getToojoudKorge() {
    this.korgeStringj = localStorage.getItem(this.key3j);
    this.korgeNumberj=Number(this.korgeStringj);
    return this.korgeNumberj;
  }  

  hinnang: string;

  annaHinnang() {

    this.hinnang = "laheda elujõulisusega"

    if ((this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5>0.67999) {
      this.hinnang = "suur"
    }
    else if ((this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5<=0.67999 && (this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5>0.34) {
      this.hinnang = "keskmine"
    }
    else if ((this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5<=0.34) {
      this.hinnang = "väike"
    }

    return this.hinnang;
  }

  panussissejuhatus: string;

  panusEellugu() {
    this.panussissejuhatus = 'Praegusel juhul tuleb panus saadud tulemusse peamiselt';

    if (this.getEfektKorge()<=0.5 && this.getMakseKorge()<=0.5 && this.getVoimKorge()<=0.5 && this.getTasuvKorge()<=0.5 && this.getToojoudKorge()<=0.5) {
      this.panussissejuhatus = 'Rakendus ei leidnud ühtegi olulist komponenti, mis elujõulisust tõstaks.'
    }

    return this.panussissejuhatus;
  }

  panus: string;

  panusTuleb() {

    this.panus = '';

    if (this.getEfektKorge()>this.getMakseKorge() && this.getEfektKorge()>this.getVoimKorge() && this.getEfektKorge()>this.getTasuvKorge() && this.getEfektKorge()>this.getToojoudKorge() && this.getEfektKorge() > 0.5) {
      this.panus = ' suhteliselt suurest efektiivsusest.';
    }

    else if (this.getMakseKorge()>this.getVoimKorge() && this.getMakseKorge()>this.getTasuvKorge() && this.getMakseKorge()>this.getToojoudKorge() && this.getMakseKorge() > 0.5) {
      this.panus = ' suhteliselt suurest maksevõimest.'
    }

    else if (this.getVoimKorge()>this.getTasuvKorge() && this.getVoimKorge()>this.getToojoudKorge() && this.getVoimKorge() > 0.5) {
      this.panus = ' suhteliselt väikesest finantsvõimendusest.'
    }

    else if (this.getTasuvKorge()>this.getToojoudKorge() && this.getTasuvKorge() > 0.5) {
      this.panus = ' suhteliselt suurest tasuvusest.'
    }

    else if (this.getToojoudKorge()>0.5) {
      this.panus = ' suhteliselt suurest tööjõu tootlikkusest.'
    }

    return this.panus;
  }

  tugevused: string;
  tugevusedX: string;
  
  tugevus1: string;
  tugevus2: string;
  tugevus3: string;
  tugevus4: string;
  tugevus5: string;
  lisaTargutus() {
    this.tugevusedX = " Ükski näitaja ei ole eraldi võetuna oluliselt esileulatuv. Olenemata koondtulemusest on ettevõtte olukord probleemne."
    this.tugevus1 = '';
    this.tugevus2 = '';
    this.tugevus3 = '';
    this.tugevus4 = '';
    this.tugevus5 = '';

    if (this.getEfektKorge() > 0.95) {
      this.tugevus1 = ' Erakordselt suur on efektiivsus, mis tähendab vara tõhusat kasutamist.';
      this.tugevusedX = '';
    }

    if (this.getMakseKorge() > 0.95) {
      this.tugevus2 = ' Väga suur on maksevõime, mis tähendab rahavoogude edukat juhtimist.';
      this.tugevusedX = '';
    }

    if (this.getVoimKorge() > 0.95) {
      this.tugevus3 = ' Väga positiivne on suhteliselt väike laenukoormuse osakaal.';
      this.tugevusedX = '';
    }

    if (this.getTasuvKorge() > 0.95) {
      this.tugevus4 = ' Oluline tugi on suur tasuvus, mis tähendab head turuseisu.';
      this.tugevusedX = '';
    }

    if (this.getToojoudKorge() > 0.95) {
      this.tugevus5 = ' Ettevõtte tööjõu tootlikkus on väga hea, sellest on arengus palju kasu.';
      this.tugevusedX = '';
    }

    this.tugevused = this.tugevusedX+this.tugevus1+this.tugevus2+this.tugevus3+this.tugevus4+this.tugevus5;

    return this.tugevused;
  }

maakonnaKontroll() {
  if (localStorage.getItem("maakond") === null) {
    localStorage.setItem("maakond", "Harju maakond");
  }
}
ReadMore:boolean = true
visible:boolean = false

onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
    //alert("lgaj");
  }

jutuke: string;

  lantau() {

    this.jutuke = "lsjf";
    return this.jutuke;
  }

  flipped = false;
  //imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"

  toggle() {
    this.flipped = !this.flipped;
  }


}