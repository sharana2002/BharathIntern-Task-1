const quizData = [
    {
        question: "Who is known as the 'Run Machine' in cricket?",
        a: "Sachin Tendulkar",
        b: "Virat Kohli",
        c: "Ricky Ponting",
        d: "AB de Villiers",
        correct: "b",
    },
    {
        question: "In cricket, what does LBW stand for?",
        a: "Leg Before Wicket",
        b: "Long Boundary Width",
        c: "Last Ball Win",
        d: "Lateral Bounce Wave",
        correct: "a",
    },
    {
        question: "Which cricket team does Virat Kohli captain in international cricket?",
        a: "Australia",
        b: "England",
        c: "India",
        d: "South Africa",
        correct: "c",
    },
    {
        question: "Who holds the record for the most runs in a single Test innings?",
        a: "Don Bradman",
        b: "Brian Lara",
        c: "Sachin Tendulkar",
        d: "Virat Kohli",
        correct: "a",
    },
    
    {
        question: "Which bowler has taken the most wickets in international cricket?",
        a: "Muttiah Muralitharan",
        b: "Shane Warne",
        c: "Anil Kumble",
        d: "James Anderson",
        correct: "a",
    },
    {
        question: "Who is the only cricketer to have scored 100 international centuries?",
        a: "Sachin Tendulkar",
        b: "Ricky Ponting",
        c: "Virat Kohli",
        d: "Brian Lara",
        correct: "a",
    },
    {
        question: "In which year did India win its first Cricket World Cup?",
        a: "1983",
        b: "1992",
        c: "2003",
        d: "2011",
        correct: "a",
    },
    {
        question: "Who is known as the 'Sultan of Swing' in cricket?",
        a: "Wasim Akram",
        b: "Glenn McGrath",
        c: "Curtly Ambrose",
        d: "Dale Steyn",
        correct: "a",
    },
    
    {
        question: "What year did World War II end?",
        a: "1943",
        b: "1945",
        c: "1950",
        d: "1940",
        correct: "b",
    },
    {
        question: "Who developed the theory of relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Niels Bohr",
        correct: "b",
    },
    
];

let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
    if (total === index) {
        return quizEnd();
    }
    reset();
    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener(
    "click",
    function () {
        const data = quizData[index];
        const ans = getAnswer();
        if (ans === data.correct) {
            correct++;
            // Show correct message
            showMessage("\nCorrect!");
        } else {
            incorrect++;
            // Show incorrect message
            showMessage("\nWrong! The correct answer is " + data[data.correct]);
        }
        index++;
        // Load the next question
        loadQuestion();
    }
);

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    );
    return ans;
};

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    );
};

const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `;
};

// ...

const showMessage = (message, isCorrect) => {
    const messageBox = document.createElement("div");
    messageBox.className = "message";
    messageBox.innerText = message;

    // Apply different background colors based on correctness
   
    document.querySelector(".container").appendChild(messageBox);

    // Remove the message after a delay (e.g., 2 seconds)
    setTimeout(() => {
        messageBox.remove();
    }, 2000);
};

// ...


// Load the first question
loadQuestion(index);
