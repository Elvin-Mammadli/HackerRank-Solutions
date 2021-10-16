let s = "00:59:00AM" // Example (change to see result)
function timeConversion(s) {
    let arr = s.split(":");
    arr[3] = arr[2].slice(2, 4)
    arr[2] = arr[2].split("", 2).join("")

    if (arr[3] === "PM" && arr[0] !== "12") {
        arr[0] = 12 + Number(arr[0]);
    } else if (arr[3] === "AM" && arr[0] === "12") {
        arr[0] = "00";
    }

    s = arr.splice(3, 1)
    s = arr.join(":")
    return s
}

console.log(timeConversion(s))