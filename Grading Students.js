let array = [73, 67, 38, 33];

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        let temp = 0;
        if (grades[i] > 37) {
            if (grades[i] % 10 < 5) {
                temp = parseInt(grades[i] / 10) * 10 + 5;
            }
            else if (grades[i] % 10 > 5) {
                temp = parseInt(grades[i] / 10) * 10 + 10;
            }
            else temp = grades[i];
            if (temp - grades[i] < 3) {
                grades[i] = temp;
            }
        }
    }
    return grades;
}

console.log(gradingStudents(array))