import { Component } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { xtee } from '../xtee/xtee';

//declare var d3: any;

@Component({
  selector: 'koondind7-component',
  templateUrl: './koondind7.component.html',
  styleUrls: ['./koondind7.component.scss'],
  standalone: true,
  imports: [NgxGaugeModule]
})
export class Koondind7Component {

  effpsect: number;  
  value: number;
  //value = 0.3;
  thick = 40;
  label = "Elujõud"
  gaugeAppendText=""
  max=1;
  min=0;
  gaugeDuration = 1000;
  gaugeAnimate = false;
  thresholdConfig = {
  '0': {color: '#EFB2B2'},
  '0.4': {color: '#FFE1A0'},
  '0.6': {color: '#ACCFBA'}
};
markers = { "0.5": { color: "#555", type: "triangle", size: 8, label: "Keskmine", font: "14px ari,al" }, "0.22": { color: "#555", type: "triangle", size: 8, label: "Madal", font: "14px arial" }, "0.78": { color: "#555", type: "triangle", size: 8, label: "Kõrge", font: "14px arial" } };

madalString: string;
key: string = 'efektMadal';
localValue: string = '';
madalNumber: number;

getEfektMadal() {
  ////this.madalString = localStorage.getItem(this.key);
  ////this.madalNumber=Number(this.madalString);
  this.madalNumber=0.1;
  return this.madalNumber;
}

//value = this.getEfektMadal();

key3: string = 'efektKorge';
  korgeString: string;
  korgeNumber: number;

  getEfektKorge() {
   //// this.korgeString = localStorage.getItem(this.key3);
   //// this.korgeNumber=Number(this.korgeString);
    this.korgeNumber=0.2;
    return this.korgeNumber;
  }

  key3m: string = 'makseKorge';
  korgeStringm: string;
  korgeNumberm: number;

  getMakseKorge() {
    ////this.korgeStringm = localStorage.getItem(this.key3m);
    ////this.korgeNumberm=Number(this.korgeStringm);
    this.korgeNumberm=0.3;
    return this.korgeNumberm;
  }  

  key3v: string = 'voimKorge';
  korgeStringv: string;
  korgeNumberv: number;

  getVoimKorge() {
    ////this.korgeStringv = localStorage.getItem(this.key3v);
    ///this.korgeNumberv=Number(this.korgeStringv);
    this.korgeNumberv=0.34;
    return this.korgeNumberv;
  }

  key3t: string = 'tasuvKorge';
  korgeStringt: string;
  korgeNumbert: number;

  getTasuvKorge() {
    ////this.korgeStringt = localStorage.getItem(this.key3t);
    ////this.korgeNumbert=Number(this.korgeStringt);
    this.korgeNumbert=0.5;
    return this.korgeNumbert;
  }

  key3j: string = 'toojoudKorge';
  korgeStringj: string;
  korgeNumberj: any;
  //vahenumber: any;

  getToojoudKorge() {
    ////this.korgeStringj = localStorage.getItem(this.key3j);
    ////this.korgeNumberj=Number(this.korgeStringj);
    ////this.korgeNumberj=this.korgeNumberj;
    this.korgeNumberj=0.9;
    //this.vahenumber = this.korgeNumberj.toFixed(2); 
    return this.korgeNumberj;
  }  

ww = 33.3435.toFixed(2);
www = (Math.round(0.2498347 * 100) / 100).toFixed(2);

testmuutuja: string;

constructor(){

////SIIA TULEB VALEM TEHA
///Kui teha iga komponendi kohta (1- madala tõenäosus + kõrge tõenäosus)/2 
///koond1 = ((1-p_1_likviidsus_mada+ p_1_likviidsus_korg)/2+
///(1-p_2_efektiivsus_mada+ p_2_efektiivsus_korg)/2+
///(1-p_3_struktuur_mada+ p_3_struktuur_korg)/2+
///(1-p_4_tasuvus_mada+ p_4_tasuvus_korg)/2)/4

if (xtee.model5y1) {
  this.testmuutuja = "on olemas";
  this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2)+(((1-xtee.model5y1)+xtee.model5y3))/2)/5;
}
else {
  this.testmuutuja = "ei ole olemas";
  this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2))/4;
}


//this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)//+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2)+(((1-xtee.model5y1)+xtee.model5y3))/2)/5;

//this.value = Math.round((this.value)*100*10)/1000;

this.value = Math.round(((this.value)*100) | 0)/100;

///console.log(((1-xtee.model1y1)+xtee.model1y3));
///console.log(((1-xtee.model2y1)+xtee.model2y3));
///console.log(((1-xtee.model3y1)+xtee.model3y3));
///console.log(((1-xtee.model4y1)+xtee.model4y3));
///console.log(((1-xtee.model5y1)+xtee.model5y3));

///console.log('katsettus',(1-xtee.model2y1));



///  this.value = xtee.EffpSect;

  ///setInterval (() => {
          //this.value = Math.floor((Math.random() * 2000) + 1);
         // this.value = (this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5;
  ///  }, 7000);
}


}