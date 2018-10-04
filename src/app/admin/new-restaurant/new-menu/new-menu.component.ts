import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NotificationService } from '../../../shared/messages/notification.service';

@Component({
  selector: 'mt-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {

  @Input() menu: FormArray;
  formMenu: FormGroup;

  constructor(private fb: FormBuilder, private message: NotificationService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formMenu = this.fb.group({
      id: '',
      imagePath: '',
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: 0,
      restaurantId: ''
    })
  }

  saveMenu() {
    if (!this.formMenu.value.imagePath) {
      this.formMenu.controls.imagePath.setValue('assets/img/404.png');
    }

    this.menu.push(this.formMenu);
    this.initForm();
    this.message.notify('Produto Adicionado no menu.');

  }
}
