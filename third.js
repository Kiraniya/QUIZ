let question;
let form;
let res;
let qno;
var globalVariable={
      score: 0
   };

const questions = [
    {
        title : 'Identify the logo <br> <img src="insta.jpg" width="200">',
        options : [
            'Facebook',
            'Twitter',
            'Tumblr',
            'Instagram'
        ],
        answer : '3',
        score : 2
    },
    {
        title : 'Identify the logo <br> <img src="logo2.png" width="200">',
        options : [
            'MC Donalds',
            'KFC',
            'Starbucks',
            'Subway'
        ],
        answer : '0',
        score : 2
    },
    {
        title : 'Identify the logo <br> <img src="logo3.png" width="200">',
        options : [
            'xbox',
            'summary',
            'marvel',
            'All of above'
        ],
        answer : '0',
        score : 2
    },
    {
        title : 'Identify the logo <br> <img src="logo4.png" width="200">',
        options : [
            'Coke',
            'Sprite',
            'Pepsi',
            'Dr Pepper'
        ],
        answer : '2',
        score : 2
    },
    {
        title : 'Identify the logo <br> <img src="logo5.png" width="200">',
        options : [
            'Ferrari',
            'Tesla',
            'Tyota',
            'BMW'
        ],
        answer : '1',
        score : 2
    },
];

function restartScreen() {
      window.location.href = "final.html";

}
function resetradio() {
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        radio.removeAttribute("disabled");
    });
    res.setAttribute("class","idle");
    res.innerHTML = "Empty";
}

function evaluate() {
    if(form.op.value == questions[qno].answer) {
        res.setAttribute("class","correct");
        res.innerHTML = "Correct";
        score += questions[qno].score;
        return score;
    }
    else {
        res.setAttribute("class","incorrect");
        res.innerHTML = "Incorrect";
    }
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        radio.setAttribute("disabled","");
    })
}

function getNextQuestion() {
    qno++;
    ques = questions[qno];
    question.innerHTML = ques.title;
    const labels = document.querySelectorAll('label');
    labels.forEach((label, idx) => {
        label.innerHTML = ques.options[idx];
    });
}

function handleSubmit(e) {
    e.preventDefault();
    if(!form.op.value) {
        alert('Please select an option');
    }
    else if(form.submit.classList.contains('submit')) {
        evaluate();
        form.submit.classList.remove('submit');
        form.submit.value = "Next"
        form.submit.classList.add('next');
    }
    else if(qno < questions.length - 1 && form.submit.classList.contains('next')) {
        getNextQuestion();
        resetradio();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
    else if(form.submit.classList.contains('next')) {
        restartScreen();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
}
//set minutes
var mins = 8;

//calculate the seconds
var secs = mins * 60;

//countdown function is evoked when page is loaded
function countdown() {
  setTimeout('Decrement()', 60);
}

//Decrement function decrement the value.
function Decrement() {
  if (document.getElementById) {
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");

    //if less than a minute remaining
    //Display only seconds value.
    if (seconds < 59) {
      seconds.value = secs;
    }

    //Display both minutes and seconds
    //getminutes and getseconds is used to
    //get minutes and seconds
    else {
      minutes.value = getminutes();
      seconds.value = getseconds();
    }
    //when less than a minute remaining
    //colour of the minutes and seconds
    //changes to red
    if (mins < 1) {
      minutes.style.color = "red";
      seconds.style.color = "red";
    }
    //if seconds becomes zero,
    //then page alert time up
    if (mins < 0) {
      //alert('time up');
      if(!alert("time up")) document.location = 'final.html';
      minutes.value = 0;
      seconds.value = 0;
    }
    //if seconds > 0 then seconds is decremented
    else {
      secs--;
      setTimeout('Decrement()', 1000);
    }
  }
}

function getminutes() {
  //minutes is seconds divided by 60, rounded down
  mins = Math.floor(secs / 60);
  return mins;
}

function getseconds() {
  //take minutes remaining (as seconds) away
  //from total seconds remaining
  return secs - Math.round(mins * 60);
}
function init() {
    document.body.innerHTML = `
        <h1 class="quiz-heading">Quiz Round 3</h1>
        <div class="app-body">
            <div class="question-card">
            <div>
              Time Left ::
              <input id="minutes" type="text" style="width: 30px;
                border: none; font-size: 16px;
                font-weight: bold; color: black;"><font size="5"> :
                      </font>
              <input id="seconds" type="text" style="width: 30px;
                      border: none; font-size: 16px;
                      font-weight: bold; color: black;">
            </div>
                <h2 id='question'>Question</h2>
                <form>
                    <input type="radio" id="op1" name="op" value="0">
                    <label for="op1">op1</label><br>
                    <input type="radio" id="op2" name="op" value="1">
                    <label for="op2">op2</label><br>
                    <input type="radio" id="op3" name="op" value="2">
                    <label for="op3">op3</label><br>
                    <input type="radio" id="op4" name="op" value="3">
                    <label for="op4">op4</label><br>
                    <div id = "res" class="idle">Empty</div><br>
                    <input type="submit" name="submit" value = 'Submit' class = "submit"/>
                </form>
            </div>
            <button>Restart</button>
        </div>
    `;
   question = document.querySelector('#question');
   form = document.querySelector('form');
   res = document.querySelector('#res');
   qno = -1;
   score = 0;
   form.addEventListener('submit', handleSubmit);
   document.querySelector('button').addEventListener('click', init);
   getNextQuestion();
}
document.querySelector('button').addEventListener('click', init);
init();
