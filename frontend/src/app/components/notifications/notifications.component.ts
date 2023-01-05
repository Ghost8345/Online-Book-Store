import {Component, Inject} from '@angular/core';
import {StockServiceService} from "../../stock-service.service";
import {catchError, throwError} from "rxjs";
import {MessageComponent} from "../message/message.component";
import {StockOrder} from "../placeorder/StockOrder";


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  constructor(@Inject(StockServiceService) private stockService: StockServiceService) {
  };
  ngOnInit(): void {
    let id = localStorage.getItem("user_id");
    this.stockService.getPendingOrders(Number(id)).subscribe((response) => {
        this.stockOrders = response;
        for (let i = 0; i < response.length; i++) {
            console.log(response[i].id, response[i].isbn,response[i].quantity);
        }
      }
    );
  }

 stockOrders: StockOrder[] = [];
  neworders = [[{name: "harrypoter", quantity: 5}], [{name: "harrypoter", quantity: 5}, {
    name: "harrypoter",
    quantity: 5
  }]];
 
  onConfirm(orderId: any): void {
    let pos=0;
    for(var i =0;i<this.neworders.length;i++){
      if(this.stockOrders[i].id==orderId){
        pos=i;
        break;
      }
  
    }
    this.stockOrders.splice(pos,1);
    let id = localStorage.getItem("user_id");
    this.stockService.confirmOrder(Number(id), orderId);
  }

  
}
