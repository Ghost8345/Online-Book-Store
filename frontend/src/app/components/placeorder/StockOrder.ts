export class StockOrder {
  public id: number | undefined;
  public isbn: number;
  public quantity: number;


  constructor(isbn: number, quantity: number) {
    this.isbn = isbn;
    this.quantity = quantity;
  };

  setId(id: number): void {
    this.id = id;
  }
}
