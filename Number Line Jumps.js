let x1 = 0;
let v1 = 2;
let x2 = 5;
let v2 = 3;

// My custom solution. Works for all numbers. Doesn't matter if x1 < x2 or not. No constraints.
function kangaroo(x1, v1, x2, v2) {
    let dist1 = x1 + v1;
    let dist2 = x2 + v2;
    if (x1 < x2 && v1 > v2) {
        while (dist1 / dist2 < 1) {
            dist1 = dist1 + v1;
            dist2 = dist2 + v2;
        }
        if (dist1 === dist2) {
            return "YES"
        }
        else return "NO"
    }
    else if (x1 > x2 && v1 < v2) {
        while (dist2 / dist1 < 1) {
            dist1 = dist1 + v1;
            dist2 = dist2 + v2;
        }
        if (dist1 === dist2) {
            return "YES"
        }
        else return "NO"
    }
    return "NO"
}
console.log(kangaroo(x1, v1, x2, v2))



// This is version 2, but the calculation in this version is limited up to a particular number.

// let x1 = 63;
// let v1 = 8;
// let x2 = 94;
// let v2 = 3;

// let start1 = performance.now()
// function kangaroo(x1, v1, x2, v2) {
//     let n = 0;
//     while (n < 10000) {
//       if (x1 + n * v1 === x2 + n * v2) {
//         return "YES";
//       }
//       n++;
//     }
//     return "NO";
//   }

//   console.log(kangaroo(x1, v1, x2, v2))

// let end1 = performance.now()
// console.log(end1-start1)

function kangaroo(x1, v1, x2, v2) {
    if (x2 > x1 && v1 > v2) {
        if ((x2 - x1) % (v1 - v2) === 0) {
            return ('YES')
        }
        else return ("NO")
    }
    else return ("NO")
}

console.log(kangaroo(x1, v1, x2, v2))