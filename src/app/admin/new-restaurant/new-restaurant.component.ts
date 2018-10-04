import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NotificationService } from '../../shared/messages/notification.service';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {

  formRestaurant: FormGroup
  isOpen = false as boolean;
  id: string;

  constructor(private fb: FormBuilder, private message: NotificationService,
    private service: AdminService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formRestaurant = this.fb.group({
      id: '',
      name: ['', Validators.required],
      category: ['', Validators.required],
      rating: 3.0,
      deliveryEstimate: ['', Validators.required],
      imagePath: '',
      about: ['', Validators.required],
      hours: ['', Validators.required],
      menu: this.fb.array([])
    });
  }
  get menu(): FormArray {
    return this.formRestaurant.get('menu') as FormArray;
  };
  save() {
    const data = this.formRestaurant.value;
    if(!data.imagePath) {
      data.imagePath = 'assets/img/404.png'
    }
    data.menu = undefined;

    this.service.newRestaurant(this.formRestaurant.value)
      .subscribe(response => {
        this.id = response.id;
        this.saveMenuItens();
        this.message.notify('Restaurante salvo com sucesso.')
        this.router.navigate(['/restaurants'])
      })
  }

  saveMenuItens() {
    this.menu.value.forEach(menu => {
      menu.restaurantId = this.id;
      this.service.saveMenuItens(menu)
        .subscribe();
    });
  }
  removeMenu(index: number) {
    this.menu.removeAt(index)
    this.message.notify('Produto do menu removido.')
  }
  newProduct() {
    this.isOpen = !this.isOpen;
  }

}
