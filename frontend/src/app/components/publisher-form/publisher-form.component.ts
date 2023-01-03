import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }


  Publisher = new Publisher('','', '');
  

  onSubmit() {
   
  }
}