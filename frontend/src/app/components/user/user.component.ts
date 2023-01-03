import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadItem } from '../add-book/add-book';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }
  mostRecent:any;
  ngOnInit(): void {
    document.getElementById("body")!.style.display="block";
    const headerr = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") + "" });

    this.http.get<UploadItem[]>('http://localhost:8080/api/book', { headers: headerr }
    ).subscribe({
      next: (data: any) => {
        this.mostRecent=data;
        console.log(data);
      },
      error: (error: any) => {

      }
    });
  }
  //mostRecent:{id:0,cover:"",Title:"",price:0,category:"",publisher:"",Quantity:0}[]=[];
 
 /* mostRecent=[{id:0,cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JsyV5aGFWhpAaPlG-R6gbwxUNkMSWR2k3A&usqp=CAU"
,Title:"Harry Poter",price:600,category:"action",publisher:"Elshrouk",Quantity:1,authors:"lol"}];*/

  aboutproduct(
    isbn: number,
    title: string,
    publisherName:String,
    authors: string,
    publicationYear:string,
    coverImage: string,
    price: number,
    stockQuantity: number,
    threshold:number,
    category: string){
    let  product={id:isbn,name:title,publisher:publisherName,authors:authors,publicationYear:publicationYear,img:"/../assets/images/"+coverImage,price:price,Quantity:stockQuantity,threshold:threshold,category:category};
  localStorage.setItem("aboutProduct",JSON.stringify(product));
 

}


AddProduct(id:any){

  ///call back to get rate
  let pos=0;
  for(var i=0;i<this. mostRecent.length;i++){
    if(this. mostRecent[i].isbn==id){
           pos=i;
           break;
    }
  }
  if(this.mostRecent[pos].Quantity<=0){
    document.getElementById("outofstock")!.style.visibility="visible"
  }
  else{
 /* localStorage.removeItem("CartProducts");
  localStorage.removeItem("subtotal");
  localStorage.removeItem('itemsincart')*/
  this.mostRecent[pos].Quantity-=1;
   let cart:{product_id:number,image:string,name:string,price:number,duplication:number}[]=[];
  let duplicate:{id:number,num:number}[]=[]
  let aux:{product_id:number,image:string,name:string,price:number,duplication:number,quantity:number}={product_id:0,image:"",name:"",price:0,duplication:0,quantity:0};
  let subtotal=0;
  aux.product_id=this. mostRecent[pos].id;
  aux.image=this. mostRecent[pos].cover;
  aux.name=this. mostRecent[pos].Title;
  aux.quantity=this.mostRecent[pos].Quantity;
  aux.price=this. mostRecent[pos].price;
  aux.duplication=1;
  let flag=0;

  if(localStorage.getItem("CartProducts")==null){
  
    cart.push(aux);
    subtotal=this. mostRecent[pos].price;
   localStorage.setItem("subtotal",JSON.stringify (subtotal));
   localStorage.setItem("CartProducts",JSON.stringify(cart));
  }
  else{
  cart=JSON.parse (localStorage.getItem("CartProducts")!)
  for(var i=0;i<cart.length;i++){
    if(cart[i].product_id==this. mostRecent[pos].isbn){
      
       flag=1;
       cart[i].duplication+=1;
       subtotal=JSON.parse (localStorage.getItem("subtotal")!);
  subtotal+=this. mostRecent[pos].price;
  localStorage.setItem("subtotal",JSON.stringify (subtotal));
  localStorage.setItem("CartProducts",JSON.stringify(cart));
  break;
    }
  }
  if(flag==0){
  cart.push(aux);
  subtotal=JSON.parse (localStorage.getItem("subtotal")!);
  subtotal+=this. mostRecent[pos].price;
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

clossing(){
 
  document.getElementById("myModal3")!.style.display="none";
}
}

