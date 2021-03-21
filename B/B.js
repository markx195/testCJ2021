var btnStart = document.querySelector('.btnStart');
var resultData = document.querySelector('.Data');

btnStart.addEventListener('click', async () => {
    var correct_answer = [];
    const url = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";
    var response = await fetch(url)
    var datajson = await response.json();
    var data = datajson.results;
    function renderAnswer(ansInCorrect) {
        var answer = ansInCorrect.map(answer => {
            return `<button class="btn btn-secondary" ansUser="false">${answer}</button>`}).join(' ')
            return answer;
    }

    data.map(function(ques) {
    correct_answer.push(ques.correct_answer);
    resultData.innerHTML +=
     `
        <p>Difficulty: ${ques.difficulty} </p>
        <p class="question">Question: ${ques.question} </p>
        <button class="btn btn-secondary" ansUser="true">${ques.correct_answer} </button>
        ${renderAnswer(ques.incorrect_answers)} <hr/>
    `
    })


var p = 0
var right = document.getElementsByTagName('button');
    for (var i = 1; i < right.length; i++) {
        right[i].addEventListener('click', function () {
            var answerUser = this.getAttribute('ansUser');
            if(answerUser === "true"){
                p += 10;
                alert('That is good! You have: ' + p);
            }else{
                alert(' Nahhhhh. You have: '  - p);
            }
        })
    }

})
