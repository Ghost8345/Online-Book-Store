import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { editbook } from './editbook';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  //selectedFile : File = null
  ngOnInit(): void {
    document.getElementById("body")!.style.display="none";
    document.getElementById("mySidenav")!.style.width="0";
  }
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  editbook = new editbook('','', '','', '','', 0, 0, 0, 0);
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
        this.editbook.cover = this.imageSrc
        console.log(reader.result)

        this.myForm.patchValue({ fileSource: reader.result as string });

      };

    }
  }


  addPublisher(){
    
  }

  onSubmit() {
    console.log(' title: ' + this.editbook.title + ', description: ' + 'price: ' + this.editbook.price + 'category ');
//this.upload
  }

  goback(){
    document.getElementById("body")!.style.display="block";
  }
}
