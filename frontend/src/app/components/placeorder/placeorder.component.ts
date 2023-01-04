import {Component, Inject, OnInit} from '@angular/core';
import {StockServiceService} from "../../stock-service.service";
import {ProfileService} from "../../profile.service";
import {StockOrder} from "./StockOrder";


@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {

  constructor(@Inject(StockServiceService) private stockService: StockServiceService) {
  };

  placeOrder(book_id: number, quantity: number): void {
    let manager_id: number = Number(localStorage.getItem("user_id"));
    this.stockService.makeOrder(manager_id, new StockOrder(book_id, quantity));
  }

  Number(value: string):number {
    return Number(value);
  }
}
