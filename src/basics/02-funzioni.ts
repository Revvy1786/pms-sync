function calculateStayTotal(nights: number, pricePerNight: number): number {
    return nights * pricePerNight;
}

const total = calculateStayTotal(3, 120);
console.log(total);
console.log(calculateStayTotal(5, 90));


function calculateCityTax(nights: number, guests: number, taxPerPerson: number): number {
    return nights * guests * taxPerPerson;
}

const totaltax = calculateCityTax(3, 2, 2.5);
console.log(totaltax);



function calculateGrandTotal(nights: number, pricePerNight: number, guests: number, taxPerPerson: number): number {
    const stay = calculateStayTotal(nights, pricePerNight);
    const tax = calculateCityTax(nights, guests, taxPerPerson);
    return stay + tax; 
}


console.log(calculateGrandTotal(3, 120, 2, 2.5));
console.log(calculateGrandTotal(7, 80, 4, 3));