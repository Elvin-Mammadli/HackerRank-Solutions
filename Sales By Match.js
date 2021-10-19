// let n = 9;
// const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
    let sockCount = {};
    let pairSum = 0;
    for (let i = 0; i < n; i++) {
        let count = 1;
        if (`${ar[i]}` in sockCount) {
            continue;
        }
        else {
            sockCount[ar[i]] = 0;
        }
        for (let j = i + 1; j < n; j++) {
            if (ar[i] === ar[j]) {
                count++;
            }
        }
        sockCount[ar[i]] = count;
    }
    for (prop in sockCount) {
        pairSum += Math.floor(sockCount[prop] / 2);
    }
    return pairSum;
}

// sockMerchant(n, arr)