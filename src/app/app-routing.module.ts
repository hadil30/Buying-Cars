import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car/car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { ModifyCarComponent } from './modify-car/modify-car.component';

const routes: Routes = [
  {path :'',component:CarComponent},
  {path :'car/:id',component:DetailCarComponent},
  {path :'admin',component:ListCarsComponent},
  {path :'admin/add',component:AddCarComponent},
  {path :'admin/update/:id',component:ModifyCarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
