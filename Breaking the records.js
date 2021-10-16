function breakingRecords(scores) {
    let maxcheck = 0;
    let mincheck = 0;
    let max = scores[0];
    let min = scores[0];
    let n = scores.length;
    for (let i = 1; i < n; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxcheck++;
        }
        else if (scores[i] < min) {
            min = scores[i];
            mincheck++;
        }
    }
    return [maxcheck, mincheck]
}