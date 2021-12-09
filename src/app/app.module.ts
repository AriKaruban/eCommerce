import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FooditemComponent,
    CartitemComponent,
    MenuComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
