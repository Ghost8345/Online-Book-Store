import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CreditCard} from './CreditCard';
import { Requests } from './request';
import { UploadItem } from '../add-book/add-book';
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
    request= new Requests(0,this.creditCard,[])
    submit(){
      

      //console.log(this.payment.CVC +" "+ this.payment.CardNumber+ " "+ this.payment.expiryDate)

     let cart=JSON.parse(localStorage.getItem('cart')!);
     console.log(cart);
     this.request.userId=JSON.parse (localStorage.getItem("user_id")!)
     this.request.creditCard=this.creditCard
     this.request.items=cart

     console.log(this.creditCard.number+" "+this.creditCard.cvv+" " +this.creditCard.expMonth +" "+this.creditCard.expYear)
     const headerr = new HttpHeaders({ 'Content-Type': 'application/json', 'authentication': 'key' });
    this.http.post('http://localhost:8080/api/orders', this.request, { headers: headerr, responseType: 'text' })
      .subscribe({
        next: (data: any) => {
          console.log("hii")
          console.log(data)
          let p:UploadItem[]=[];
          localStorage.setItem("CartProducts",JSON.stringify(p))
          localStorage.setItem('itemsincart',"0");
          localStorage.setItem("subtotal","0")
          localStorage.removeItem("cart")
          localStorage.removeItem("CartProducts")
          this.router.navigateByUrl("user")

         
        },
        error: (error: any) => {

         console.log(error)
        
          alert("Failed to place the order.")
         
        }
      });

      //console.log(this.payment.CVC +" "+ this.payment.CardNumber+ " "+ this.payment.expiryDate)

    }


}
