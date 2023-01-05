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

  stockOrders: StockOrder[] = [];
  neworders = [[{name: "harrypoter", quantity: 5}], [{name: "harrypoter", quantity: 5}, {
    name: "harrypoter",
    quantity: 5
  }]];

  onConfirm(orderId: number): void {
    let id = localStorage.getItem("user_id");
    this.stockService.confirmOrder(Number(id), orderId);
  }

  getPendingOrders(): any {
    let id = localStorage.getItem("user_id");
    this.stockService.getPendingOrders(Number(id)).subscribe((response) => {
        this.stockOrders = response;
        for (let i = 0; i < response.length; i++) {
            console.log(response[i].id, response[i].isbn,response[i].quantity);
        }
      }
    );
  }
}
