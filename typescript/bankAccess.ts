class Bank{
    public name:string;
    private accountID:string;
    protected money:number;

    constructor(name:string, accountID:string, money:number){
        this.name=name;
        this.accountID=accountID;
        this.money=money;


    }

    get getID(){
        return this.accountID;
    }

    set setID(accountID:string){
        this.accountID=accountID;
    }
}

let bank1 = new Bank("Chinmay", "2376824", 7000000);
console.log(bank1.name);
console.log(bank1.getID);

