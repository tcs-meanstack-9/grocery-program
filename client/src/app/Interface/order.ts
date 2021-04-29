import { Product } from "./product";

export class Order {
  id: String;
  userId:Number;
  firstName:String;
  lastName:String;
  email:String;
  phoneNumber:String;
  address:String;
  orderDate :string;
  orderAmount :number;
    products:Product[];
  }