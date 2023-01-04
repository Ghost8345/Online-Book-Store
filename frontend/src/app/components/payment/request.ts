import { CreditCard } from './CreditCard';
export class Requests{      
constructor(
       public userId:number,
       public creditCard:CreditCard,
       public items:[] 

    ) { }
}