import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
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
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Publisher added Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          
          this.router.navigateByUrl('addbook')
         }
         
        },
        error: (error: any) => {
          console.log(error.error)
           if(error.error=="Publisher Phone Already Exists"){
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Publisher Phone Already Exists',
              showConfirmButton: false,
              timer: 1500
            })
           }
           else if(error.error=="Publisher Name Already Exists"){
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Publisher Name Already Exists',
              showConfirmButton: false,
              timer: 1500
            }) 
           }
                }
      });
  }
}