class ShoppingCart {
    constructor() {
        this.cart = []; 
        this.couponDiscount = 0; 
    }
    addItemToCart(item, price, quantity, discount = 0) {
        const existingItemIndex = this.cart.findIndex(cartItem => cartItem.item === item);
        if (existingItemIndex !== -1) {
            this.cart[existingItemIndex].quantity += quantity;
            this.cart[existingItemIndex].price = price;
            this.cart[existingItemIndex].discount = discount;
        } else {
            this.cart.push({ item, price, quantity, discount });
        }
        console.log(quantity + " " + item + " has been added to cart.");
    }

    removeItemFromCart(item) {
        const itemIndex = this.cart.findIndex(cartItem => cartItem.item === item);

        if (itemIndex !== -1) {
            this.cart.splice(itemIndex, 1);
            console.log(item + " removed from cart.");
        } else {
            console.log(item + " not found in cart.");
        }
    }

    viewCart() {
        if (this.cart.length === 0) {
            console.log("The cart is empty.");
        } else {
            console.log("Items in your cart:");
            this.cart.forEach(cartItem => {
                console.log(`${cartItem.quantity} x ${cartItem.item} @ $${cartItem.price} each (Discount: ${cartItem.discount}%)`);
            });
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

async function shoppingProcess() {
    const readlineSync = require('readline-sync');
    const myCart = new ShoppingCart();

    let isShopping = true;

    while (isShopping) {
        let action = readlineSync.question(`
What would you like to do?
1. Add item to cart
2. View cart
3. Remove item from cart
4. Apply coupon
5. Proceed to billing
Enter your choice (1-5): `);

        switch (action) {
            case '1':
                let item = readlineSync.question("Enter the item name: ");
                let price = parseFloat(readlineSync.question("Enter the item price: "));
                let quantity = parseInt(readlineSync.question("Enter the quantity: "));
                let discount = parseFloat(readlineSync.question("Enter discount percentage (optional, default 0): ") || 0);
                myCart.addItemToCart(item, price, quantity, discount);
                break;
                
            case '2':
                myCart.viewCart();
                break;

            case '3':
                let removeItem = readlineSync.question("Enter the item name to remove: ");
                myCart.removeItemFromCart(removeItem);
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
