console.log("Phone Prices")

let phonePrice = 119.95;
let taxRate = 5 / 100 * 119.95;
let phonePriceWithoutTaxRate = phonePrice - taxRate ;
console.log( "One Phone Price Without Tax Rate: ", phonePriceWithoutTaxRate);
console.log( "Tax Rate For One Phone:", taxRate);
console.log( "One Phone Price", phonePrice);

let phonePriceFor30PhonesWithoutTaxRate = 30 * phonePriceWithoutTaxRate;
let taxRateFor30Phones = 30 * taxRate;
let phonePriceFor30Phones = 30 * phonePrice;
console.log( "Price for 30 Phones Without Tax Rate: ", phonePriceFor30PhonesWithoutTaxRate);
console.log( "Tax Rate For 30 Phones: ", taxRateFor30Phones);
console.log( "Price For 30 Phones: ", phonePriceFor30Phones);
