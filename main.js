const quizData = [
  {
    question: "Most active Twitter user?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "a",
  },
  {
    question: "Most Funny Twitter user?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "b",
  },
  {
    question: "Most browsing Twitter user?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "d",
  },
  {
    question: " Most prolific Twitter user ?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "c",
  },
  {
    question: " Co-founder zetupme?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "e",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getselected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getselected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
    <h2> test done, ${score * 20} got points </h2>
    <button class="submit" onClick="location.reload()"> Try again 
    </button>
    `;
    }
  }
});
