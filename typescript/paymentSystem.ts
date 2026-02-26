interface Payment{
    amount:number;
    mode: paymentMethod;
}

type paymentMethod = "credit" | "upi" | "netbanking";

let payment1:Payment = {
    amount:500,
    mode:"upi"
}

console.log(payment1.mode);
console.log(payment1.amount);


