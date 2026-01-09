document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-quiz");
    startButton.addEventListener("click", startQuiz);
});

let score = 0;
let currentQuestion = 0;

const questions = [
    {
        question: "What is the significance of the Śulba-sūtras?",
        answers: [
            "They are rules for constructing fire altars.",
            "They are poetry.",
            "They are historical accounts.",
            "They are religious texts."
        ],
        correct: 0,
        explanation: "The Śulba-sūtras are significant for their contributions to geometry and rules for constructing fire altars."
    },
    {
        question: "Which geometric shape is primarily discussed in the Śulba-sūtras?",
        answers: [
            "Circle",
            "Triangle",
            "Square",
            "All of the above"
        ],
        correct: 3,
        explanation: "The Śulba-sūtras discuss various geometric shapes including circles, triangles, and squares."
    },
    {
        question: "What is the primary purpose of the fire altars described in the Śulba-sūtras?",
        answers: [
            "To serve as homes for deities.",
            "To conduct rituals and sacrifices.",
            "To mark territory.",
            "To store food."
        ],
        correct: 1,
        explanation: "The fire altars are constructed for conducting rituals and sacrifices in Vedic traditions."
    }
];

function startQuiz() {
    const quizContent = document.getElementById("quiz-content");
    score = 0;
    currentQuestion = 0;
    displayQuestion(quizContent);
}

function displayQuestion(quizContent) {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        quizContent.innerHTML = `
            <h3>Quiz on the Śulba-sūtras</h3>
            <p>${question.question}</p>
            ${question.answers.map((answer, index) => `
                <button onclick="checkAnswer(${index})">${answer}</button>
            `).join('')}
        `;
    } else {
        quizContent.innerHTML = `
            <h3>Quiz Completed!</h3>
            <p>Your score: ${score} out of ${questions.length}</p>
            <button onclick="startQuiz()">Restart Quiz</button>
        `;
    }
}

function checkAnswer(selected) {
    const question = questions[currentQuestion];
    const quizContent = document.getElementById("quiz-content");
    
    if (selected === question.correct) {
        score++;
        alert("Correct! " + question.explanation);
    } else {
        alert("Incorrect. " + question.explanation);
    }
    
    currentQuestion++;
    displayQuestion(quizContent);
}