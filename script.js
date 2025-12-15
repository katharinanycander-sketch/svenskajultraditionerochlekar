const questions = [
  "Vad äter man traditionellt på ett svenskt julbord?",
  "Vilket TV-program visas varje julafton kl 15?",
  "Vad heter risdesserten med mandel?"
];

let currentIndex = -1;

function startQuiz() {
  currentIndex = 0;
  document.getElementById("question").textContent = questions[currentIndex];
}

function nextQuestion() {
  if (currentIndex === -1) return;

  currentIndex++;
  if (currentIndex < questions.length) {
    document.getElementById("question").textContent = questions[currentIndex];
  } else {
    document.getElementById("question").textContent = "Quizet är slut! God Jul 🎄";
    currentIndex = -1;
  }
}
