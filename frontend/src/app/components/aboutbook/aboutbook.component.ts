import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aboutbook',
  templateUrl: './aboutbook.component.html',
  styleUrls: ['./aboutbook.component.css']
})
export class AboutbookComponent {
  ismanager=JSON.parse(localStorage.getItem("ismanager")!);
  loggedin=JSON.parse( localStorage.getItem("UserLoggedIn")!);
  SelectedProduct=JSON.parse(localStorage.getItem("aboutProduct")!);
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  
  //to submit rating of product
 
  AddProduct(){
   
   /* localStorage.removeItem("CartProducts");
    localStorage.removeItem("subtotal");
    localStorage.removeItem('itemsincart')*/
    let cart:{isbn:number,image:string,title:string,price:number,copies:number}[]=[];
  let aux:{isbn:number,image:string,title:string,price:number,copies:number}={isbn:0,image:"",title:"",price:0,copies:0};
    let subtotal=0;
    aux.isbn=this.SelectedProduct.isbn;
    aux.image=this.SelectedProduct.img;
    aux.title=this.SelectedProduct.title;
    aux.price=this.SelectedProduct.price;
    aux.copies=1;
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
      if(cart[i].isbn==this.SelectedProduct.id){
        
         flag=1;
         cart[i].copies+=1;
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
    if(val==null||val<=0){
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
delete(){
const headerrr = new HttpHeaders({ 'Content-Type': 'application/json' });
this.http.delete('http://localhost:8080/api/book/delete/'+this.SelectedProduct.id, { headers: headerrr, responseType: 'text' })
  .subscribe({

    next: (data: any) => {
     console.log(data)
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Deleted Successfully',
      showConfirmButton: false,
      timer: 2000
    })
     this.router.navigate(["/user"])
    },
    error: (error: any) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Deletion Failed',
        showConfirmButton: false,
        timer: 2000
      })
    }
  });

}
}


