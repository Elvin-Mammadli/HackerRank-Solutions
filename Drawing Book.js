let s = 1;
let n = 8;
let p = 7;

let result = 0;
if (n / 2 >= p) {
    result = parseInt(p / 2);
}
else if (n % 2 === 0) {
    n = n + 1;
    result = parseInt((n - p) / 2)
}
else {
    result = parseInt((n - p) / 2)
}
return result;