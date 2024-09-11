const readlineSync = require('readline-sync');
var sum = 0;
console.log("List of Items is as follows:- \n Soap : $299\n Shampoo : $399\n Comb : $199\n Oil : $350\n Wax : $150\n ")

class cart {
    constructor(item,price,discount,count) {
        
         this.item =item;
         this.price=price;
         this.discount=discount;
         this.count = count;
    }

    
}
var ob1 = new cart("",0,0,0);
var ob2 = new cart("",0,0,0);
var ob3 = new cart("",0,0,0);
var ob4 = new cart("",0,0,0);
var ob5 = new cart("",0,0,0);
var nn = [];
var q1 = readlineSync.question("Do you want to add items to cart? yes/no : ");
if(q1 == "yes"){
   
    addItemtoCart();
    
while(true){
    var q2 = readlineSync.questionInt("If you want to remove items from cart, press 1 or \nif you want to just view the items list with prices, press 2 or \nif you want to proceed to billing, press 3 :  ");
    if(q2 == 1){
       removeItemfromCart();
       
    }
    else if(q2 == 2){
       listItems();
    }
    else if(q2 == 3){
        listItems();
        totalCost();
        break;
    }
    
}
}
else if(q1 == "no"){
console.log("Okay 😊");
}
else{
    console.log("Wrong input");
}
function addItemtoCart() {
    var n1 = readlineSync.questionInt("Enter number of items you want to add (only 5 items added from 1 to 5): ");
   
    for(var i = 1; i <= n1;i++){
        var a1 = readlineSync.question("Enter item number " + i + " name from above list of items : ");
        a1 = a1.toLowerCase();
        var c1 = readlineSync.questionInt("Enter how many " + a1 + " do you want to add to your cart? : ");
        nn.push(a1);
    
        if (nn.includes("soap")){
         ob1 = new cart("soap",299,0,c1);
          
        }
        else if(nn.includes("shampoo")){
             ob2 = new cart("shampoo",399,0,c1);
            
        }
        else if(nn.includes("comb")){
             ob3 = new cart("comb",199,0,c1);
           
        }
        else if(nn.includes("oil")){
             ob4 = new cart("oil",350,0,c1);
            
        }
        else if(nn.includes("wax")){
             ob5 = new cart("wax",150,0,c1);
        }

        else{
            console.log("Wrong name entered! Enter valid name...");
            process.exit();
        }
        console.log("Item added Successfully!");
    }
        listItems();
    }    
function totalCost(){
    sum = (ob1.price*ob1.count) + (ob2.price*ob2.count) + (ob3.price*ob3.count) + (ob4.price*ob4.count) + (ob5.price*ob5.count);
    discounts();
    console.log("Total cost of all items after 20% discount is $" + sum);
}
function discounts(){
    
    
    if(sum>= 600){
        sum = sum - (sum * (20/100));
        console.log("Total Price is above 600 so 20% discount applied!");
    }
    else{
        console.log("Price is below 600 so no discount!");
    }
}
function removeItemfromCart() {
    var n2 = readlineSync.questionInt("Enter number of items you want to remove : ");
    for (var i = 1; i <= n2; i++) {
        var a2 = readlineSync.question("Enter item number " + i + " name to be removed from list : ").toLowerCase();
        var c2 = readlineSync.questionInt("Enter the quantity of this item to be removed from cart : ");

        
        if (nn.includes(a2)) {
            
            nn = nn.filter(item => item !== a2);

            
            if (a2 === "soap" && ob1.count > 0) ob1.count = ob1.count-1; 
            if (a2 === "shampoo"&& ob2.count > 0) ob2.count = ob2.count-1; 
            if (a2 === "comb"&& ob3.count > 0) ob3.count = ob3.count-1; 
            if (a2 === "oil"&& ob4.count > 0) ob4.count = ob4.count-1; 
            if (a2 === "wax"&& ob5.count > 0) ob5.count = ob5.count-1; 

            console.log(a2 + " removed successfully!");
        } else {
            console.log("Error! " + a2 + " is not in the cart.");
        }
    }

    console.log("Updated cart is as follows:");
    listItems(); 
}

function listItems() {
    console.log("List of items in the cart along with their prices and quantities are as follows:");
    if (ob1.price > 0) console.log(ob1.item + ": $" + ob1.price + " Quantity : " + ob1.count);
    if (ob2.price > 0) console.log(ob2.item + ": $" + ob2.price + " Quantity : " + ob1.count);
    if (ob3.price > 0) console.log(ob3.item + ": $" + ob3.price + " Quantity : " + ob1.count);
    if (ob4.price > 0) console.log(ob4.item + ": $" + ob4.price + " Quantity : " + ob1.count);
    if (ob5.price > 0) console.log(ob5.item + ": $" + ob5.price + " Quantity : " + ob1.count);
}