import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuiler: FormBuilder,
  ) {
    this.checkoutForm = this.formBuiler.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    //주문 로직은 여기에 구현합니다.
    this.items = this.cartService.ClearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}