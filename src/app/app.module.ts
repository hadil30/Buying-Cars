import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarsService} from './services/cars.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ModifyCarComponent } from './modify-car/modify-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    DetailCarComponent,
    NavMenuComponent,
    ListCarsComponent,
    AddCarComponent,
    ModifyCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
