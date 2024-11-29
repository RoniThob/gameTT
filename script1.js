// script.js
const questions = [
  {
    question: "Siapa yang dikenal sebagai 'Bapak Komputer'?",
    answers: ["Charles Babbage", "Alan Turing", "Ada Lovelace", "John von Neumann"],
    correct: 0
  },
  {
    question: "Apa nama komputer elektronik pertama di dunia?",
    answers: ["ENIAC", "UNIVAC", "Colossus", "IBM 701"],
    correct: 0
  },
  {
    question: "Bahasa pemrograman pertama yang dikembangkan adalah?",
    answers: ["Assembly", "COBOL", "Fortran", "Ada"],
    correct: 2
  },
  {
    question: "Siapa yang menciptakan World Wide Web (WWW)?",
    answers: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
    correct: 1
  },
  {
    question: "Apa singkatan dari CPU dalam komputer?",
    answers: [
      "Central Process Unit",
      "Central Processing Unit",
      "Control Processing Unit",
      "Central Protocol Unit"
    ],
    correct: 1
  },
  {
    question: "Komponen mana yang menyimpan data sementara saat komputer berjalan?",
    answers: ["RAM", "Hard Disk", "ROM", "Cache"],
    correct: 0
  },
  {
    question: "Tahun berapa Apple pertama kali merilis iPhone?",
    answers: ["2005", "2007", "2010", "2012"],
    correct: 1
  },
  {
    question: "Apa nama sistem operasi yang dikembangkan oleh Linus Torvalds?",
    answers: ["Unix", "Linux", "Windows", "MacOS"],
    correct: 1
  },
  {
    question: "Apa fungsi utama dari kartu grafis (GPU)?",
    answers: [
      "Memproses data jaringan",
      "Memproses grafis dan gambar",
      "Mengontrol perangkat input",
      "Menyimpan data sementara"
    ],
    correct: 1
  },
  {
    question: "Siapa yang menciptakan algoritma pertama dalam sejarah pemrograman komputer?",
    answers: ["Alan Turing", "Ada Lovelace", "Grace Hopper", "John von Neumann"],
    correct: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const answerButtons = document.querySelectorAll('.answer-btn');

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.dataset.correct = index === currentQuestion.correct;
  });
}

function selectAnswer(selectedIndex) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  const feedbackElement = document.getElementById('feedback');

  if (selectedIndex === correctAnswer) {
    score++;
    feedbackElement.textContent = "Benar!";
    feedbackElement.className = "correct";
  } else {
    feedbackElement.textContent = "Salah! Jawaban: " + questions[currentQuestionIndex].answers[correctAnswer];
    feedbackElement.className = "wrong";
  }

  feedbackElement.style.display = "block";
  feedbackElement.style.opacity = "1";

  setTimeout(() => {
    feedbackElement.style.opacity = "0";
    setTimeout(() => {
      feedbackElement.style.display = "none";
      nextQuestion();
    }, 500);
  }, 1500);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultContainer = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const questionContainer = document.getElementById('question-container');
  const retryButton = document.getElementById('retry-btn');

  questionContainer.style.display = 'none';
  resultContainer.style.display = 'block';

  scoreElement.textContent = `Skor Anda: ${score}/${questions.length}`;
  retryButton.style.display = score < questions.length ? 'block' : 'none';
}

function retryQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  const resultContainer = document.getElementById('result');
  const questionContainer = document.getElementById('question-container');

  resultContainer.style.display = 'none';
  questionContainer.style.display = 'block';

  loadQuestion();
}

loadQuestion();
