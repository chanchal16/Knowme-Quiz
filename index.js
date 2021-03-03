var readlineSync = require('readline-sync');

var user = readlineSync.question('enter ur name \n');
console.log('welcome ' + user + ' to DO YOU KNOW Chanchal?\n');

var score = 0;

//high score data
var highScores = [{
  name:'Chanchal',
  score:'6'
},
{
  name:'Sukanya',
  score:'5'
}]

function Quiz(question,answer){
  var askQ = readlineSync.question(question);

    if(askQ.toUpperCase() === answer.toUpperCase()){
      console.log('right ans');
      score = score + 1;
      console.log('currentscore: ', score);
      console.log('-------------------');
    }else{
      console.log('wrong ans');
      console.log('-------------------');
    }
}

var questions =[{
  ques:'when is my birthday?\n ',
  ans:'may 16'
},
{
  ques:'which is my fav color? \n',
  ans:'black'
},
{
  ques:'what is my moodbuster?\n ',
  ans:'food'
},
{
  ques:'which is my fav ice-cream flavour?\n ',
  ans:'vanilla'
},
{
  ques:"what is my doggo's name?\n ",
  ans:'sweety'
},
{
  ques:'who is my fav superhero? \n',
  ans:'ironman'
}]

for(i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  Quiz(currentQuestion.ques, currentQuestion.ans);
}
console.log('Your score is:',score);

console.log('checkout the high scores:')
for(i=0; i<highScores.length; i++){
  console.log(highScores[i].name,highScores[i].score);
}

