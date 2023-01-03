import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UploadItem } from './add-book';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  //selectedFile : File = null
  ngOnInit(): void {
    document.getElementById("body")!.style.display="none";
    document.getElementById("mySidenav")!.style.width="0";
  }
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  uploadItem = new UploadItem('','', '','', '','', 0, 0, 0, 0);
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
//this.upload
  }
  upload(){
    // this.uploadItem.category_id = this.categories.indexOf(this.categoryName)
    if (this.uploadItem.title.length < 3) {
      // Swal.fire({
      //   position: 'center',
      //   icon: 'warning',
      //   title: 'Title must be at least 3 characters',
      //   showConfirmButton: false,
      //   timer: 2000
      // })
      return;
    }
   
    if (this.uploadItem.price == 0) {
      // Swal.fire({
      //   position: 'center',
      //   icon: 'warning',
      //   title: 'Price can not be zero',
      //   showConfirmButton: false,
      //   timer: 2000
      // })
      return;
    }
    // if (this.uploadItem.category == -1) {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'warning',
    //     title: 'You must choose a category',
    //     showConfirmButton: false,
    //     timer: 2000
    //   })
    //   return;
    // }
    if (this.uploadItem.cover == "") {
      // Swal.fire({
      //   position: 'center',
      //   icon: 'warning',
      //   title: 'You must provide a photo for your product',
      //   showConfirmButton: false,
      //   timer: 2000
      // })
      return;
    }



    const headerr = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:8080/book', this.uploadItem, { headers: headerr, responseType: 'text' })
      .subscribe({

        next: (data: any) => {
          // Swal.fire({
          //   position: 'center',
          //   icon: 'success',
          //   title: 'Post has been added',
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
  goback(){
    document.getElementById("body")!.style.display="block";
  }
}