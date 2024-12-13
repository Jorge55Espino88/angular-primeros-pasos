import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent{
  public counter: number = 10;

  increaseBy(value:number):void{
    if(value == 1)
      this.counter++;
    else
      this.counter--;
  }
  reset():void{
    this.counter = 10;
  }
}

/*
import { Component } from "@angular/core";

@Component({
  selector: "app-counter", //Como quieres usar este componente en el html
  template: "<h1>Hola Counter</h1>", //Como quieres que se muestre el componente
})

export class CounterComponent{

}
*/
