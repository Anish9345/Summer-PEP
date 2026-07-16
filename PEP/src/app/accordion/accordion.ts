import { Component, contentChild } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  accordionData = [
    {
      title: 'Introduction',
      content: 101,
      isopen: true,
    },
    {
      title: 'Getting Started',
      content: 204,
      isopen: false,
    },
    {
      title: 'Advanced Features',
      content: 404,
      isopen: false,
    },
  ];
  
  toggleAccordion(idx: number) {
    console.log('Toggled according at index:', idx);
    this.accordionData[idx].isopen = !this.accordionData[idx].isopen;
  }
}

// @if - new modele , **if -old
