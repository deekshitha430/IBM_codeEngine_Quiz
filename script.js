const questions = [
  { country: "France", capital: "paris" },
  { country: "India", capital: "new delhi" },
  { country: "Japan", capital: "tokyo" },
  { country: "USA", capital: "washington" },
  { country: "Brazil", capital: "brasilia" },
  { country: "Canada", capital: "ottawa" },
  { country: "Australia", capital: "canberra" },
  { country: "Germany", capital: "berlin" },
  { country: "Italy", capital: "rome" },
  { country: "South Korea", capital: "seoul" }
];

// 🔀 Shuffle the questions array ONCE
const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

function updateScore() {
  document.getElementById("scoreDisplay").textContent = `Score: ${score}`;
}

function loadQuestion() {
  const questionText = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const result = document.getElementById("result");
  const nextButton = document.getElementById("nextBtn");

  if (currentQuestion < shuffledQuestions.length) {
    questionText.textContent = `What is the capital of ${shuffledQuestions[currentQuestion].country}?`;
    answerInput.value = "";
    result.textContent = "";
    nextButton.style.display = "none";
    updateScore();
  } else {
    questionText.textContent = `🎉 Game Over! You scored ${score} out of ${shuffledQuestions.length}`;
    document.querySelector("input").style.display = "none";
    document.querySelector("button").style.display = "none";
    result.textContent = "";
    nextButton.style.display = "none";
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = shuffledQuestions[currentQuestion].capital;
  const result = document.getElementById("result");
  const nextButton = document.getElementById("nextBtn");

  if (userAnswer === correctAnswer) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
    score++;
  } else {
    result.textContent = `❌ Wrong! The correct answer is: ${correctAnswer}`;
    result.style.color = "red";
  }

  nextButton.style.display = "inline-block";
  updateScore();
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
}

window.onload = loadQuestion;
