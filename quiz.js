const quiz = document.getElementById('quiz')

 function fetchJsonFile(idx){
     fetch('./quiz.json')
     .then(res=>res.json())
     .then(json=>{
        showQuestion(json, idx)
     }
     )
 }

function showQuestion(question, idx){
    let divQ = document.createElement('h3')
    divQ.innerText = question[idx].q
    quiz.appendChild(divQ);
    question[idx].options.forEach((option, index)=>{
        let divOpContainer = document.createElement('div');

        let divOp = document.createElement('input');
        divOp.type = 'radio';
        divOp.name = `question-${question[idx].id}`; // Unique name per question for grouping radio buttons
        divOp.value = option;
        divOp.id = `option-${question[idx].id}-${index}`; // 1. option-0-0, 2. option-1-1

        let label = document.createElement('label');
        label.htmlFor = divOp.id;
        label.innerText = option;
        label.onclick = () => clicked(option, question[idx])

        divOpContainer.appendChild(divOp);
        divOpContainer.appendChild(label);
        quiz.appendChild(divOpContainer);
    }
    ) 
}

function clicked(option, question){
    console.log('clickedddd', option, question)
    if(question.ans === option){
        console.log('Congrats! You guessed right!')
        let info = document.createElement('small')
        info.innerText = 'Congrats! You guessed right!'
        info.style.color = 'green'
        quiz.appendChild(info)
    }else{
        console.log('You guessed wrong, unfortuantely!')
        let info = document.createElement('small')
        info.innerText = 'You guessed wrong, unfortuantely!'
        info.style.color = 'red'
        quiz.appendChild(info)
    }
    setTimeout(()=>{
        quiz.innerText = ''
        fetchJsonFile(1)
    }, 1500)
}

fetchJsonFile(0)