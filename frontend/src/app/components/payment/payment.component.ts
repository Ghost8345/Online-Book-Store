import { Component } from '@angular/core';

import { Payment} from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  ngOnInit(): void {
    document.getElementById("body")!.style.display="block";
    }
    payment =new Payment('','','')
    submit(){
     let cart=JSON.parse(localStorage.getItem('cart')!);
     console.log(cart);
      console.log(this.payment.CVC +" "+ this.payment.CardNumber+ " "+ this.payment.expiryDate)
    }


}
