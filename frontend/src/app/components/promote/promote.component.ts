import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-promote',
  templateUrl: './promote.component.html',
  styleUrls: ['./promote.component.css']
})
export class PromoteComponent implements OnInit {
  ngOnInit(): void {
    document.getElementById("body")!.style.display = "none";
    document.getElementById("mySidenav")!.style.width = "0";
  }
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  email: string = ""
  

  goback() {
    document.getElementById("body")!.style.display = "block";
  }
  submit() {
     this.email = (document.getElementById("email") as HTMLInputElement).value;
    console.log(this.email)

    const headerr = new HttpHeaders({ 'Content-Type': 'application/text' });
    this.http.post('http://localhost:8080/promote', this.email, { headers: headerr, responseType: 'text' })
      .subscribe({

        next: (data: any) => {
          // Swal.fire({
          //   position: 'center',
          //   icon: 'success',
          //   title: 'user promoted',
          //   showConfirmButton: false,
          //   timer: 1500
          // })
          // this.router.navigateByUrl('home')
        },
        error: (error: any) => {
          console.error(error);
        }
      });

  
  }
}
