const guestName = "Mario Rossi";
let nights = 3;
const pricePerNight = 120;
const isPaid = false;
const guests = 2; 
const cityTax = 2.5
const stayTotal = nights * pricePerNight;
const taxtotal = nights * guests * cityTax
const grandtotal = stayTotal + taxtotal
nights = 4;


console.log(guestName);
console.log(nights * pricePerNight);
console.log(`Ospite: ${guestName}, totale: ${nights * pricePerNight} €`);
console.log(`Citytax: ${nights * guests * cityTax} €`)
console.log(`Grandtotal: ${grandtotal}€`)