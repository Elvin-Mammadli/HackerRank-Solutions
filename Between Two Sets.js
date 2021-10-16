// Examples:
// let n = 2;
// let a = [2, 6];
// let m = 2;
// let b = [24, 36];

function getTotalX(a, b) {
    let result = [];
    let n = a.length;
    let m = b.length;
    for (i = a[n - 1]; i <= b[0]; i++) {
        let flag = 0;
        for (j = 0; j < n; j++) {
            if (i % a[j] !== 0) {
                break;
            }
            flag++;
            continue;
        }
        if (flag === n) {
            let flag2 = 0;
            for (z = 0; z < m; z++) {
                if (b[z] % i !== 0) {
                    break;
                }
                flag2++;
                continue;
            }
            if (flag2 === m) {
                result.push(i);
            }
        }
    }
    return result.length;
}

console.log(getTotalX(a, b))