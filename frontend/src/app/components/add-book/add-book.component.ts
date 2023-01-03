import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadItem } from './add-book';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {




  //selectedFile : File = null
  ngOnInit(): void {

  }
  constructor(private router: Router) { }


  uploadItem = new UploadItem('','', '','', '', 0, 0, 0, 0);
  categories = ['Science', 'Art', 'Religion', 'History Geography'];
  categoryName: string = "";

  imageSrc: string = "";
  imageName: string = "";
  imageBlob: string = "";
  myForm = new FormGroup({
    name: new FormControl(''),
    file: new FormControl(''),
    fileSource: new FormControl('')
  });



  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    console.log(event)
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageName = file.name
        this.imageBlob = file
        this.imageSrc = reader.result as string;
        this.uploadItem.cover = this.imageSrc
        console.log(reader.result)

        this.myForm.patchValue({ fileSource: reader.result as string });

      };

    }
  }


  addPublisher(){
    
  }

  onSubmit() {
    console.log(' title: ' + this.uploadItem.title + ', description: ' + 'price: ' + this.uploadItem.price + 'category ');
  }
}