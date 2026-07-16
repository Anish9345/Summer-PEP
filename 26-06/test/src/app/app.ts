import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, RouterLinkWithHref, RouterLink, About],                // 1. imporded card //RouterLinkWithHref, RouterLink
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test');

//   arr: number[] = [
//     20, 20, 30, 40
// ]

//   obj = {
//     name: "TestName",
//     age: "TestAge",
//     c: 20,
//     b: true
//   }


  /*
signal

.set()
.update()

*/ 
  // name = signal("Swaraj ");

  // //task

  // arr2: number[] = [
  //   10, 20, 30, 40
  // ]

  // arraySignal = signal(this.arr2);

  // stir: string = "this is stir";
  // st = signal(this.stir);

  // num: number = 10;
  // nu = signal(this.num);

  // bol: boolean = true;
  // bo = signal(this.bol);

  title1 = signal('test');

  receiveData(str : string){
    console.log(str);
    this.title1.set(str);
  }

  // title2 = signal('test1');

  // receiveData1(str : string){
  //   console.log(str);
  //   this.title2.set(str);
  // }



  //to do

todoText = "";

todoArr = signal<any>([]);

onInput(event: any){
  this.todoText = (event.target.value)
}

addTodo(){
  let obj = {
    id: Date.now(),
    text: this.todoText,
    isDone: false
  }


  this.todoArr.set([...this.todoArr(), obj])               // copy previous array object and add new  object 
  this.todoText="";
  
  
}


// interface todoInerface{

// }

}
