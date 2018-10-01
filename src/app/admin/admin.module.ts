import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { IndexComponent } from './index/index.component';

const ROUTES: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', component: IndexComponent },
      { path: 'novo', component: NewRestaurantComponent },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forChild(ROUTES)],

  ],
  declarations: [
    AdminComponent,
    NewRestaurantComponent,
    IndexComponent
  ]
})
export class AdminModule { }
