// global declarations
const questions = [
  "In which month of 1914 did the First World War begin?",
  "the German attack on which country caused Britain to enter the Second World War?",
  "Richard III died at which battle?",
  "In Britain, who first held the office that today is known as Prime Minister?",
  "Who was the world’s first woman Prime Minister?",
];
const questionsArray = [
  {
    question: "In which month of 1914 did the First World War begin?",
    answers: [
      {
        text: "June",
        text: "January",
        text: "August",
        text: "December",
      },
    ],
    correctAnswer: "August",
  },
  {
    question:
      "the German attack on which country caused Britain to enter the Second World War?",
    answers: [
      {
        text: "France",
        text: "Poland",
        text: "Austria-Hungary",
        text: "Belgium",
      },
    ],
    correctAnswer: "Poland",
  },
  {
    question: "Richard III died at which battle?",
    answers: [
      {
        text: "Boyne",
        text: "Waterloo",
        text: "Hastings",
        text: "Bosworth Field",
      },
    ],
    correctAnswer: "Bosworth Field",
  },
  {
    question:
      "In Britain, who first held the office that today is known as Prime Minister?",
    answers: [
      {
        text: "David Lloyd George",
        text: "Robert Walpole",
        text: "Neville Chamberlain",
        text: "John Russell",
      },
    ],
    correctAnswer: "Robert Walpole",
  },
  {
    question: "Who was the world’s first woman Prime Minister?",
    answers: [
      {
        text: "Indira Gandhi",
        text: "Margaret Thatcher",
        text: "Sirimavo Bandaranaike",
        text: "Golda Meir",
      },
    ],
    correctAnswer: "Sirimavo Bandaranaike",
  },
];
console.log(questionsArray);

let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;

const startBtn = document.getElementById("startQuizBtn");

// this code section will only be executed when the path is /quiz.html
if (document.location.pathname === "/quiz.html") {
  let timer = 60;

  const timerSpan = document.getElementById("timerSpan");
  timerSpan.textContent = timer;

  const countdown = () => {
    // decrement timer value
    timer -= 1;

    // check if timer reaches 0
    // if quizComplete is true then stop timer
    if (timer === 0) {
      clearInterval(timerTick);
    }
    timerSpan.textContent = timer;
    // if true render game over
  };

  const timerTick = setInterval(countdown, 1000);
}

const onLoad = () => {
  // initialise local storage
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

// don't use if having multiple pages
const removeStartSection = () => {};

const startTimer = () => {
  console.log(document.location.pathname);
  // declare function to execute every 1 sec

  // setInterval of 1000ms (1s)
};

// main function to generate the questions
const generateQuestions = () => {
  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
  }
};
const printQuestions = document.querySelector("questions");

const validateAnswer = () => {
  // get answer clicked from user
  // get the correct answer for question
  // compare the 2 answers
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderQuestionSection = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add click event listener on #question-section
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  // remove start section
  // start timer
  // render timer section
  // render question section
};

// add event listeners
// add document on load event listener
// add start button click event listener
if (startBtn) {
  startBtn.addEventListener("click", startTimer);
  startBtn.addEventListener("click", generateQuestions);
}
