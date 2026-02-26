"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    name;
    accountID;
    money;
    constructor(name, accountID, money) {
        this.name = name;
        this.accountID = accountID;
        this.money = money;
    }
    get getID() {
        return this.accountID;
    }
    set setID(accountID) {
        this.accountID = accountID;
    }
}
let bank1 = new Bank("Chinmay", "2376824", 7000000);
console.log(bank1.name);
console.log(bank1.getID);
//# sourceMappingURL=bankAccess.js.map