let wintally= 0;
let losetally= 0;

function computerPlay(){
    const rps = ['rock','paper','scissors'];
    const random = Math.floor(Math.random()*3);
    return rps[random];
}

function updateScoreBoard(){
    const me = document.querySelector('#myScore')
    const pc = document.querySelector('#pcScore')
    me.textContent=wintally
    pc.textContent=losetally
}

function checkFinish(){
    if(losetally==5||wintally==5){
        const playagain = alert(`Game finished \n Final score YOU ${wintally} : ${losetally} PC\n`);
        wintally=0;
        losetally=0;
        updateScoreBoard();
    }
}
function addLose(){
    losetally++;
    updateScoreBoard()
    checkFinish()
}
function addWin(){
    wintally++
    updateScoreBoard()
    checkFinish()
}
function tie(){
    console.log('tie')
}
function playRound(playerSelection){
    const computerSelection = computerPlay()

    if(playerSelection=='rock'){
        if(computerSelection=='paper'){
            addLose();
            return;
        }
        if(computerSelection=='scissors'){
            addWin();
            return
        }
    }else if(playerSelection=='paper'){
        if(computerSelection=='scissors'){
            addLose();
            return
        }
        if(computerSelection=='rock'){
            addWin();
            return
        }
    }else if(playerSelection=='scissors'){
        if(computerSelection=='paper'){
            addWin();
            return
        }
        if(computerSelection=='rock'){
            addLose();
            return
        }
    }
    tie(); 
}

function createRPSButton () {
    const title = document.createElement('h2')
    const rock = document.createElement('button')
    const paper = document.createElement('button')
    const scissors = document.createElement('button')

    title.textContent = 'Pick your choice!'
    rock.textContent = 'rock'
    paper.textContent = 'paper'
    scissors.textContent = 'scissors'

    const buttonArray = [rock,paper,scissors]
    document.body.appendChild(title)
    buttonArray.forEach(button => document.body.appendChild(button))
    buttonArray.forEach(button => button.addEventListener('click',(e)=>playRound(e.target.textContent)))
}

function createScoreBoard(){

    const board = document.createElement('div')
    const subtitle = document.createElement('h1')
    const myScore = document.createElement('span')
    const vs = document.createElement('span')
    const pcScore = document.createElement('span')

    subtitle.textContent = 'Me vs PC'
    myScore.textContent = '0'
    vs.textContent = ' vs '
    pcScore.textContent = '0'

    myScore.setAttribute('id', 'myScore');
    pcScore.setAttribute('id', 'pcScore');

    board.appendChild(subtitle)
    board.appendChild(myScore)
    board.appendChild(vs)
    board.appendChild(pcScore)

    document.body.appendChild(board)
}

function game(){
    createScoreBoard();
    createRPSButton();
    document.body.setAttribute('style','text-align: center')
}