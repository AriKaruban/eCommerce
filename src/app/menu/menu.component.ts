import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  food=[
    {name:"French Fries with Ketchup",price:4.5,img:'../assets/images/plate__french-fries.png'},
    {name:"Salmon and Vegetables",price:4.5,img:'../assets/images/plate__salmon-vegetables.png'},
    {name:"Spaghetti with Meat Sauce",price:4.5,img:'../assets/images/plate__spaghetti-meat-sauce.png'},
    {name:"French Fries with Ketchup",price:4.5,img:'../assets/images/plate__french-fries.png'},
    {name:"Salmon and Vegetables",price:4.5,img:'../assets/images/plate__salmon-vegetables.png'},
    {name:"Spaghetti with Meat Sauce",price:4.5,img:'../assets/images/plate__spaghetti-meat-sauce.png'},
  ]
  colors=['#e1f0fe','#f7f7ff','#defef0','#fbe4f0']
  constructor() { }
  colorpicker(){
    return this.colors[this.getRandomInt(this.colors.length)]
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  ngOnInit(): void {
  }

}
