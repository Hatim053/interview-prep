import React, { useEffect, useRef, useState } from "react"


function GamePad() {
const INITIAL_SNAKE = [[5,5]]
const [snakeBody , setSnakeBody] = useState(INITIAL_SNAKE)
const directionRef = useRef([1,0])
const foodDirectionRef = useRef(generateFood())
const size = 15
const gameGrid = Array.from({length : size} , () => (
    Array.from({length : size} , () => '')
))


useEffect(() => {
   const intervalId = setInterval(moveSnake , 500 )
  window.addEventListener('keydown' , handleDirection)
    return () => {
   clearInterval(intervalId)
   window.removeEventListener('keydown' , handleDirection)
    }
},[])

function handleDirection(e) {
const keyPressed = e.key
if(keyPressed === 'ArrowUp' && directionRef.current[1] != 1) {
directionRef.current = [0,-1]
} else if(keyPressed === 'ArrowDown' && directionRef.current[1] != -1) {
directionRef.current = [0,1]
} else if(keyPressed === 'ArrowLeft' && directionRef.current[0] != 1) {
directionRef.current = [-1,0]
} else if(keyPressed === 'ArrowRight' && directionRef.current[0] != 1) {
directionRef.current = [1,0]
}
}

function moveSnake() {
setSnakeBody(prevSnakeBody => {
    // create a newhead and remove tail
    const newHead = [
        prevSnakeBody[0][0] + directionRef.current[0],
        prevSnakeBody[0][1] + directionRef.current[1],
    ]
    // check if snake is touching any border or itself then reset the snake body
    if(newHead[0] < 0 || newHead[0] >= size || newHead[1] < 0 || newHead[1] >= size || prevSnakeBody.some(([x,y]) => x == newHead[0] && y == newHead[1])) {
        return INITIAL_SNAKE
    }

    const copySnakeBody = prevSnakeBody.map((arr) => [...arr])
    if(newHead[0] == foodDirectionRef.current[0] && newHead[1] == foodDirectionRef.current[1]) {
        foodDirectionRef.current = generateFood() // food is eaten by snake so genrate new food and don't remove tail
    } else {
        copySnakeBody.pop() // remove tail because no food is eaten by snake
    }
    copySnakeBody.unshift(newHead)
    return copySnakeBody
})
}

function isSnakeDiv(xc,yc) {
return snakeBody.some(([x,y]) => {
    return  x==xc && y == yc
})


}

function generateFood() {
const x = Math.floor((Math.random()*15))
const y = Math.floor((Math.random()*15))
return [x,y]
}


    return (
        <>
        <div className="gameContainer">
            {gameGrid.map((row , yc) => (
            row.map((column , xc) => (
                <div key={xc} className={`column ${isSnakeDiv(xc , yc) ? 'snakeBody' : ''} ${foodDirectionRef.current[0] == xc && foodDirectionRef.current[1] == yc && 'food'}`}></div>
            ))
            ))}
        </div>
        </>
    )
}


export default GamePad