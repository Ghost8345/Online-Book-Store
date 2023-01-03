
export class Payment{
    constructor(
        public CardNumber: string,
        public CVC: string,
        public expiryDate:String
    ) { }
}