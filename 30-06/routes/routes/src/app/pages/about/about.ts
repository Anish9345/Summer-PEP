import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

parentData = input<string>();

ngOnInit(){
  console.log(" cI");
}

ngOnChanges(){
  console.log("cC");
}

ngOnDestory(){
  console.log("cD");
}

}
