const display = document.querySelector('.result-display')
const resetBtn = document.getElementById('reset-btn')
const newGameBtn = document.getElementById('new-game-btn')
const buttons = document.querySelector('.buttons')
const playBtn = document.querySelectorAll('.play-btn')

let xTurn = true


const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


buttons.addEventListener('click' , (e) => {
    e.stopPropagation()
    if(xTurn) {
     // x turn
     e.target.innerText = 'x'
    } else {
        // o turn
        e.target.innerText = 'o'  
    }
       xTurn = !xTurn
    e.target.disabled = true
    // check whether winning codition is matched or not
    checkWinner()
})

resetBtn.addEventListener('click' , () => {
    restart()
})

newGameBtn.addEventListener('click' , () => {
    restart()
})

function restart() {
enableBtn()
}

function checkWinner() {
        winConditions.forEach((conditon) => { // condtion =   [0,1,2]
            const position1 = playBtn[conditon[0]].innerText
            const position2 = playBtn[conditon[1]].innerText
            const position3 = playBtn[conditon[2]].innerText
          const valid =   position1 != '' ? position2 != '' ? position3 != '' ? true : false : false : false
        if(valid && position1 == position2 && position2 == position3) {
            showWinner(position1)
        }
      
    })
}


function showWinner(winner) {
    display.innerText = `Congratulation Winner is ${winner}`
    disbaleBtn()
}

function disbaleBtn() {
    playBtn.forEach((btn) => btn.disabled = true)
}
function enableBtn() {
    playBtn.forEach((btn) => {
    btn.disabled = false
    btn.innerText = '' })
}