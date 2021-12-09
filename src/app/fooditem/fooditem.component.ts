import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.scss']
})
export class FooditemComponent implements OnInit {
  @Input() name
  @Input() price
  @Input() image
  @Input() color
  constructor() { }

  ngOnInit(): void {
  }

}
