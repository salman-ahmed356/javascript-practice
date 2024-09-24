class Contacts{
    constructor(){
        this.list=[];
    }
    addContact(name,phone,mail){
        const index = this.list.findIndex(listname=>listname.name==name);
        if(index!=-1){
            console.log("Contact already exists on this name!");
        }
        else{
            this.list.push({name,phone,mail});
            console.log(name + " has been added to contacts.");
        }
        
    }
    deleteContact(query){
        const index = this.list.findIndex(list=>list.name==query||list.phone==query);
        if(index!=-1){
            this.list.splice(index,1);
            console.log(query + " has been removed from contacts.");
        }
        else{
            console.log("Contact not found!");
        }
    }
    updateContact(name,newPhone,newMail){
        const index = this.list.findIndex(listname=>listname.name==name);
        if(index!=-1){
            this.list[index].phone = newPhone;
            this.list[index].mail = newMail;
            console.log(name + " contact has been updated successfully!");
        }
        else{
            console.log("Contact not found...");
        }

    }
    searchContact(name){
        const index = this.list.findIndex(listname=>listname.name==name);
        if(index!=-1){
            console.log(this.list[index].name + " found in contacts!");
        }
        else{
            console.log(name + " not found in contacts!");
        }
    }
    viewContacts(){
        if(this.list.length==0){
            console.log("Contacts are empty..");
        }
        else{
        this.list.forEach(listt=>{
            console.log("Name: " + listt.name + "   Phone: " + listt.phone + "   Email: " + listt.mail);
        })
    }

}
}
const readlineSync = require('readline-sync');
const mylist = new Contacts();
let isAdding = true;
async function listingProcess(){
    
while(isAdding){
    var ans = readlineSync.questionInt(`
        Enter the option from one of the following: 
        1: Add to Contacts
        2: Remove from Contacts
        3: Update Contact
        4: Search in Contacts
        5: View all Contacts
        6: Exit

        Enter here: 
        `);
    switch(ans){
        case 1:
            var name = readlineSync.question("Enter name: ");
            var phone = readlineSync.questionInt("Enter Phone number: ");
            var mail = readlineSync.question("Enter Email: ");
            mylist.addContact(name,phone,mail);
            break;
        case 2:
            var query = readlineSync.question("Enter name or phone: ");
            mylist.deleteContact(query);
            break;
        case 3:
            var name = readlineSync.question("Enter contact name to be updated: ");
            var newPhone = readlineSync.questionInt("Enter new phone number: ");
            var newMail = readlineSync.question("Enter new Mail: ");
            mylist.updateContact(name,newPhone,newMail);
            break;
        case 4:
            var name = readlineSync.question("Enter name: ");
            mylist.searchContact(name);
            break;
        case 5:
            console.log("All contacts are as follows: -");
            mylist.viewContacts();
            break;
        case 6:
            isAdding = false;
            break;
        default:
            console.log("Invalid option, please choose between 1 and 5.");
            break;
    }
}

}
listingProcess();


