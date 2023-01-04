import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CreditCard} from './CreditCard';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {
    document.getElementById("body")!.style.display="block";
    }
    //creditCard:any=""
    creditCard =new CreditCard('',0,0,0)
    submit(){
      

      //console.log(this.payment.CVC +" "+ this.payment.CardNumber+ " "+ this.payment.expiryDate)

     let cart=JSON.parse(localStorage.getItem('cart')!);
     console.log(cart);
     console.log(this.creditCard.number+" "+this.creditCard.cvv+" " +this.creditCard.expMonth +" "+this.creditCard.expyear)
     const headerr = new HttpHeaders({ 'Content-Type': 'application/json', 'authentication': 'key' });
    this.http.post('http://localhost:8080/register/', cart, { headers: headerr, responseType: 'text' })
      .subscribe({
        next: (data: any) => {
          console.log("hii")
          console.log(data)
         
        },
        error: (error: any) => {
        
        }
      });

      //console.log(this.payment.CVC +" "+ this.payment.CardNumber+ " "+ this.payment.expiryDate)

    }


}
