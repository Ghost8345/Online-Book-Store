export class StockOrder {
  public isbn: number;
  public quantity: number;


  constructor( isbn: number, quantity: number) {
    this.isbn = isbn;
    this.quantity = quantity;
  };
}
