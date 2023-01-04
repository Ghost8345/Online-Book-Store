import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  // load(id:String,filename:String){
  //   var element =<HTMLInputElement>document.getElementById("element")
  //   let file= filename.substring(filename.lastIndexOf("/")+1,filename.length)
  //  let xhttp

  //   if(file){
  //      xhttp=new XMLHttpRequest();
  //      xhttp.onreadystatechange= function(){
  //       if(this.readyState==4){
  //         if(this.status==200){this.element.innerHTML=this.responseText}
  //         if(this.status == 404){this.element.innerHtml = "<h1>page not found</h1>" }
  //       }
  //      }

  //      xhttp.open("GET",`templates/${file}`,true)
  //      xhttp.send();
  //   }
   
  // }

}
