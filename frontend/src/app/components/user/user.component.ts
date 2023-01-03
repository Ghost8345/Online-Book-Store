import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  ngOnInit(): void {
    document.getElementById("body")!.style.display="block";
  }
  //mostRecent:{id:0,cover:"",Title:"",price:0,category:"",publisher:"",Quantity:0}[]=[];
 
  mostRecent=[{isbn:0,coverImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JsyV5aGFWhpAaPlG-R6gbwxUNkMSWR2k3A&usqp=CAU"
,title:"Harry Poter",price:600,category:"action",publisherName:"Elshrouk",stockQuantity:120,authors:"lol"}];


  aboutproduct(
    isbn: number,
    title: string,
    publisherName:String,
    authors: string,
    coverImage: string,
    price: number,
    stockQuantity: number,
    category: string){
    let  product={id:isbn,name:title,publisher:publisherName,authors:authors,img:coverImage,price:price,Quantity:stockQuantity,category:category};
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
 /* localStorage.removeItem("CartProducts");
  localStorage.removeItem("subtotal");
  localStorage.removeItem('itemsincart')*/
   let cart:{product_id:number,image:string,name:string,price:number,duplication:number}[]=[];
  let duplicate:{id:number,num:number}[]=[]
  let aux:{product_id:number,image:string,name:string,price:number,duplication:number}={product_id:0,image:"",name:"",price:0,duplication:0};
  let subtotal=0;
  aux.product_id=this. mostRecent[pos].isbn;
  aux.image=this. mostRecent[pos].coverImage;
  aux.name=this. mostRecent[pos].title;
  ;
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

clossing(){
 
  document.getElementById("myModal3")!.style.display="none";
}
}

