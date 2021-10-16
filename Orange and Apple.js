let a = 5; //location point of apple tree
let s = 7; //home start
let t = 11; //home end
let b = 15; //location point of orange tree
let apples = [-2, 2, 1]; //apples fall distance
let oranges = [5, -6]; // oranges fall distance

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applecount = 0;
    let orangecount = 0;
    for (let i = 0; i < apples.length; i++) {
        if (apples[i] + a >= s && apples[i] + a <= t) {
            applecount++;
        }
    }
    for (let z = 0; z < oranges.length; z++) {
        if (oranges[z] + b >= s && oranges[z] + b <= t) {
            orangecount++;
        }
    }
    console.log(applecount);
    console.log(orangecount);
}

countApplesAndOranges(s, t, a, b, apples, oranges);