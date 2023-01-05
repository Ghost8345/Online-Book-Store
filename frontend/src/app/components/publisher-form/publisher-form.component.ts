import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Publisher } from './publisher';
@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrls: ['./publisher-form.component.css']
})
export class PublisherFormComponent implements OnInit {

  ngOnInit(): void {
    document.getElementById("body")!.style.display="none";
    document.getElementById("mySidenav")!.style.width="0";
  }
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  Publisher = new Publisher('','', '');
  

  submit() {
   console.log(this.Publisher.address);
   this.publisher()
   
  }
  publisher(){
    const headerr = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:8080/api/publisher', this.Publisher, { headers: headerr, responseType: 'text' })
      .subscribe({

        next: (data: any) => {
         if(data=="Publisher was created successfully."){
          console.log("Publisher was created successfully.")
          this.router.navigateByUrl('addbook')
         }
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  }
}