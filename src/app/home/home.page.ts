import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
    {
    itemName: 'Coding',
    itemDueDate: '7/13/2021',
    itemPriority: 'high',
    itemCategory: 'Work'
    },
    {
      itemName: 'Design',
      itemDueDate: '7/18/2021',
      itemPriority: 'low',
      itemCategory: 'Work'
    },
    {
      itemName: 'Shop for gift',
      itemDueDate: '7/31/2021',
      itemPriority: 'middle',
      itemCategory: 'Personnel'
    },
    {
      itemName: 'Record DJ mix',
      itemDueDate: '7/31/2021',
      itemPriority: 'high',
      itemCategory: 'Personnel'
    }
    
];

today : number = Date.now();

  constructor() {}

}
