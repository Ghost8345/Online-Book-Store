import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadItem } from '../add-book/add-book';
import { global } from 'src/app/global';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }
  mostRecent:any;
  categories = ['isbn', 'title', 'author', 'publisherName', 'category'];
  categoryName="";
  ngOnInit(): void {
    document.getElementById("body")!.style.display="block";
    const headerr = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") + "" });
console.log("option-->"+localStorage.getItem('option'))
console.log("input-->"+localStorage.getItem('input'))

    this.http.get<UploadItem[]>('http://localhost:8080/api/book/'+localStorage.getItem('option')+"/"+localStorage.getItem('input'), { headers: headerr }
    ).subscribe({
      next: (data: any) => {
        if(data==null){
          console.log("leeen"+this.mostRecent.length)
          this.router.navigateByUrl('user')
            Swal.fire({
              position: 'center',
              imageUrl: "data:image/png;base64,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",
              title: 'no items match your request',
              showConfirmButton: false,
              timer: 1500
            })
          }
          else{
        this.mostRecent=data;
          }
        console.log("leeen"+this.mostRecent.length)
       
        console.log("dddddddd"+data);
      },
      error: (error: any) => {
        Swal.fire({
          position: 'center',
          imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAACyCAMAAABFl5uBAAAAwFBMVEXo9f3q9/7K3+/v+v5Ujs3n9vzs+P/p9P1Bgsjr9/9qndFGh8rv+v3F3+2lxePs9/xUj8pxotJGh8tNicmJs9vu/Pzj8/rV5/NAhM7o+PtNicxVjc6dv+BnmMuNsdvv9vu81+jc7vax0OOAqNFblMyoyeG/1emkw+KavOHS5fV/ptStzeDF2eygxN5NiMTN4+58q9GOtddPjMVildA8fMhnnctklNLQ6O/d6vTb8/XE3+m01OBypM+QtOB4pdfU4ujGfr8ZAAAMUUlEQVR4nO2dDWOauhrHDSEQTDBI5FUpAYVaq1Dr2Wm36+2+/7e6wXadduJZe7bbNfLrrFXE4d/nJXkSQq/X0dHRcW6Y730AHR0dHR3K0eWWjo6Ojo6Ojo6ON2ABwzAgNAwA3vtQ/hzMHgIMoswuLufz+WRQaj6DBnrvw/ojQCkMBguHYIybWxhiNxmVvsfOvkPCYHY5w7hKLqTBXAVXV8t8vpgRTBYiMs5aHQsGIxxWI5HBSAYay7KADDspC1Z9Em6KiL33Ab4f1B8RnOQRZKBnRnsbEKP3Ex46ObTe7eDeFZNex6S/NI67jmVEqyrsZ+lHisq/KggY/hbf5rDdbczUX7u48H7R//eBoLWDb3zj5GsYtHU8ithHMp1/jwkFJgVM/+l1qb8IP/nnFXRo7lYa/ecWMAJwjZPP5yROmhM9gD/3WroiG/SPBqYKKLVdHvx024VOyDb655epAcs4qU9H4QO8dTiiv+9w/iRMkGDxkw61g0XbMH+Flh8YbxKOvFcVIqxMr7Jz6FyBO7KJzNc1WdIlfniNpX1U4BBrr3YQeoOF+h1PQ4Q3rw+sacY36ueqqM+v9stWjJnMOqhjUdmYMawXTgcnOFe9kcO+4PW+2bB8RVMx2esysaJIjXxCD2Mv8uOh6r1OeIOD/Rzl37qFjavguVdgopjkdsiDw0xmwjXXFO86+NXwIG6kdzOXV5q3Zzd3Mx5X9UsdaI3XardxjIJcp/veYqY5jyd0P7rQPOaTH8M17N8ipds4cEqyA4tggjgbXOxFFyBcfeZeey91gCusKZ3GEU8OLQJVXMscHHw3nM8urzMdBy9TNtDwSr1e1Z5N1Hh+2L5ltU1ZIPZqxlGtQfPgmScQ2aqcqViOX3QaEaVRzzzwlVRmKPNI2IV9J1J4PBhOwh8S0G7U92d2pmucKZzF4RT7b841bIA1he2G9nl7rwgwBk4N8UiHLBVu4XjJrCVkMOjXQmg+bZ8iYJQ4V9enYM5n0bHYYqRF38Uhxm5SRG22wUQ4ULWIg2hB9Osj3zyC4jZMVqKuxaAfcgGPh2az5iT/oUmoBlIaJ6BHmrawwBubGoxZgNK6jy+PNmOQSa/GOFev+ddYzcB1MvZjuka0xIvosTbTxGI4+qutUsPuHJwr2P6jAzLLjn1mBJwk2ktPjA6dtvZOGoyJcuIgOCBOdjR/y35SyfZr64b9V9nWjmHBLc4VC8itViOdKCefDwNsVBWt7Rj1LAfKMJy1FRjAy3kS7MTECVMxy0Fwhdus5vWkd46rjuWctJpXY6ZBpYzlMBtvXkrzurnVL3aWloPrdxiQ+Q3NzmhW1elB4rGim+Dne0bW3egwwZmpRvpKtAGl2awPwwOi0/AVYwbw5oeRUDrCtQq1Y3aJ7UMjoVM8jX7eQM1o+3L+DRC4UEEbOCLZvkcBJqV5lUcAKc6h5YDgZd35Y2KsD7WRDjV9ZW/aemk5KMATFcpcxgAvv9u/CRZSmte+x85y9gyFlWG7T/2qdPJ/qIYwDX93CHMXa97wLlKcPUeEC3KnwoRs0+uT58lIxluspuEx5jz5JhRYkaEqdsUrmzZ1YugPyeKNU4wAkOJEHpIq0WVcBYqMODBByLr2UVDoPHlF8j7EZFM+KzLg1yNS2crMU4LaBpOqconj9N/uC8wmPJRvQ3C/bikpf0QsQ8wfhuvrSO+/vVkC7HBVrB8e5jZUxKEeYRaE0IDw32mDB/Jd6IlTrj4yhtN/uzc02qjQ4Gvht2mjwKhVZzftdNq002nTTqdNO79Tm48ejju7aee4Nj/5jZ+lNj9Jp007nTbtdNq0o7g27LQ2jLITJ7kyDV8qrA08qQ2w12t0UhuV7YbOZicWbDEGIffbd2YlvlZYG7glqL1mx9YxPzGHwCiwUFmbCb5q1QbRvu6W7UU9OHLvf8tR/RkwQS5bi6JRxmd81F4zRc5MiYklx2Fm78Qp8LDAecJbwxFY4okK8wNagWsi2r58b8N7BSnSlu4VHJI7NavoT1gZSVq0kaF24iHntmUBqVSQqdJmszt57njEYUHl+EAKdHN8c88hd7/30N4dhmbhsYWBLDTDIpXabXFxZHMzd6t9QrYiIBBU3KYvuwaW/0l6VLPdd9zmbPH97VEPeDdYdY9qoPUtLuiLGYB3M3ft7cb/QebgSXRw9p0Js2b2za8sev6pBVRWO2QbQPBkHKhHo0sePq+ywLIN/lRTgL7ZjkHz2/DizfMvPhbW5wUmCy1qTidjkAYrB4/t75/domtChiWiKYNpSrNiRnh+FlYjQRFdfuKhPpwMBpNRQsJqFe0XJwAMtgTz4fryUm7mIV/757QItkXreZ/jhtk0915mIMu7Wz1t1qe5D89ImV4zX9SAvStNu8oYBD+ep9hjRooCTaszxgylW8NtAACafHXUKlDPtJpVwnsnihodHR+U84qEfxD7wiPD6oLLMyaLjMfug2wle4Gt+el+sZ2xE+MOqgNz/dPT+YrQTlyX8PXeBStYkMxKdZcuOY1Zh3q83nWwYUHi2TQh8fPMdWR6CY+5p/46okdhybfyuVWHfBrRqCD821ljZjTnMyeOzlMbug4nU747awwO9U0kIzEdxfzpVDTDxn8XnJzlRWFQusQzr99og6wg5EUjiRUQXux6lmY0JnUhfeq9j/M9QH5FbCi1SXu99DLm9ztziWZ8sXMqelGN6IDHTXXi7FpY3tRdwydt4DSePXoSXHCn0SbNyd+RN9D1X1q5+SCwgswQ+KZNEg8fQ7Ax5wQ01b/KtS1Q6PqZFPz2STNONMuEu3jTo7r+VCs3LmPsA2k+0qh6RrE5x3jj9ckK9p60AZTrF0/aDKQ2CBZuIhOUMdDHCo+BHwWY3ookETAB7fMLaiJvrD/NEmAr7vbQHeG1YZlsIHP4uTmVUcsPj3zfj6Q2CKXeTF98jzc02sSrntzqF5x/9s+s8Sezkc4bKl3XK3JFFzx5XPcFTnXHK/lmU3HuVFwfV9WRRbBVhhY7ZTiRHz4mPICTivugcR6QxDcw+1t3nGYrb5RTeZbfEUwAI9icwukN47UXmcjmuylbZi8gcUFNL9pdwVa2/bhHz0uaZ77l8B6axdtmRXlvwvn3y+IYA+6eWyh+5lkbmbTdAjKo8aeaxQ6Z0MmZReI9YN8d7Xwm2sbutLjgPNkbdJF2c2LBY9WhI7x6tBM0ItwleOrvLacABE7OYGpJK/W3ijC9G0yK+vDiiSg4MRlbfZ4nCZimAZn5IvKe1aimaYCmHNMI8nh7diHZg0DNReeftZIZilrP4cZUvqgOroRgRhqxCBmNKllmQ7OZLACAmaLIMnrNmIwBDBDRGiCthqy5RJV8EtqqF0eBELWfi6BYlsv7AAChFXkmcp8tS03LA5HXoswsW9h1eTfIwOAuF/fBMpB7iFx1bcyv/rX4LLR7AZbXRg8Emci0QmRMeOUXIcRnrbADIECZUyEAKDNbs6/yOitLT/kL3oGrXESlfe/XZpZ/zVim1Vlgix4oRbAUtZ1rtvCRBrRa3Nv3loaEiPL/3GdaJpTXptezZMwFzZ3m+zJBNzNw5M2qkQUAtYVpySfkY3kHHv8wDWP3inPKWNbB+rK7LITAWSnQ0dHR8W68NdieQ4nLBGmawnboI3uP5a/0dQusf1RoPRqeYrvdytv+4+b3KFC/jmPCFYnHus7jSh/rsTOuYq7H8kfnVcXHcTwe7x7Iv6oxd3TO45jLHWJSKHp5pe+YAuuS+NN8ruuz7Th+GPSdbbzY6P+dzx/0y7UUZqqPt3xR9MmF4zzMLibzT1LMMbZVH2+gw0Yanc8vF0t38DWclok9LG4E14flOrEf1nlMahIup2IjEnON/Wk9XGzGzS5TZdaebYE6T9po+SUp59M8ifHm6/1fuk4GSX9QuTUnX6/zsnR4vxBl8mVRF8Vst4/ylWPv8XPq8wtXW3wty+IhnC6W64Gr88EwKUlYx65WVaX0qOllWQzW02X8uIf+L5b3/RiwSfNRx3xdi6KMQ/H3l2stKf76MtTjwdAtrsVFHAtelY5daLzs29NpnYtp41PuQHWfQsjZieM4jnur65UTJ1z+rUtXk3fxptl6K7fqPInls2NnLJ/fRe9E/SnqwN9y1yUN7rd/T7j79+7355tH+Eb9Wrq0HJbZ2muxM+NMCjugOeEOvIr3PuSPieqt5Y6Ojo6Ojo6ODhXpWrEdHR0dHR0dHR0dH4v/AV89/gUEXE0QAAAAAElFTkSuQmCC",
          title: 'no items match your request',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }

  //mostRecent:{id:0,cover:"",Title:"",price:0,category:"",publisher:"",Quantity:0}[]=[];
 
 /* mostRecent=[{id:0,cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JsyV5aGFWhpAaPlG-R6gbwxUNkMSWR2k3A&usqp=CAU"
,Title:"Harry Poter",price:600,category:"action",publisher:"Elshrouk",Quantity:1,authors:"lol"}];*/
searchword:any;
  search(){
    this.searchword = (document.getElementById("searchingFor") as HTMLInputElement).value;
    console.log(this.searchword)
    const headerr = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") + "" });

    this.http.get<UploadItem[]>('http://localhost:8080/api/book/'+localStorage.getItem('option')+"/"+localStorage.getItem('input'), { headers: headerr }
    ).subscribe({
      next: (data: any) => {
        this.mostRecent=data;
        console.log("dddddddd"+data);
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
