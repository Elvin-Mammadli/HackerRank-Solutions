let x = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {
    let birds = [1, 2, 3, 4, 5];
    let counta = [];
    for (let i = 0; i < birds.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (birds[i] === arr[j]) {
                count++;
            }
        }
        counta.push(count);
    }
    let birdindex = counta.indexOf(Math.max(...counta));
    return birds[birdindex];
}

console.log(migratoryBirds(x));
