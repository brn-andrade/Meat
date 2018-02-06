import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from 'app/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from 'app/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from 'app/app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
  ],
  providers:[RestaurantsService]
})
export class RestaurantDetailModule { }
