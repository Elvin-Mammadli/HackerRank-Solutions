// let n = 6;
// let k = 3;
// let arr = [1, 3, 2, 6, 1, 2];


function divisibleSumPairs(n, k, ar) {
    let check = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                check++;
            }
        }
    }
    return check;
}