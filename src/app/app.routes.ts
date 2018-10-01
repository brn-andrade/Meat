import { Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { OrderComponent } from 'app/order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { LoggedInGuard } from './auth/loggedin.guard';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/:to', component: LoginComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent },
        ]
    },
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'order', loadChildren: 'app/order/order.module#OrderModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]
    },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: '**', component: NotFoundComponent },

]
