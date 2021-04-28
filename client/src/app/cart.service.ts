import { Product } from "./Interface/product";

export class CartService {
    items = [];
  
    addToCart(product) {
      this.items = this.items.filter(item => item.name != product.name);
      this.items.push(product);
    }

    updateQuantity(name,quantity)
    {
        for (var i in this.items) {
            if (this.items[i].name == name) {
                this.items[i].cartQuantity = quantity;
               break; 
            }
          }
    }



    deleteProductFromCart(name)
    {
    this.items = this.items.filter(item => item.name != name);
          
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
  }