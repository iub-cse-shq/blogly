
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




