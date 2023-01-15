const questions = [
    {
        question: 'What atomic number symbolizes oxygen?',
        a: '109',
        b: '8',
        c: '16',
        d: '32',
        answer: 'b'
    }, {
        question: '20 + 100 + 420 = ?',
        a: '560',
        b: '440',
        c: '540',
        d: '450',
        answer: 'c'
    }, {
        question: 'In which year Argentina won the Football World Cup for the last time?',
        a: '2014',
        b: '2018',
        c: '2016',
        d: '2022',
        answer: 'd'
    }, {
        question: "What is the name of the baby from The Simpson's family?",
        a: 'Maggie',
        b: 'Lisa',
        c: 'Wanda',
        d: 'Bart',
        answer: 'a'
    }, {
        question: 'What colors does the Argentine flag have?',
        a: 'Blue and White',
        b: 'Sky blue, white and gold',
        c: 'Sky blue and white',
        d: 'None is correct',
        answer: 'b'
    }
];

const questionN = document.getElementById("questionN");
const questionText = document.getElementById("questionText");
const answerA = document.getElementById("answer_a");
const answerB = document.getElementById("answer_b");
const answerC = document.getElementById("answer_c");
const answerD = document.getElementById("answer_d");
const answerCheckboxA = document.getElementById("a");
const answerCheckboxB = document.getElementById("b");
const answerCheckboxC = document.getElementById("c");
const answerCheckboxD = document.getElementById("d");
const button = document.getElementById("btn");

let currentQuestion = 0;
let currentAnswerSelected =  '';
let score = 0;

const loadQuiz = () => {
    if(currentQuestion >= questions.length){
        alert(`That was the last question. You scored ${score} of 5.`);
        button.disabled = true;
        button.className = "disabledBtn";
        return null;
    }
    questionN.innerHTML = `Question (${currentQuestion + 1}/5)`;
    questionText.innerHTML = questions[currentQuestion].question;
    answerA.innerHTML = questions[currentQuestion].a;
    answerB.innerHTML = questions[currentQuestion].b;
    answerC.innerHTML = questions[currentQuestion].c;
    answerD.innerHTML = questions[currentQuestion].d;
    button.disabled = true;
    button.className = "disabledBtn";
}

loadQuiz();


const selectedAnswer = (answer) => {
    currentAnswerSelected = answer;
    // console.log("Respuesta", currentAnswerSelected);
    button.disabled = false;
    button.className = "enabledBtn";
};

const questionQuiz = () => {
    isCorrect();
    currentQuestion++;
    loadQuiz();
    resetCheckboxes();
    // console.log(currentQuestion);
};

const resetCheckboxes = () => {
    answerCheckboxA.checked = false;
    answerCheckboxB.checked = false;
    answerCheckboxC.checked = false;
    answerCheckboxD.checked = false;
};

const isCorrect = () => {
    if(currentAnswerSelected == questions[currentQuestion].answer) score++;
    console.log(`Pregunta actual: ${questions[currentQuestion].question}`);
    console.log(`Respuesta elegida: ${currentAnswerSelected}`);
    console.log(`Respuesta correcta: ${questions[currentQuestion].answer}`);
    console.log(`Acertó? ${currentAnswerSelected === questions[currentQuestion].answer}`)
};