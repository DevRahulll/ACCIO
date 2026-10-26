const questions = [
    {
        q: "Which tag creates a hyperlink?",
        options: ["<link>", "<a>", "<href>"],
        answer: 1,
    },
    {
        q: "Which CSS property changes text color?",
        options: ["font-color", "text-style", "color"],
        answer: 2,
    },
    {
        q: "Which keyword declares a variable that can be reassigned?",
        options: ["let", "const", "static"],
        answer: 0,
    },
    {
        q: "What does DOM stand for?",
        options: [
            "Data Object Model",
            "Document Object Model",
            "Display Output Method",
        ],
        answer: 1,
    },
    {
        q: "Which method adds an item to the end of an array?",
        options: ["push()", "pop()", "shift()"],
        answer: 0,
    },
];

let current = 0;
let score = 0;

const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("option");
const nextBtn = document.getElementById("next");
const gameEl = document.getElementById("game");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

function renderQuestion() {
    const item = questions[current];
    progressEl.textContent =
        "Question " + (current + 1) + " of " + questions.length;
    questionEl.textContent = item.q;
    optionsEl.innerHTML = "";
    nextBtn.disabled = true;
    nextBtn.textContent =
        current === questions.length - 1 ? "See results" : "Next question";

    item.options.forEach((text, i) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = text;
        btn.addEventListener("click", () => {
            //call
            checkAnswer(i);
        });
        optionsEl.appendChild(btn);
    });
}

//answer check
function checkAnswer(idx) {
    const correct = questions[current].answer;
    const buttons = optionsEl.querySelectorAll(".option");
    if (idx === correct) score++;
    buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === correct) b.classList.add("correct");
        else if (i === idx) b.classList.add("wrong");
    });
    nextBtn.disabled = false;
    nextBtn.focus();
}

//next question / finsih
nextBtn.addEventListener("click", () => {
    current++;
    if (current < questions.length) {
        renderQuestion();
    } else {
        gameEl.classList.add("hidden");
        resultEl.classList.remove("hidden");
        scoreEl.textContent = score + "/" + questions.length;
    }
});

// restart
restartBtn.addEventListener("click", () => {
    current = 0;
    score = 0;
    resultEl.classList.add("hidden");
    gameEl.classList.remove("hidden");
    renderQuestion();
});

renderQuestion();
