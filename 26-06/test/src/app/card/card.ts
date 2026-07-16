import { Component, EventEmitter, input, output, Output } from '@angular/core';                      // impoted "input"

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  // data = input();                                                              // to get data from parent

  // @input = this.data  -- old

//   parentObj = input<dataObj>();

// // 
//   parentData = input<string>();
//   // 



  // @Output() sendData = new EventEmitter();   // olde one

  sendData = output<string>();

    data(){
      this.sendData.emit('from child');
    }

  // sendData1 = output<string>();

  //   data1(){
  //     this.sendData1.emit('from child');
  //   }








}

// interface dataObj{
//     name: string;
//     age: string;
//     c: number;
//     b: boolean;



    // 

    
// }


