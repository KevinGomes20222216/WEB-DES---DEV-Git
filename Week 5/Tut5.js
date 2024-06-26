// Array of question objects
const questions = [
    { question: "8 + 7 = ", answer: 15 },
    { question: "12 x 6 = ", answer: 72 },
    { question: "26 - 7 = ", answer: 19 },
    // Add more questions here...
];

let score = 0;

function playGame() {
    for (let i = 0; i < questions.length; i++) {
        const questionNumber = i + 1;
        const questionElement = document.getElementById(`question${questionNumber}`);
        const answerElement = document.getElementById(`answer${questionNumber}`);
        const feedbackElement = document.getElementById(`feedback${questionNumber}`);

        const userAnswer = prompt(questions[i].question);
        const correctAnswer = questions[i].answer;

        questionElement.textContent = questions[i].question;
        answerElement.textContent = userAnswer;

        if (parseInt(userAnswer) === correctAnswer) {
            feedbackElement.textContent = "✓ Correct!";
            feedbackElement.classList.add("correct");
            score++;
        } else {
            feedbackElement.textContent = `✗ Incorrect. The correct answer is ${correctAnswer}.`;
            feedbackElement.classList.add("incorrect");
        }
    }

    const finalScore = (score / questions.length) * 100;
    document.getElementById("score").textContent = `${finalScore}%`;
}

// Start the game when the page loads
window.onload = playGame;