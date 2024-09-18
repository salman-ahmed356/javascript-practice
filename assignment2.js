class shopCart{
    constructor(){
        this.cart=[];
        this.discount = 0;
    }

     addItems(item,price,quantity,discount=0){
        const index = this.cart.findIndex(cartItem=>cartItem.item==item);
        if(index!=-1){
            this.cart[index].price+=price;
            this.cart[index].quantity=quantity;
            this.cart[index].discount=discount;
        }
        else{
            this.cart.push({item,price,quantity,discount});
        }
        console.log(quantity + " " + item + " has been added to cart")
    }
    removeItems(item){
        const rindex = this.cart.findIndex(cartItem=>cartItem.item==item);
        if(rindex!= -1){
            this.cart.splice(rindex,1);
            console.log(item + " has been removed from the cart.");
        }
        else{
            console.log(item + " not found in the cart.");
        }
    }
    showItems(){
        if(this.cart.length==0){
            console.log("Cart is empty..");
        }
        else{
        this.cart.forEach(cartitems=>{
            console.log(cartitems.quantity + " " + cartitems.item + " for $" + cartitems.price + " at $" + cartitems.discount +  " discount.");
        })
    }
    }

    totalCost() {
        let total = 0;

        this.cart.forEach(cartItem => {
            let itemTotal = cartItem.price * cartItem.quantity;
            let discountAmount = itemTotal * (cartItem.discount / 100);
            total += itemTotal - discountAmount;
        });

        if (this.couponDiscount > 0) {
            let discountAmount = total * (this.couponDiscount / 100);
            total -= discountAmount;
            console.log(`Coupon discount of ${this.couponDiscount}% applied.`);
        }

        console.log(`Total cost: $${total.toFixed(2)}`);
        return total;
    }

    applyCoupon(code) {
        if (code === 'SAVE10') {
            this.couponDiscount = 10;
            console.log("Coupon SAVE10 applied. 10% off on total cart.");
        } else if (code === 'SAVE20') {
            this.couponDiscount = 20;
            console.log("Coupon SAVE20 applied. 20% off on total cart.");
        } else {
            console.log("Invalid coupon code.");
        }
    }

}
const readlineSync = require('readline-sync');

const myCart = new shopCart();
let isShopping = true;
async function shoppingProcess(){
while(isShopping){
    var action = readlineSync.question(`
        1. Add items to cart
        2. Check items in cart
        3. Remove items from cart
        4. Apply a coupon code
        5. Proceed to Billing


        Enter one of the option from above (1 - 5): `);
        switch(action){
            case'1':
            let item = readlineSync.question("Enter the item name: ");
                let price = parseFloat(readlineSync.question("Enter the item price: "));
                let quantity = parseInt(readlineSync.question("Enter the quantity: "));
                let discount = parseFloat(readlineSync.question("Enter discount percentage (optional, default 0): ") || 0);
                myCart.addItems(item, price, quantity, discount);
                break;
                
            case '2':
                myCart.showItems();
                break;

            case '3':
                let removeItem = readlineSync.question("Enter the item name to remove: ");
                myCart.removeItems(removeItem);
                break;

            case '4':
                let couponCode = readlineSync.question("Enter the coupon code: ");
                myCart.applyCoupon(couponCode);
                break;

            case '5':
                myCart.totalCost();
                console.log("Thank you for shopping with us!");
                isShopping = false; 
                break;

            default:
                console.log("Invalid option, please choose between 1 and 5.");
                break;
        }

        if (isShopping) {
            let continueShopping = readlineSync.question("Do you want to continue shopping? (yes/no): ");
            if (continueShopping.toLowerCase() !== 'yes') {
                isShopping = false;
                myCart.totalCost();
                console.log("Thank you for shopping with us!");
            }
        }
    }
}
shoppingProcess();

            

        
