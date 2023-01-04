import { Component } from '@angular/core';

import {CreditCard} from './CreditCard';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  ngOnInit(): void {
    document.getElementById("body")!.style.display="block";
    }
    creditCard =new CreditCard(0,0,0,0)
    submit(){

      //console.log(this.payment.CVC +" "+ this.payment.CardNumber+ " "+ this.payment.expiryDate)

     let cart=JSON.parse(localStorage.getItem('cart')!);
     console.log(cart);
      //console.log(this.payment.CVC +" "+ this.payment.CardNumber+ " "+ this.payment.expiryDate)

    }


}
