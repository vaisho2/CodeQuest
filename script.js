// Quiz questions
const quizData = {
  HTML: [
    {
      question: "What does HTML stand for?",
      answers: [
        "Hyperlinks and Text Markup Language",
        "HyperText Markup Language",
        "Home Tool Markup Language",
      ],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      answers: ["<link>", "<a>", "<href>"],
      correct: 1,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      answers: ["<br>", "<lb>", "<break>"],
      correct: 0,
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      answers: ["<ol>", "<ul>", "<li>"],
      correct: 1,
    },
    {
      question:
        "Which attribute is used to provide an alternative text for an image?",
      answers: ["alt", "title", "src"],
      correct: 0,
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      answers: ["<h6>", "<h1>", "<heading>"],
      correct: 1,
    },
    {
      question: "Which input type is used for creating a password field?",
      answers: ["text", "password", "secure"],
      correct: 1,
    },
    {
      question: "What does the `<meta>` tag primarily provide?",
      answers: ["Metadata", "Links", "CSS Styling"],
      correct: 0,
    },
    {
      question: "Which attribute is used to open a hyperlink in a new tab?",
      answers: ["_self", "_blank", "_new"],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to define a table row?",
      answers: ["<td>", "<tr>", "<th>"],
      correct: 1,
    },
  ],

  CSS: [
    {
      question: "What does CSS stand for?",
      answers: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
      ],
      correct: 0,
    },
    {
      question: "Which property is used to change the text color in CSS?",
      answers: ["color", "text-color", "font-color"],
      correct: 0,
    },
    {
      question: "Which CSS property controls the spacing between elements?",
      answers: ["margin", "padding", "spacing"],
      correct: 0,
    },
    {
      question:
        "Which value of the position property makes an element stay fixed on the screen?",
      answers: ["static", "absolute", "fixed"],
      correct: 2,
    },
    {
      question: "Which CSS property is used to make text bold?",
      answers: ["text-style", "bold", "font-weight"],
      correct: 2,
    },
    {
      question: "What is the default display value of a <div> element?",
      answers: ["inline", "block", "inline-block"],
      correct: 1,
    },
    {
      question: "Which CSS property is used to set the background color?",
      answers: ["bgcolor", "background-color", "color"],
      correct: 1,
    },
    {
      question: "Which property is used to make a flex container?",
      answers: ["display: flex", "flexbox", "flex-container"],
      correct: 0,
    },
    {
      question: "How can you make an element’s corners rounded?",
      answers: ["corner-radius", "border-radius", "round-corner"],
      correct: 1,
    },
    {
      question:
        "Which pseudo-class is used to style an element when the user hovers over it?",
      answers: [":hover", ":focus", ":active"],
      correct: 0,
    },
  ],

  JavaScript: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      answers: ["var", "int", "define"],
      correct: 0,
    },
    {
      question: "What is the correct way to write an arrow function?",
      answers: ["function => () {}", "() => {}", "() => {}"],
      correct: 2,
    },
    {
      question:
        "Which built-in method is used to convert a string to uppercase?",
      answers: ["toUpperCase()", "changeCase()", "uppercase()"],
      correct: 0,
    },
    {
      question: "What is the output of '2' + 2 in JavaScript?",
      answers: ["4", "22", "NaN"],
      correct: 1,
    },
    {
      question:
        "Which method is used to remove the last element from an array?",
      answers: ["pop()", "remove()", "delete()"],
      correct: 0,
    },
    {
      question: "How do you check the type of a variable in JavaScript?",
      answers: ["typeof", "type", "instanceof"],
      correct: 0,
    },
    {
      question: "What is the correct way to write a comment in JavaScript?",
      answers: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "' This is a comment",
      ],
      correct: 0,
    },
    {
      question: "Which function is used to parse JSON in JavaScript?",
      answers: ["JSON.parse()", "JSON.stringify()", "JSON.decode()"],
      correct: 0,
    },
    {
      question: "What is the result of Boolean('false') in JavaScript?",
      answers: ["false", "true", "undefined"],
      correct: 1,
    },
    {
      question:
        "Which loop executes at least once, even if the condition is false?",
      answers: ["for", "while", "do-while"],
      correct: 2,
    },
  ],

  React: [
    {
      question: "What is React primarily used for?",
      answers: [
        "Server-side scripting",
        "Building user interfaces",
        "Database management",
      ],
      correct: 1,
    },
    {
      question: "What is JSX?",
      answers: [
        "A syntax extension for JavaScript",
        "A JavaScript framework",
        "A CSS preprocessor",
      ],
      correct: 0,
    },
    {
      question: "Which hook is used to manage state in a functional component?",
      answers: ["useEffect", "useState", "useRef"],
      correct: 1,
    },
    {
      question:
        "How do you pass data from a parent component to a child component?",
      answers: ["State", "Props", "Hooks"],
      correct: 1,
    },
    {
      question:
        "Which lifecycle method is called after a component is rendered?",
      answers: [
        "componentDidMount",
        "componentWillUnmount",
        "componentDidUpdate",
      ],
      correct: 0,
    },
    {
      question: "What does useEffect() do in React?",
      answers: ["Handles side effects", "Manages state", "Renders JSX"],
      correct: 0,
    },
    {
      question: "What is the purpose of React Router?",
      answers: [
        "To manage component styles",
        "To handle navigation",
        "To create animations",
      ],
      correct: 1,
    },
    {
      question: "Which command is used to create a new React app?",
      answers: ["npm create-react-app", "npx create-react-app", "react new"],
      correct: 1,
    },
    {
      question: "Which React hook is used to reference DOM elements?",
      answers: ["useEffect", "useRef", "useState"],
      correct: 1,
    },
    {
      question: "What is the virtual DOM in React?",
      answers: [
        "A copy of the real DOM",
        "A browser extension",
        "A React method",
      ],
      correct: 0,
    },
  ],
};

// Getting required elements
const quizTitle = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const resultGif = document.getElementById("result-gif");

let currentLanguage = "";
let currentQuestionIndex = 0;
let score = 0;

// Start quiz for selected language
function startQuiz(language) {
  currentLanguage = language;
  currentQuestionIndex = 0;
  score = 0;

  // Reset UI
  resultContainer.style.display = "none";
  resultGif.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  quizTitle.textContent = `${language} Quiz`;

  showQuestion();
}

// Displaying current question
function showQuestion() {
  resetState();
  let currentQuestion = quizData[currentLanguage][currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(index));
    answerButtons.appendChild(button);
  });
}

// Reseting state for next question
function resetState() {
  answerButtons.innerHTML = "";
  nextButton.style.display = "none";
}

// Handling answer selection
function selectAnswer(selectedIndex) {
  if (
    selectedIndex === quizData[currentLanguage][currentQuestionIndex].correct
  ) {
    score++;
  }
  nextButton.style.display = "block";
}

// Handling Next button click
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData[currentLanguage].length) {
    showQuestion();
  } else {
    showResult();
  }
});

// Displaying quiz result
function showResult() {
  questionElement.textContent = "";
  answerButtons.innerHTML = "";
  nextButton.style.display = "none";
  resultContainer.style.display = "block";
  resultGif.style.display = "block";

// Displaying gif according to marks
  if (score >= 7) {
    resultText.textContent = `Victory Dance, Absolute Winner! Score: ${score}/${quizData[currentLanguage].length}`;
    resultGif.src = "./images/HappyDance.gif";
  } else if (score > 5 && score < 7) {
    resultText.textContent = `Good Job, Almost a Pro! Score: ${score}/${quizData[currentLanguage].length}`;
    resultGif.src = "./images/Well Done.gif";
  } else if (score >= 3 && score <= 5) {
    resultText.textContent = `Not Bad, Keep Going! Score: ${score}/${quizData[currentLanguage].length}`;
    resultGif.src = "./images/Keep Going.gif";
  } else if (score >= 1 && score < 3) {
    resultText.textContent = `Try Again, You Got This! Score: ${score}/${quizData[currentLanguage].length}`;
    resultGif.src = "./images/You Got This.gif";
  } else {
    resultText.textContent = `The Only Way is Up! Score: ${score}/${quizData[currentLanguage].length}`;
    resultGif.src = "./images/Only Way Is Up.gif";
  }
}

