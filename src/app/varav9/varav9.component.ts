import { Component } from '@angular/core';

@Component({
  selector: 'varav9',
  templateUrl: './varav9.component.html',
  styleUrls: ['./varav9.component.scss']
})
export class Varav9Component {
  currentIndex;

  sections = [
    {
      name: 'Vaata soovitust',
      content: 'Content 1'
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
//    else if ( this.currentIndex === 1) {
//      this.showComponent1 = false;
//      this.showComponent2 = true;
//      this.showComponent3 = false;
//      this.showComponent4 = false;
//      this.showComponent5 = false;
//    }
//    else if ( this.currentIndex === 2) {
//      this.showComponent1 = false;
//      this.showComponent2 = false;
//      this.showComponent3 = true;
//      this.showComponent4 = false;
//      this.showComponent5 = false;
//    }
//    else if ( this.currentIndex === 3) {
//      this.showComponent1 = false;
//      this.showComponent2 = false;
//      this.showComponent3 = false;
//      this.showComponent4 = true;
//      this.showComponent5 = false;
//    }
//    else if ( this.currentIndex === 4) {
//      this.showComponent1 = false;
//      this.showComponent2 = false;
//      this.showComponent3 = false;
//      this.showComponent4 = false;
//      this.showComponent5 = true;
//    }
  }

}