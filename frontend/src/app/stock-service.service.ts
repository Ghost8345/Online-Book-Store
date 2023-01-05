import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";
import {StockOrder} from "./components/placeorder/StockOrder"
import {MessageComponent} from "./components/message/message.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private http: HttpClient,private  dialog:  MatDialog,private  router:  Router) {
  }

  public makeOrder(managerId: number, newOrder: StockOrder): any {
    this.http.put<number>(`http://localhost:8080/api/stock/` + managerId, newOrder).pipe(catchError(err => {
      this.dialog.open(MessageComponent,{ data: {
          name:  "Please Enter a valid ISBN"
        }});
      return throwError(err);
    })).subscribe((response) => {
      this.dialog.open(MessageComponent,{ data: {
          name:  "Your order is placed successfully"
        }});
      return response;
    });
  }

}
