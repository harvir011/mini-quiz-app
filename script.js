//! questions
//! HTML Questions

const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    question: "Which HTML tag creates the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: 2
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1
  },
  {
    question: "Which tag inserts a line break?",
    options: ["<break>", "<lb>", "<br>", "<hr>"],
    correct: 2
  },
  {
    question: "Which tag is used to display an image?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    correct: 1
  },
  {
    question: "Which attribute specifies the image path?",
    options: ["href", "src", "alt", "link"],
    correct: 1
  },
  {
    question: "Which tag creates an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1
  },
  {
    question: "Which tag creates a table row?",
    options: ["<td>", "<table>", "<tr>", "<th>"],
    correct: 2
  },
  {
    question: "Which tag is used for table data?",
    options: ["<tr>", "<td>", "<th>", "<table>"],
    correct: 1
  },
  {
    question: "Which tag is used to create a form?",
    options: ["<form>", "<input>", "<button>", "<fieldset>"],
    correct: 0
  },
  {
    question: "Which input type hides entered text?",
    options: ["text", "hidden", "password", "secret"],
    correct: 2
  },
  {
    question: "Which attribute provides alternative text for images?",
    options: ["title", "alt", "src", "name"],
    correct: 1
  },
  {
    question: "Which tag defines the document title?",
    options: ["<title>", "<head>", "<meta>", "<caption>"],
    correct: 0
  },
  {
    question: "Which tag contains page metadata?",
    options: ["<body>", "<meta>", "<footer>", "<header>"],
    correct: 1
  },
  {
    question: "Which tag is used for a paragraph?",
    options: ["<para>", "<p>", "<text>", "<pg>"],
    correct: 1
  },
  {
    question: "Which tag makes text bold?",
    options: ["<strong>", "<b>", "Both A and B", "<bold>"],
    correct: 2
  },
  {
    question: "Which HTML version introduced semantic tags?",
    options: ["HTML3", "HTML4", "HTML5", "XHTML"],
    correct: 2
  },
  {
    question: "Which tag represents navigation links?",
    options: ["<navigate>", "<nav>", "<menu>", "<links>"],
    correct: 1
  },
  {
    question: "Which tag is used to embed videos?",
    options: ["<media>", "<movie>", "<video>", "<embedvideo>"],
    correct: 2
  },
  {
    question: "Which tag contains visible webpage content?",
    options: ["<head>", "<body>", "<html>", "<main>"],
    correct: 1
  }
];

//! CSS Questions

const cssQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correct: 0
  },
  {
    question: "Which property changes text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    correct: 2
  },
  {
    question: "Which property changes background color?",
    options: ["bgcolor", "background-color", "background", "color"],
    correct: 1
  },
  {
    question: "Which property changes font size?",
    options: ["text-size", "font-size", "size", "font-style"],
    correct: 1
  },
  {
    question: "Which selector selects an element by ID?",
    options: [".", "#", "*", ":"],
    correct: 1
  },
  {
    question: "Which selector selects all elements?",
    options: ["*", "#", ".", "&"],
    correct: 0
  },
  {
    question: "Which property makes text bold?",
    options: ["font-weight", "font-style", "text-weight", "bold"],
    correct: 0
  },
  {
    question: "Which property adds space inside an element?",
    options: ["margin", "padding", "spacing", "border"],
    correct: 1
  },
  {
    question: "Which property adds space outside an element?",
    options: ["padding", "spacing", "margin", "border"],
    correct: 2
  },
  {
    question: "Which property rounds element corners?",
    options: ["border-radius", "radius", "round", "curve"],
    correct: 0
  },
  {
    question: "Which property changes font family?",
    options: ["font-family", "font-type", "family", "font"],
    correct: 0
  },
  {
    question: "Which display value creates a flex container?",
    options: ["grid", "block", "flex", "inline"],
    correct: 2
  },
  {
    question: "Which property aligns flex items horizontally?",
    options: ["align-items", "justify-content", "text-align", "place-items"],
    correct: 1
  },
  {
    question: "Which property centers inline text?",
    options: ["align-items", "justify-content", "text-align", "center"],
    correct: 2
  },
  {
    question: "Which property controls transparency?",
    options: ["opacity", "visibility", "transparent", "alpha"],
    correct: 0
  },
  {
    question: "Which position value removes an element from normal flow?",
    options: ["relative", "fixed", "static", "sticky"],
    correct: 1
  },
  {
    question: "Which property creates a shadow around text?",
    options: ["box-shadow", "shadow", "text-shadow", "font-shadow"],
    correct: 2
  },
  {
    question: "Which property changes cursor style?",
    options: ["pointer", "cursor", "mouse", "hover"],
    correct: 1
  },
  {
    question: "Which property controls stacking order?",
    options: ["stack", "z-index", "layer", "depth"],
    correct: 1
  },
  {
    question: "Which property specifies transition duration?",
    options: ["transition", "animation", "transition-duration", "speed"],
    correct: 2
  }
];

const jsQuestions = [
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    correct: 2
  },
  {
    question: "Which method is used to print something in the browser console?",
    options: ["console.print()", "print()", "console.log()", "document.write()"],
    correct: 2
  },
  {
    question: "What is the result of typeof null?",
    options: ["null", "object", "undefined", "string"],
    correct: 1
  },
  {
    question: "Which symbol is used for strict equality?",
    options: ["==", "=", "===", "!=="],
    correct: 2
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do...while", "for...of"],
    correct: 2
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    correct: 0
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Document Oriented Module",
      "Desktop Object Manager"
    ],
    correct: 0
  },
  {
    question: "Which event occurs when a button is clicked?",
    options: ["onhover", "onclick", "onchange", "onload"],
    correct: 1
  },
  {
    question: "Which method converts JSON into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.convert()"
    ],
    correct: 0
  },
  {
    question: "Which method converts a JavaScript object into JSON?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.objectify()",
      "JSON.convert()"
    ],
    correct: 1
  },
  {
    question: "Which keyword is used to create a function?",
    options: ["method", "func", "function", "define"],
    correct: 2
  },
  {
    question: "Which operator is used to assign a value?",
    options: ["==", "=", "===", "=>"],
    correct: 1
  },
  {
    question: "What is the output of 5 + '5'?",
    options: ["10", "55", "NaN", "Error"],
    correct: 1
  },
  {
    question: "Which array method creates a new array by applying a function to each element?",
    options: ["filter()", "map()", "reduce()", "find()"],
    correct: 1
  },
  {
    question: "Which array method returns only elements that satisfy a condition?",
    options: ["map()", "filter()", "forEach()", "every()"],
    correct: 1
  },
  {
    question: "Which keyword refers to the current object?",
    options: ["self", "current", "this", "object"],
    correct: 2
  },
  {
    question: "Which statement is used to stop a loop?",
    options: ["stop", "exit", "break", "return"],
    correct: 2
  },
  {
    question: "Which method selects an element by its ID?",
    options: [
      "getElementById()",
      "queryElement()",
      "getById()",
      "selectById()"
    ],
    correct: 0
  },
  {
    question: "Which keyword is used to import modules in JavaScript?",
    options: ["include", "require", "import", "using"],
    correct: 2
  }
];

//! C Questions

const cQuestions = [
  {
    question: "Who developed the C programming language?",
    options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"],
    correct: 1
  },
  {
    question: "Which symbol is used to end a statement in C?",
    options: [".", ";", ":", ","],
    correct: 1
  },
  {
    question: "Which function is the entry point of a C program?",
    options: ["start()", "main()", "run()", "init()"],
    correct: 1
  },
  {
    question: "Which header file is required for printf()?",
    options: ["math.h", "string.h", "stdio.h", "stdlib.h"],
    correct: 2
  },
  {
    question: "Which keyword is used to declare a constant variable?",
    options: ["constant", "const", "final", "static"],
    correct: 1
  },
  {
    question: "Which operator is used to get the address of a variable?",
    options: ["*", "&", "%", "#"],
    correct: 1
  },
  {
    question: "Which data type stores a single character?",
    options: ["string", "char", "text", "character"],
    correct: 1
  },
  {
    question: "Which loop is best when the number of iterations is known?",
    options: ["while", "do...while", "for", "switch"],
    correct: 2
  },
  {
    question: "Which keyword is used to exit a loop?",
    options: ["stop", "exit", "break", "continue"],
    correct: 2
  },
  {
    question: "Which function is used to read input from the user?",
    options: ["scanf()", "input()", "cin", "gets()"],
    correct: 0
  },
  {
    question: "Which symbol is used for single-line comments?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correct: 0
  },
  {
    question: "Which function returns the length of a string?",
    options: ["length()", "strlen()", "size()", "count()"],
    correct: 1
  },
  {
    question: "Which keyword defines a user-defined data type?",
    options: ["class", "struct", "object", "record"],
    correct: 1
  },
  {
    question: "Which operator is used for multiplication?",
    options: ["x", "*", "%", "^"],
    correct: 1
  },
  {
    question: "Which storage class keeps a variable value between function calls?",
    options: ["auto", "register", "static", "extern"],
    correct: 2
  },
  {
    question: "Which function allocates memory dynamically?",
    options: ["malloc()", "alloc()", "create()", "new"],
    correct: 0
  },
  {
    question: "Which function releases dynamically allocated memory?",
    options: ["delete()", "remove()", "free()", "clear()"],
    correct: 2
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "|", "||"],
    correct: 1
  },
  {
    question: "Which loop executes at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correct: 2
  },
  {
    question: "Which keyword is used to return a value from a function?",
    options: ["exit", "return", "break", "continue"],
    correct: 1
  }
];

//! Java Questions

const javaQuestions = [
  {
    question: "Who developed Java?",
    options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
    correct: 1
  },
  {
    question: "Which keyword is used to create a class?",
    options: ["define", "class", "object", "new"],
    correct: 1
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "init()"],
    correct: 1
  },
  {
    question: "Which keyword is used to create an object?",
    options: ["create", "new", "class", "this"],
    correct: 1
  },
  {
    question: "Which package contains the Scanner class?",
    options: ["java.io", "java.util", "java.lang", "java.net"],
    correct: 1
  },
  {
    question: "Which keyword inherits a class?",
    options: ["implements", "extends", "inherits", "super"],
    correct: 1
  },
  {
    question: "Which keyword prevents inheritance?",
    options: ["const", "static", "final", "private"],
    correct: 2
  },
  {
    question: "Which keyword refers to the current object?",
    options: ["self", "this", "super", "current"],
    correct: 1
  },
  {
    question: "Which keyword is used to call the parent class constructor?",
    options: ["parent", "base", "super", "this"],
    correct: 2
  },
  {
    question: "Which access modifier makes members accessible everywhere?",
    options: ["private", "protected", "default", "public"],
    correct: 3
  },
  {
    question: "Which loop executes at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correct: 2
  },
  {
    question: "Which exception occurs when dividing by zero?",
    options: ["IOException", "ArithmeticException", "NullPointerException", "ClassNotFoundException"],
    correct: 1
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "try", "throw", "throws"],
    correct: 1
  },
  {
    question: "Which collection stores unique elements?",
    options: ["List", "ArrayList", "Set", "Queue"],
    correct: 2
  },
  {
    question: "Which class is used to take keyboard input?",
    options: ["Reader", "Scanner", "Input", "ConsoleReader"],
    correct: 1
  },
  {
    question: "Which operator compares object references?",
    options: ["==", "equals()", "compare()", "==="],
    correct: 0
  },
  {
    question: "Java is a ____ language.",
    options: ["Procedural", "Object-Oriented", "Assembly", "Machine"],
    correct: 1
  },
  {
    question: "Which keyword creates a subclass?",
    options: ["extends", "implements", "inherits", "new"],
    correct: 0
  },
  {
    question: "Which method converts a string to an integer?",
    options: ["Integer.parseInt()", "parse()", "toInt()", "convertInt()"],
    correct: 0
  },
  {
    question: "Which keyword is used to stop a loop?",
    options: ["exit", "return", "break", "continue"],
    correct: 2
  }
];

//! DBMS Questions

const dbmsQuestions = [
  {
    question: "What does DBMS stand for?",
    options: ["Database Management System", "Data Backup Management System", "Database Monitoring System", "Data Business Management System"],
    correct: 0
  },
  {
    question: "Which language is used to query databases?",
    options: ["HTML", "SQL", "CSS", "Java"],
    correct: 1
  },
  {
    question: "Which SQL command retrieves data?",
    options: ["GET", "FETCH", "SELECT", "SHOW"],
    correct: 2
  },
  {
    question: "Which SQL command inserts new data?",
    options: ["INSERT", "ADD", "CREATE", "PUT"],
    correct: 0
  },
  {
    question: "Which key uniquely identifies a record?",
    options: ["Foreign Key", "Candidate Key", "Primary Key", "Composite Key"],
    correct: 2
  },
  {
    question: "Which key links two tables?",
    options: ["Primary Key", "Alternate Key", "Foreign Key", "Unique Key"],
    correct: 2
  },
  {
    question: "Which SQL clause filters rows?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    correct: 1
  },
  {
    question: "Which SQL clause sorts records?",
    options: ["GROUP BY", "ORDER BY", "SORT", "WHERE"],
    correct: 1
  },
  {
    question: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correct: 1
  },
  {
    question: "Which SQL command modifies existing data?",
    options: ["UPDATE", "ALTER", "CHANGE", "MODIFY"],
    correct: 0
  },
  {
    question: "Which SQL command deletes records?",
    options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
    correct: 1
  },
  {
    question: "Which SQL command removes a table?",
    options: ["DELETE", "DROP", "REMOVE", "CLEAR"],
    correct: 1
  },
  {
    question: "Which command creates a new table?",
    options: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "ADD TABLE"],
    correct: 2
  },
  {
    question: "Which join returns matching rows from both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    correct: 2
  },
  {
    question: "Which function counts rows?",
    options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
    correct: 1
  },
  {
    question: "Which SQL keyword removes duplicate values?",
    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "FILTER"],
    correct: 1
  },
  {
    question: "Which constraint prevents NULL values?",
    options: ["UNIQUE", "CHECK", "NOT NULL", "DEFAULT"],
    correct: 2
  },
  {
    question: "Which SQL statement changes a table structure?",
    options: ["MODIFY", "UPDATE", "ALTER", "CHANGE"],
    correct: 2
  },
  {
    question: "What is a row in a table called?",
    options: ["Column", "Record", "Field", "Attribute"],
    correct: 1
  },
  {
    question: "What is a column in a table called?",
    options: ["Attribute", "Record", "Tuple", "Entry"],
    correct: 0
  }
];

//! OS Questions

const osQuestions = [
  {
    question: "What does OS stand for?",
    options: ["Operating System", "Online System", "Open Software", "Operating Software"],
    correct: 0
  },
  {
    question: "Which of these is an operating system?",
    options: ["Windows", "MS Word", "Chrome", "Photoshop"],
    correct: 0
  },
  {
    question: "Which OS is open source?",
    options: ["Windows", "Linux", "macOS", "DOS"],
    correct: 1
  },
  {
    question: "Which component is called the brain of the operating system?",
    options: ["Kernel", "Shell", "CPU", "RAM"],
    correct: 0
  },
  {
    question: "Which scheduling algorithm follows First Come First Serve?",
    options: ["FCFS", "Round Robin", "Priority", "SJF"],
    correct: 0
  },
  {
    question: "Which memory is temporary?",
    options: ["ROM", "Hard Disk", "RAM", "SSD"],
    correct: 2
  },
  {
    question: "Which memory is non-volatile?",
    options: ["RAM", "Cache", "ROM", "Register"],
    correct: 2
  },
  {
    question: "Which OS allows multiple users?",
    options: ["Single-user OS", "Multi-user OS", "Embedded OS", "Batch OS"],
    correct: 1
  },
  {
    question: "Which scheduling algorithm gives each process equal CPU time?",
    options: ["FCFS", "Round Robin", "Priority", "SJF"],
    correct: 1
  },
  {
    question: "Which software manages computer hardware?",
    options: ["Compiler", "Operating System", "Browser", "Database"],
    correct: 1
  },
  {
    question: "What is the full form of CPU?",
    options: ["Central Processing Unit", "Computer Processing Unit", "Control Processing Unit", "Central Program Unit"],
    correct: 0
  },
  {
    question: "Which device stores data permanently?",
    options: ["RAM", "Cache", "Hard Disk", "Register"],
    correct: 2
  },
  {
    question: "Which OS is commonly used on Apple computers?",
    options: ["Linux", "Windows", "macOS", "Android"],
    correct: 2
  },
  {
    question: "Which OS is mainly used on smartphones?",
    options: ["Windows XP", "Android", "DOS", "UNIX"],
    correct: 1
  },
  {
    question: "Which memory is the fastest?",
    options: ["Hard Disk", "RAM", "Cache", "SSD"],
    correct: 2
  },
  {
    question: "Which OS executes one task at a time?",
    options: ["Multitasking OS", "Single-tasking OS", "Real-time OS", "Network OS"],
    correct: 1
  },
  {
    question: "Which command interface uses typed commands?",
    options: ["GUI", "CLI", "Touch UI", "Voice UI"],
    correct: 1
  },
  {
    question: "Which OS is developed by Microsoft?",
    options: ["Linux", "Windows", "Ubuntu", "Fedora"],
    correct: 1
  },
  {
    question: "Which scheduling algorithm selects the shortest job first?",
    options: ["FCFS", "Round Robin", "SJF", "Priority"],
    correct: 2
  },
  {
    question: "Which feature allows running multiple programs simultaneously?",
    options: ["Multiprocessing", "Multitasking", "Booting", "Formatting"],
    correct: 1
  }
];

let activeQuestion=[];
let currentQuestionIndex =0;
let score = 0;

let timer;
let timeLeft = 15;

//get dome elements
const subjectScreen=document.getElementById("subject-screen");
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

const questionCountE1=document.getElementById("question-count");
const questionTextE1=document.getElementById("question-text");
const optionsContainer=document.getElementById("option-container");
const progressfill=document.getElementById("progress-fill");

//result page validation

const resultEmoji=document.getElementById("result-emoji");
const resultTitle=document.getElementById("result-title");
const resultScore=document.getElementById("result-score");
const resultMessage=document.getElementById("result-msg");

// subject page added

const cCard=document.getElementById("c-card");
const htmlCard=document.getElementById("html-card");
const cssCard=document.getElementById("css-card");
const javascriptCard=document.getElementById("javascript-card");
const javaCard=document.getElementById("java-card");
const dbmsCard=document.getElementById("dbms-card");
const osCard=document.getElementById("os-card");


function showScreen(screenToShow){
    startScreen.classList.add("hidden");
    subjectScreen.classList.add("hidden");
    questionScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");

    screenToShow.classList.remove("hidden");
}

//se;ect subject

function startQuiz(questionSet){
    activeQuestion=questionSet;
    currentQuestionIndex=0;
    score=0;
    showScreen(questionScreen);
    loadQuestion();
}

//how we going to load ques on the screen

function loadQuestion(){
   

    const currentQuestion = activeQuestion[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    const totalQuestions = activeQuestion.length;

const progressPercent= (questionNumber / totalQuestions) * 100; // formula for progress bar to fill
progressfill.style.width = progressPercent + "%";

//update the question count and text

questionCountE1.textContent = `Question ${questionNumber} of ${totalQuestions}`;

questionTextE1.textContent = currentQuestion.question;


//create button to answer each question

  optionsContainer.innerHTML = "";

currentQuestion.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.textContent = optionText;
    button.classList.add("option-btn");
    button.addEventListener("click", function (){
        checkAnswer(index);
    });
    optionsContainer.appendChild(button);

  });

  nextButton.classList.add("hidden") //disable next button until an answer is selected

   startTimer();
};

//check the answer selected by the user
function checkAnswer(selectedIndex){
    clearInterval(timer);

    const currentQuestion = activeQuestion[currentQuestionIndex];
    const correctIndex = currentQuestion.correct; 

    const allOptions=document.querySelectorAll(".option-btn");

    allOptions.forEach(function(btn){
        btn.disabled=true; //disable all buttons after an answer is selected
    });

    if(selectedIndex === correctIndex){
        score++;
        allOptions[selectedIndex].classList.add("correct");
    }
    else{
        allOptions[selectedIndex].classList.add("incorrect");
        allOptions[correctIndex].classList.add("correct");
    }

    nextButton.classList.remove("hidden"); //enable next button after an answer is selected
}; 

function showResult(){
    showScreen(resultScreen);   

    const total=activeQuestion.length;
    resultScore.textContent=`You scored ${score} out of ${total}`;

    if (score===total){
        resultEmoji.textContent="🏆";
        resultTitle.textContent="Perfect";
        resultMessage.textContent="You have scored a perfect score!!";
    }
    else if(score>=(0.75*total)){
         resultEmoji.textContent="🎉";
        resultTitle.textContent="Good JOb";
        resultMessage.textContent="Great!! Keep it up!!";
    }
    else if(score >=(0.5*total)){
         resultEmoji.textContent="🙂";
        resultTitle.textContent="Good Effort";
        resultMessage.textContent="Good but revise your concepts again!!";
    }
    else{
        resultEmoji.textContent="📚";
        resultTitle.textContent="Keep Learning";
        resultMessage.textContent="You need to focus more!!";
    }
};

function restartQuiz(){
    currentQuestionIndex=0;
    score=0;
    showScreen(startScreen);
};

//add events to each element

startButton.addEventListener("click", function () {
    showScreen(subjectScreen);
    loadQuestion();
});

cCard.addEventListener("click",function(){
    startQuiz(cQuestions);
});

htmlCard.addEventListener("click",function(){
    startQuiz(htmlQuestions);
});

cssCard.addEventListener("click",function(){
    startQuiz(cssQuestions);
});

javascriptCard.addEventListener("click",function(){
    startQuiz(jsQuestions);
});
javaCard.addEventListener("click",function(){
    startQuiz(javaQuestions);
});

dbmsCard.addEventListener("click",function(){
    startQuiz(dbmsQuestions);
});

osCard.addEventListener("click",function(){
    startQuiz(osQuestions);
});



nextButton.addEventListener("click",function(){
    currentQuestionIndex+=1;

    if(currentQuestionIndex < activeQuestion.length){
        loadQuestion();
    }else{
        showResult();
    }
});
restartButton.addEventListener("click",function(){
    restartQuiz();
})

//question timer

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestionIndex++;
            if(currentQuestionIndex < activeQuestion.length){
                loadQuestion();
            }else{
                showResult();
            }
        }
    },1000);
}



