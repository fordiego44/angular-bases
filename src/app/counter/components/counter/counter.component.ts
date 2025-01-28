import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>


  <Button (click)="increaseBy(+1)" > + 1</Button>
  <Button (click)="resetCounter()" > Reset</Button>
  <Button (click)="increaseBy(-1)" > - 1 </Button>
  `,
   standalone: false
})

export class CounterComponent   {
  constructor() { }

  public counter: number = 10;

  increaseBy( value:number):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }

}
