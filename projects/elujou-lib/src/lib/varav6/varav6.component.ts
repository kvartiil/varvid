import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Sekt1Component } from '../sekt1/sekt1.component';
import { Sekt2Component } from '../sekt2/sekt2.component';
import { Sekt3Component } from '../sekt3/sekt3.component';
import { Sekt4Component } from '../sekt4/sekt4.component';
import { Sekt5Component } from '../sekt5/sekt5.component';

@Component({
  selector: 'varav6',
  templateUrl: './varav6.component.html',
  styleUrls: ['./varav6.component.scss'],
  standalone: true,
  imports: [CommonModule, Sekt1Component, Sekt2Component, Sekt3Component, Sekt4Component, Sekt5Component]
})
export class Varav6Component {
  currentIndex;

  sections = [
    {
      name: 'Efektiivsus',
      content: 'Content 1'
    },
    {
      name: 'Maksevõime',
      content: '<progn1-component></progn1-component>'
    },
    {
      name: 'Finantsvõimendus',
      content: ''
    },
    {
      name: 'Tasuvus',
      content: ''
    },
    {
      name: 'Tööjõu tootlikkus',
      content: ''
    }

  ];
  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  showComponent4: boolean = false;
  showComponent5: boolean = false;

  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 3) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = true;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 4) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = true;
    }
  }

}