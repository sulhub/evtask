let score = 0;

let answer1 = "Baku";
let answer2 = 8;
let answer3 = "JavaScript";

function checkAnswer(answer, correctAnswer) {
    if (typeof answer === "string") {
        return answer.toLowerCase() === correctAnswer.toLowerCase();
    }
    return answer === correctAnswer;
}

if (checkAnswer(answer1, "Baku")) {
    score++;
}

if (checkAnswer(answer2, 8)) {
    score++;
}

if (checkAnswer(answer3, "JavaScript")) {
    score++;
}

const points = [1, 1, 1, 2, 2];

let total = 0;

points.forEach(function(point) {
    total += point;
});

if (score <= 2) {
    console.log("Daha çox çalış");
} else if (score <= 4) {
    console.log("Yaxşı nəticə");
} else {
    console.log("Əla nəticə");
}

console.log("Your score: " + score);

const students = ["Nigar", "Ramal", "Emil"];

students.forEach(function(student) {
    console.log("Student: " + student);
});