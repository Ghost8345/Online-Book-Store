import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadItem } from '../add-book/add-book';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css']
})
export class SelectedCategoryComponent {
  categorybooks:any;
  name=localStorage.getItem("categoryName")
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const headerr = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") + "" });

    this.http.get<UploadItem[]>('http://localhost:8080/api/book/category/'+this.name, { headers: headerr }
    ).subscribe({
      next: (data: any) => {
        this.categorybooks=data;
        console.log(data);
      },
      error: (error: any) => {

      }
    });
    }
      


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

