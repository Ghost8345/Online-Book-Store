import {Component, Inject, OnInit} from '@angular/core';
import {StockServiceService} from "../../stock-service.service";
import {ProfileService} from "../../profile.service";
import {StockOrder} from "./StockOrder";
import Swal from 'sweetalert2';


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
    if(quantity<0){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Quantity can not be negative ',
        showConfirmButton: false,
        timer: 1500
      }) 
    }
    else{
    this.stockService.makeOrder(manager_id, new StockOrder(book_id, quantity));
    }
  }

  Number(value: string):number {
    return Number(value);
  }
}
