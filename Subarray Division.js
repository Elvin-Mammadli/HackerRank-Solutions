// let n = 5; // the number of squares in the chocolate bar
// let arr = [1, 2, 1, 1, 2] // the numbers on the chocolate squares
// let d = 3; // bday - choco square sum
// let m = 2; // bmonth - choco square count to share

function birthday(s, d, m) {
    let check = 0;
    let t = s.length - m + 1;
    for (let i = 0; i < t; i++) {
        if (s.slice(i, m + i).reduce((a, b) => a + b) === d) {
            check++;
        }
    }
    return check;
}