import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Accordion } from './accordion/accordion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Accordion],            //to import Accordion go to Accordion.ts then copy the calss name which ia "Accordion" come this then add Accordion but type it do not paste
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PEP Class');

  name : string = "John Doe"                 // now we will try to display this in our html file   -- we will use variable binding to display
  count: number = 0; 



  // crousel -  slide window like multiple image in instagram we have to slide to see next image

  imageArr: string [] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7A0lJjvmTZiglvtbRFkjFbPkuE9Q8vMKpPBuDl6uROQ&s=10",
    "https://static.vecteezy.com/system/resources/thumbnails/057/054/899/small/flowers-wallpaper-hd-wallpaper-free-photo.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vipCvgibg-WshNmx91lg7CAQb7d-A91AKJskTEtAsV2iW0qVpWJ0sRmA&s=10",
    "https://i.pinimg.com/736x/97/50/8e/97508e257c7eea9aec8ed30eaa05d89f.jpg"
  ]



  // event binding
  incrementVal():void {
    // this.count++;
    this.count = (this.count + 1) % this.imageArr.length;
    }

  //    for(let i: number =0; i<10; i++){         // not working
  //     this.count++;
  // }
  // }

  decrementVal():void{
    if(this.count > 0) {
      // this.count--;
      this.count = (this.count - 1 + this.imageArr.length) % this.imageArr.length;
    }
  }

  // Property binding - [[]]   - //




 
}
