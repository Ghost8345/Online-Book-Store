import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";
import {StockOrder} from "./components/placeorder/StockOrder"
import {MessageComponent} from "./components/message/message.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) {
  };

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
    //responseType: 'text'
  };

  public getPendingOrders(managerId: number): Observable<StockOrder[]> {
    return this.http.get<StockOrder[]>(`http://localhost:8080/api/stock/` + managerId);
  }
 /* public confirmOrder(managerId: number, orderId: number): Observable<Text> {
    return this.http.delete<Text>(`http://localhost:8080/api/stock/` + managerId + `/` + orderId, this.requestOptions);
  }
*/
  public confirmOrder (managerId: number, orderId: number)  {
    const headerrr = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.delete(`http://localhost:8080/api/stock/` + managerId + `/` + orderId, {
      headers: headerrr,
      responseType: 'text'
    })
      .subscribe({
        next: (data: any) => {
          console.log(data)
        }
      });
  }

  public makeOrder(managerId: number, newOrder: StockOrder): any {
    this.http.put<number>(`http://localhost:8080/api/stock/` + managerId, newOrder).pipe(catchError(err => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Invalid ISBN',
        showConfirmButton: false,
        timer: 1500
      })
      return throwError(err);
    })).subscribe((response) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Order placed Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      return response;
    });
  }

}
