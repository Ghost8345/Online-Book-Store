import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
neworders=[{id:1,isbn:1122,quantity:50},{id:2,isbn:1515,quantity:15},{id:3,isbn:1223,quantity:15}]
confirm(id:any){
  let pos=0;
  for(var i =0;i<this.neworders.length;i++){
    if(this.neworders[i].id==id){
      pos=i;
      break;
    }

  }
  this.neworders.splice(pos,1);
//call back
}
}
