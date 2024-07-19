const quiz = document.getElementById('quiz')
let i = 0
let score = 0;
let count = 0;
let rightChoice = 0;
let wrongChoice = 0;
let totalQuestion = 0;

 function fetchJsonFile(idx){
     fetch('./quiz.json')
     .then(res => res.json() )
     .then(json=> {
        showQuestion(json, idx)
        // console.log('json.length', json.length)
        totalQuestion = json.length
     }
     )
 }

function showQuestion(question, idx){
    let divQ = document.createElement('h3')
    divQ.innerText = question[idx]?.q
    quiz.appendChild(divQ);
    question[idx].options.forEach((option, index)=>{
        let divOpContainer = document.createElement('div');

        let divOp = document.createElement('input');
        divOp.type = 'radio';
        divOp.name = `question-${question[idx].id}`; // 1. question-0, 2. question-1 // Unique name per question for grouping radio buttons
        divOp.value = option;
        divOp.id = `option-${question[idx].id}-${index}`; // 1. option-0-0, 2. option-1-1
        divOp.onclick = () => clicked(option, question[idx])

        let label = document.createElement('label');
        label.htmlFor = divOp.id;`  `
        label.innerText = option;
        label.onclick = () => clicked(option, question[idx])
        // label.onclick = clicked() // auto clicking when start
        // label.onclick = clicked // it works only when you click on
        // label.onclick = () => clicked(option, question[idx]) // how parameters you can pass, when only you want to click

        divOpContainer.appendChild(divOp);
        divOpContainer.appendChild(label);
        quiz.appendChild(divOpContainer);
    }
    ) 
}

function clicked(option, question){
    // console.log('clickedddd', option, question)
    let infor = ''
    if(question.ans === option){
        // console.log('Congrats! You guessed right!')
        infor = 'Congrats! You guessed right!' 
        score++;
        rightChoice++
    }else{
        // console.log('You guessed wrong, unfortuantely!')
        infor = 'You guessed wrong, unfortuantely!'
        wrongChoice++
    }
    updateScoreDisplay();
    nextQuestion(infor)
    count++
    if(count===totalQuestion){
        setTimeout(() => {
            showAlert(score)
        }, 1000);
    }
}

function showAlert(sc){
    alert('Your score is '+sc)
}

function nextQuestion(info){  
    if(count+1 < totalQuestion){
        console.log('count < TotalQuestion', count+1 , totalQuestion)
        quiz.innerText = info;
        setTimeout(()=>{
            quiz.innerText = ''
            fetchJsonFile(++i)
        },1000)
    } else {
        quiz.innerText = 'Quiz endeddddddddddddddddddddddddddddddd!' 
        // quiz.style.color = "green"
        quiz.style.display = "flex"
        quiz.style.justifyContent = "center"
        quiz.style.textAlign = "center"
        quiz.style.backgroundColor = "green"
        quiz.style.fontSize = "20px"
    }
}  
function updateScoreDisplay(){
    const scoreElement =  document.querySelector('#score');
    let rightChoiceElement =  document.createElement('p')
    let wrongChoiceElement =  document.createElement('p')
    scoreElement.innerText = `score: ${score}`; 
    rightChoiceElement.innerText ='Right Choice: '+ rightChoice
    wrongChoiceElement.innerText = 'Wrong Choice: '+ wrongChoice
    scoreElement.appendChild(rightChoiceElement)
    scoreElement.appendChild(wrongChoiceElement)
}
   
document.addEventListener('DOMContentLoaded', (event) => {
    updateScoreDisplay();
    fetchJsonFile(i);
});







