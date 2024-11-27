// script.js
const questions = [
    {
      question: "Apa ibukota Indonesia?",
      answers: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
      correct: 0
    },
    {
      question: "Berapa hasil dari 5 + 3?",
      answers: ["5", "8", "10", "15"],
      correct: 1
    },
    {
      question: "Siapa presiden pertama Indonesia?",
      answers: ["Soekarno", "Soeharto", "BJ Habibie", "Jokowi"],
      correct: 0
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
  
    // Tampilkan animasi sesuai jawaban
    if (selectedIndex === correctAnswer) {
      score++;
      feedbackElement.textContent = "Benar!";
      feedbackElement.className = "correct"; // Tambahkan kelas hijau
    } else {
      feedbackElement.textContent = "Salah! Jawaban: " + questions[currentQuestionIndex].answers[correctAnswer];
      feedbackElement.className = "wrong"; // Tambahkan kelas merah
    }
  
    feedbackElement.style.display = "block";
    feedbackElement.style.opacity = "1";
  
    // Tampilkan animasi dan lanjutkan ke pertanyaan berikutnya
    setTimeout(() => {
      feedbackElement.style.opacity = "0";
      setTimeout(() => {
        feedbackElement.style.display = "none";
        nextQuestion(); // Langsung ke pertanyaan berikutnya
      }, 500); // Tunggu sampai transisi selesai
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
    
    // Tampilkan tombol ulangi jika skor kurang dari sempurna
    if (score < questions.length) {
      retryButton.style.display = 'block';
    } else {
      retryButton.style.display = 'none';
    }
  }
  
  function retryQuiz() {
    // Reset variabel
    currentQuestionIndex = 0;
    score = 0;
  
    // Sembunyikan elemen hasil dan tampilkan kembali elemen kuis
    const resultContainer = document.getElementById('result');
    const questionContainer = document.getElementById('question-container');
  
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
  
    // Muat ulang pertanyaan pertama
    loadQuestion();
  }
  
  // Inisialisasi soal pertama
  loadQuestion();
  