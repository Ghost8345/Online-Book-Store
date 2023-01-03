import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aboutbook',
  templateUrl: './aboutbook.component.html',
  styleUrls: ['./aboutbook.component.css']
})
export class AboutbookComponent {
  loggedin=JSON.parse( localStorage.getItem("UserLoggedIn")!);
  SelectedProduct=JSON.parse(localStorage.getItem("aboutProduct")!);
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  
  //to submit rating of product
 
  AddProduct(){
    if(this.SelectedProduct.Quantity<=0){
      document.getElementById("outofstock2")!.style.visibility="visible"

    }
    else{
   /* localStorage.removeItem("CartProducts");
    localStorage.removeItem("subtotal");
    localStorage.removeItem('itemsincart')*/
     let cart:{product_id:number,image:string,name:string,price:number,duplication:number}[]=[];
    let duplicate:{id:number,num:number}[]=[]
    let aux:{product_id:number,image:string,name:string,price:number,duplication:number,quantity:number}={product_id:0,image:"",name:"",price:0,duplication:0,quantity:0};
    let subtotal=0;
    aux.product_id=this.SelectedProduct.id;
    aux.image=this.SelectedProduct.img;
    aux.name=this.SelectedProduct.name;
    aux.price=this.SelectedProduct.price;
    aux.duplication=1;
    aux.quantity=this.SelectedProduct.Quantity;
    let flag=0;
  
    if(localStorage.getItem("CartProducts")==null){
    
      cart.push(aux);
      subtotal=this.SelectedProduct.price;
     localStorage.setItem("subtotal",JSON.stringify (subtotal));
     localStorage.setItem("CartProducts",JSON.stringify(cart));
    }
    else{
    cart=JSON.parse (localStorage.getItem("CartProducts")!)
    for(var i=0;i<cart.length;i++){
      if(cart[i].product_id==this.SelectedProduct.id){
        
         flag=1;
         cart[i].duplication+=1;
         subtotal=JSON.parse (localStorage.getItem("subtotal")!);
    subtotal+=this.SelectedProduct.price;
    localStorage.setItem("subtotal",JSON.stringify (subtotal));
    localStorage.setItem("CartProducts",JSON.stringify(cart));
    break;
      }
    }
    if(flag==0){
    cart.push(aux);
    subtotal=JSON.parse (localStorage.getItem("subtotal")!);
    subtotal+=this.SelectedProduct.price;
   localStorage.setItem("subtotal",JSON.stringify (subtotal));
    localStorage.setItem("CartProducts",JSON.stringify(cart));
    }
  }
    let val=0;
    val=JSON.parse(localStorage.getItem("itemsincart")!);
    if(val==null){
      val=1;
    }
    else{
      val+=1;
    }
  localStorage.setItem("itemsincart",JSON.stringify(val));
  (<HTMLInputElement>document.getElementById("itemsnum")).textContent=val.toString();
    console.log("in cart -->"+(<HTMLInputElement>document.getElementById("itemsnum")).textContent)
    document.getElementById("itemsnum")!.style.display="block"
  
    }
}
delete(){
const headerrr = new HttpHeaders({ 'Content-Type': 'application/json' });
this.http.delete('http://localhost:8080/api/book/delete/'+this.SelectedProduct.id, { headers: headerrr, responseType: 'text' })
  .subscribe({

    next: (data: any) => {
     console.log(data)
    },
    error: (error: any) => {
      console.error(error);
    }
  });

}
}


