import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    AdminComponent,
    NewRestaurantComponent,
    IndexComponent
  ]
})
export class AdminModule { }
