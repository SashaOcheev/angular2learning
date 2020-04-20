import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h2>Привязка элемента (односторонняя)</h2>
        <p>Имя: {{ name }}</p>
        <p>Возраст: {{ age }}</p>
        <br/><br/>

        <h2>Привязка свойств элементов (односторонняя)</h2>
        <input type="text" [value]="name">
        <p [textContent]="name"></p>
        <br/><br/>

        <h2>Привязка к событию</h2>
        <p>Количество кликов {{ count }}</p>
        <button (click)="increase()">Click: (click)="increase()</button>
        <br/><br/>
        <button on-click="increase()">Click: on-click="increase()</button>
        <br/><br/>
        <button (click)="increaseEvent($event)">Click: (click)="increaseEvent($event)</button>
        <br/><br/>
    
        <h2>Двусторонняя привязка</h2>
        <p>Привет {{ name }}</p>
        <input type="text" [(ngModel)]="name" />
        <br/><br/>
        <input type="text" [(ngModel)]="name" />
    `
})

export class AppComponent {
    name: string = 'Tom';
    age: number = 25;

    count: number = 0;
    increase(): void {
        this.count++;
    }
    increaseEvent($event): void {
        this.count++;
        console.log($event);
    }
}