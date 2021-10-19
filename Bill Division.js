let n = 4, k = 1;
let bill = [3, 10, 2, 9];
let b = 7;

function bonAppetit(bill, k, b) {
    let sum = bill.reduce((acc, cur) => acc + cur);
    let annShouldPay = (sum - bill[k]) / 2;
    let BrianOwes = b - annShouldPay;

    if (BrianOwes === 0) {
        console.log("Bon Appetit")
    } else console.log(BrianOwes)
}

bonAppetit(bill, k, b)