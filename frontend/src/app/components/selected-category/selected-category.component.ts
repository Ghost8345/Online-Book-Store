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
      let  product={id:isbn,name:title,publisher:publisherName,authors:authors,publicationYear:publicationYear,img:coverImage,price:price,Quantity:stockQuantity,threshold:threshold,category:category};
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
  
  
 /* localStorage.removeItem("CartProducts");
  localStorage.removeItem("subtotal");
  localStorage.removeItem('itemsincart')*/
  let cart:{isbn:number,image:string,title:string,price:number,copies:number}[]=[];
  let aux:{isbn:number,image:string,title:string,price:number,copies:number}={isbn:0,image:"",title:"",price:0,copies:0};
  let subtotal=0;
  aux.isbn=this.categorybooks[pos].isbn;
  aux.image=this.categorybooks[pos].coverImage;
  aux.title=this.categorybooks[pos].title;
  aux.price=this.categorybooks[pos].price;
  aux.copies=1;
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
    if(cart[i].isbn==this.categorybooks[pos].isbn){
       flag=1;
       cart[i].copies+=1;
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
clossing(){
 
  document.getElementById("myModal3")!.style.display="none";
}
}

