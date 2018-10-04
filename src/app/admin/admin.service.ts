import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  newRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(`${MEAT_API}/restaurants`, restaurant)
  }
  saveMenuItens(menuItens: MenuItem): Observable<MenuItem> {
    return this.http.post<MenuItem>(`${MEAT_API}/menu`, menuItens)
  }

}
