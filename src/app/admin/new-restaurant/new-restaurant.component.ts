import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NotificationService } from '../../shared/messages/notification.service';

@Component({
  selector: 'mt-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {

  formRestaurant: FormGroup

  constructor(private fb: FormBuilder, private notify: NotificationService) { }

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
      menu: this.fb.array([
        {
          id: 'cup-cake',
          imagePath: 'assets/img/foods/cupcake.png',
          name: 'Cup Cake',
          description: 'Cup Cake recheado de Doce de Leite',
          price: 8.7,
          restaurantId: 'bread-bakery'
        }
      ])
    });
  }
  get menu(): FormArray {
    return this.formRestaurant.get('menu') as FormArray;
  };
  save() {
    const id = this.formRestaurant.value.name.
      toLowerCase().replace(' ', '-')
    this.formRestaurant.controls.id.setValue(id)

    console.log('save', this.formRestaurant.value);

  }

  removeMenu(index: number) {
    this.menu.removeAt(index)
    this.notify.notify('Produto do menu removido.')
  }

}
