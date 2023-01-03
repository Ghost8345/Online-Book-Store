import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  SendSelectedCategory( Category:string){
    localStorage.setItem("categoryName",Category);
    console.log(Category);
    //Backendcall

  }
  }
 

