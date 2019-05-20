$(document).ready(function() {



//The quiz

  var quizContainer = $("#quiz");
  var resultsContainer = $("#results");
  var submitButton = $("#finish");
  var lotrQuestions = [
    {
      question: "In which book does Boromir die?",
      answers: {
        a: "The Fellowship of the Ring",
        b: "The Two Towers",
        c: "The Return of the King",
        d: "The Children of Húrin",
      },
      correctAnswer: "b",
    },
    {
      question: "Who was the first Dark Lord?",
      answers: {
        a: "Morgoth",
        b: "Sauron",
        c: "Saruman",
        d: "Derigreth the Black",
      },
      correctAnswer: "a",
    },
    {
      question: "Who is Gimili's Dad?",
      answers: {
        a: "Dwalin",
        b: "Bifur",
        c: "Bofur",
        d: "Glóin",
      },
      correctAnswer: "d",
    },
    {
      question: "What is the name of Gandalf's Ring?",
      answers: {
        a: "Narya, the Kindler",
        b: "Nenya, Ring of Adamant",
        c: "Vilya, Ring of Firmanent",
        d: "Khamûl, the Despoiler",
      },
      correctAnswer: "a",
    },
    {
      question: "How old is Aragorn when he becomes king?",
      answers: {
        a: "63",
        b: "37",
        c: "46",
        d: "87",
      },
      correctAnswer: "d",
    },
    {
      question: "What do the elves call Gandalf?",
      answers: {
        a: "Eärendil",
        b: "Glorfindel",
        c: "Mithrandir",
        d: "Ilúvatar",
      },
      correctAnswer: "c",
    },
    {
      question: "What was the name of Bilbo's sword?",
      answers: {
        a: "Orcrist",
        b: "Sting",
        c: "Glamdring",
        d: "Thorn",
      },
      correctAnswer: "b",
    },
    {
      questions: "What was the password to open the Doors of Durin?",
      answers: {
        a: "Mellon",
        b: "Annon Edhellen, edro hi ammen!",
        c: "Fennas Nogothrim, lasto beth lammen.",
        d: "Erdo!",
      },
      correctAnswer: "a",
    },
    {
      question: "Who made the Silmarils?",
      answers: {
        a: "Fëanor",
        b: "Maedhros",
        c: "Fingolfin",
        d: "Finwë",
      },
      correctAnswer: "a",
    },
    {
      question: "What was the name of Minas Morgul before it fell to Mordor?",
      answers: {
        a: "Minas Anor",
        b: "Cirith Ungol",
        c: "Ephel Dúath",
        d: "Minas Ithil",
      },
      correctAnswer: "d",
    },
  ];

 function buildQuiz() {

   var output = [];
   myQuestions.forEach(
     (currentQuestion, questionNumber) => {
       var answers = [];
       for (letter in currentQuestion.answers) {
         answers.push(
           `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
         );
       };

       output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
};


 function showResults() {

 };




$("#start").click(function() {
  start();
  buildQuiz();
});

$("#finish").click(function() {
  showResults();
  stop();
});

//timer to count down time remaining in game

var intervalId;
var clockRunning = false;
var time = 90;

$("#timer").text("01:30");

function start() {
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

function count() {
    time--;
    var converted = timeConverter(time);
    console.log(converted);
    $("#timer").text(converted);
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }

  function stop() {

    clearInterval(intervalId);
    clockRunning = false;
  }





//end of game should display questions correct/incorrect 


// question and answer system



//submit button

});