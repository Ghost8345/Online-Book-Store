import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private router:Router){}

  subtotal=JSON.parse(localStorage.getItem("subtotal")!);
  Total=JSON.parse(localStorage.getItem("subtotal")!)+20;
bestsellerproducts= JSON.parse(localStorage.getItem("CartProducts")!) ;
loggedin=JSON.parse(localStorage.getItem("UserLoggedIn")!);
EmptyCart=JSON.parse(localStorage.getItem("CartProducts")!).length;

 increaseValue(id:any) {
  let pos=0;
  for( var i=0;i<this.bestsellerproducts.length;i++){
    if(this.bestsellerproducts[i].product_id==id){
      pos=i;
      break;
    }
  }
  var value = parseInt((<HTMLInputElement>document.getElementById(id)).value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  let val=String(value);
 let  productprice=value*this.bestsellerproducts[pos].price;
 let sub=String( productprice);
 this.subtotal+=this.bestsellerproducts[pos].price;
 localStorage.setItem('subtotal',JSON.stringify( this.subtotal));
 this.bestsellerproducts[pos].duplication+=1;
 localStorage.setItem("CartProducts",JSON.stringify( this.bestsellerproducts));
 this.Total=this.subtotal+20;

  (<HTMLInputElement>document.getElementById(id)).value=val ;
  (<HTMLInputElement>document.getElementById("sub"+id)).textContent=sub ;

  console.log("kkkkkkkkk")
}
decreaseValue(id:any) {
  console.log("kkkkkkkkk")
  let pos=0;
  for( var i=0;i<this.bestsellerproducts.length;i++){
    if(this.bestsellerproducts[i].product_id==id){
      pos=i;
      break;
    }
  }
  var value = parseInt((<HTMLInputElement>document.getElementById(id)).value, 10);
  value = isNaN(value) ? 1 : value;
  if(value>1){
    value--;
  let val=String(value);
  (<HTMLInputElement>document.getElementById(id)).value = val;
  this.bestsellerproducts[pos].duplication-=1;
  localStorage.setItem("CartProducts",JSON.stringify (this.bestsellerproducts));
  let productprice=value*this.bestsellerproducts[pos].price;
  this.subtotal-=this.bestsellerproducts[pos].price;
  localStorage.setItem('subtotal',JSON.stringify( this.subtotal));
  this.Total=this.subtotal+20;
   let sub=String( productprice);
   (<HTMLInputElement>document.getElementById("sub"+id)).textContent=sub ;
  }
}
removeItemFromCart(id:any){
  let productInCart:{product_id:number,image:string,name:string,price:number,duplication:number}[]=[];
  let itemsnum=0;
  productInCart=JSON.parse(localStorage.getItem("CartProducts")!);
  let index=productInCart.indexOf(id);
  console.log("from index"+index)
  for(var i=0;i<productInCart.length;i++){
    if(productInCart[i].product_id==id){
      itemsnum=JSON.parse( localStorage.getItem('itemsincart')!)
     itemsnum-=productInCart[i].duplication;
  localStorage.setItem('itemsincart',JSON.stringify (itemsnum));
      console.log("from loop: "+i);
      this.subtotal-=productInCart[i].price*productInCart[i].duplication;
      this.Total=this.subtotal+20;
      localStorage.setItem("subtotal",JSON.stringify(this.subtotal))
      productInCart.splice(i,1);
      localStorage.setItem("CartProducts",JSON.stringify(productInCart));
      console.log("productsssss"+productInCart.length);
      this.bestsellerproducts=productInCart;
      if(productInCart.length==0){
        this.router.navigate(['/bestseller'])

      }
      
    }
  }
  
 

}
proceedToCheckOut(){
  document.getElementById("myModal2")!.style.display="block";
}
 
yes(){
  document.getElementById("myModal2")!.style.display="none";
  document.getElementById("myModal3")!.style.display="block";
 let listDto:{UserID:Number,productId:Number,quantity:Number,time:Date}[]=[]
  let dateTime = new Date();
  let temp:{UserID:Number,productId:Number,quantity:Number,time:Date}={UserID:0,productId:0,quantity:0,time:dateTime}
  let productInCart:{product_id:number,image:string,name:string,price:number,duplication:number}[]=[];
  //temp.UserID=JSON.parse(localStorage.getItem("UserId")!);
  temp.time=dateTime;
  productInCart=JSON.parse(localStorage.getItem("CartProducts")!);
  for(var i=0;i<productInCart.length;i++){
    temp.productId=productInCart[i].product_id
    temp.quantity=productInCart[i].duplication
    listDto.push(temp);
  }
 /* let p:Product[]=[];
  localStorage.setItem("CartProducts",JSON.stringify(p));
  console.log(localStorage.getItem("CartProducts"))
  localStorage.setItem('itemsincart',"0");
  localStorage.setItem("subtotal","0")
  this.router.navigate(['/bestseller'])*/
 
  

  //call back*/
}
clossing(){
  document.getElementById("myModal2")!.style.display="none";
  document.getElementById("myModal3")!.style.display="none";
}
close(){

  document.getElementById("myModal3")!.style.display="none";
}
}
