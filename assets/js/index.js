// global declarations
let timer = 60;
const score = [];
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
    answers: ["June", "January", "August", "December"],
    correctAnswer: "August",
  },
  {
    question:
      "the German attack on which country caused Britain to enter the Second World War?",
    answers: ["France", "Poland", "Austria-Hungary", "Belgium"],
    correctAnswer: "Poland",
  },
  {
    question: "Richard III died at which battle?",
    answers: ["Boyne", "Waterloo", "Hastings", "Bosworth Field"],
    correctAnswer: "Bosworth Field",
  },
  {
    question:
      "In Britain, who first held the office that today is known as Prime Minister?",
    answers: [
      "David Lloyd George",
      "Robert Walpole",
      "Neville Chamberlain",
      "John Russell",
    ],
    correctAnswer: "Robert Walpole",
  },
  {
    question: "Who was the world’s first woman Prime Minister?",
    answers: [
      "Indira Gandhi",
      "Margaret Thatcher",
      "Sirimavo Bandaranaike",
      "Golda Meir",
    ],
    correctAnswer: "Sirimavo Bandaranaike",
  },
];

let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;

const startBtn = document.getElementById("startQuizBtn");
const quizContainer = document.getElementById("start-quiz-section");
const questionDiv = document.getElementById("questions");
const answersContainer = document.getElementById("answersContainer");

// main function to generate the questions
const generateQuestions = (index) => {
  questionDiv.innerHTML = questionsArray[index].question;

  questionsArray[index].answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.setAttribute("class", "answer-button");
    button.setAttribute("class", "wrong-answer");
    answersContainer.append(button);

    if (answer === questionsArray[index].correctAnswer) {
      button.dataset.correct = answer;
    }
    button.addEventListener("click", validateAnswer);
  });
};

const validateAnswer = (event) => {
  const chosenAnswer = event.target.dataset.correct;

  if (questionsArray.length > questionIndex + 1) {
    if (chosenAnswer) {
      questionIndex += 1;
      score.push(questionIndex + 1);
      console.log(score);

      answersContainer.innerHTML = "";
      generateQuestions(questionIndex);
    } else {
      console.log("timer");
      timer -= 5;
      timerSpan.textContent = timer;
    }
  }
};

// if incorrect subtract 5 seconds from timerValue
// if incorrect render error alert with message and status
// if correct render success alert with message and status
// set timeout for 500ms and then go to next question
// if question is last question set quizComplete to true and then render form
// if question is not last question then increment question index and render next question

// this code section will only be executed when the path is /quiz.html
if (document.location.pathname === "/quiz.html") {
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
  generateQuestions(questionIndex);
}

// to be worked on
const onLoad = () => {
  //extract info from local storage (get)
  const getFromLocalStorage = (key, defaultValue) => {
    const parsedData = JSON.parse(localStorage.getItem(key));
    return parsedData ? parsedData : defaultValue;
  };

  //write info into local storage (set)
  const writeToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  //empty local storage (clear)
  const clearLS = () => {
    localStorage.clear();
  };
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
const goToHighScore = () => {
  location.href = "highscore.html";
};
// add event listeners
// add document on load event listener
// add start button click event listener
if (startBtn) {
  startBtn.addEventListener("click", startTimer);
}
//if ((questionIndex = 4)) {
//answer - button.addEventListener("click", goToHighScore);
