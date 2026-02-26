"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getData() {
    let response = await fetch("https://fakestoreapi.com/products/");
    let data = await response.json();
    // console.log(data);
    return data;
}
getData()
    .then((res) => {
    console.log(res);
})
    .catch((rej) => {
    console.log(rej);
});
//# sourceMappingURL=dataFetch.js.map