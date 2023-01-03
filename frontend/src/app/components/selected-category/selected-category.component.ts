import { Component } from '@angular/core';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css']
})
export class SelectedCategoryComponent {
  categorybooks=[{id:0,cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JsyV5aGFWhpAaPlG-R6gbwxUNkMSWR2k3A&usqp=CAU"
  ,Title:"Harry Poter",price:600,category:"action",publisher:"Elshrouk",Quantity:0,authors:"lol"}];
  name=localStorage.getItem("categoryName")
  ngOnInit(): void {
  
    }
      


  aboutproduct(id:number,cover:string,name:string,price:number,category:string,Quantity:number,authors:string,publisher:string){
    let  product={id:id,img:cover,name:name,price:price,category:category,Quantity:Quantity,authors:authors,publisher:publisher};
      localStorage.setItem("aboutProduct",JSON.stringify(product));


}

AddProduct(id:any){
  ///call back to get rate
  let pos=0;
  for(var i=0;i<this.categorybooks.length;i++){
    if(this.categorybooks[i].id==id){
           pos=i;
           break;
    }
  }
  
  if(this.categorybooks[pos].Quantity<=0){
    document.getElementById("outofstock3")!.style.visibility="visible";
  }
  else{
 /* localStorage.removeItem("CartProducts");
  localStorage.removeItem("subtotal");
  localStorage.removeItem('itemsincart')*/
  this.categorybooks[pos].Quantity--;
   let cart:{product_id:number,image:string,name:string,price:number,duplication:number}[]=[];
  let duplicate:{id:number,num:number}[]=[]
  let aux:{product_id:number,image:string,name:string,price:number,duplication:number,quantity:number}={product_id:0,image:"",name:"",price:0,duplication:0,quantity:0};
  let subtotal=0;
  aux.product_id=this.categorybooks[pos].id;
  aux.image=this.categorybooks[pos].cover;
  aux.name=this.categorybooks[pos].Title;
  aux.price=this.categorybooks[pos].price;
  aux.duplication=1;
  aux.quantity=this.categorybooks[pos].Quantity;
  let flag=0;

  if(localStorage.getItem("CartProducts")==null){
  
    cart.push(aux);
    subtotal=this.categorybooks[pos].price;
   localStorage.setItem("subtotal",JSON.stringify (subtotal));
   localStorage.setItem("CartProducts",JSON.stringify(cart));
  }
  else{
  cart=JSON.parse (localStorage.getItem("CartProducts")!)
  for(var i=0;i<cart.length;i++){
    if(cart[i].product_id==this.categorybooks[pos].id){
       flag=1;
       cart[i].duplication+=1;
       subtotal=JSON.parse (localStorage.getItem("subtotal")!);
  subtotal+=this.categorybooks[pos].price;
  localStorage.setItem("subtotal",JSON.stringify (subtotal));
  localStorage.setItem("CartProducts",JSON.stringify(cart));
  break;
    }
  }
  if(flag==0){
  cart.push(aux);
  subtotal=JSON.parse (localStorage.getItem("subtotal")!);
  subtotal+=this.categorybooks[pos].price;
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

