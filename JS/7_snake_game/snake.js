import { getInputDirection } from "./input.js";

export const snake_speed =5;


const snakeBody =[{x:11, y:11},]; //把蛇起點固定在中間
let newSegments =0;

export function update(){
    addSegments();

    const inputDirection = getInputDirection();
    for(let i = snakeBody.length-2; i>=0 ;i--){//得到倒數第二個蛇
        snakeBody[i+1]= {...snakeBody[i]}
        }//會得到我們選的snakebody元素的前一個元素


        snakeBody[0].x =snakeBody[0].x +inputDirection.x
        snakeBody[0].y =snakeBody[0].y +inputDirection.y//+1是往下走 －１是往上走
    }

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        //loop through each 蛇的 segment，loop it and draw this to this screen，但必須先draw到gameboard.
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}
export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index ===0) return false
        return equalPositions(segment, position)
    })
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead:true})
}
export function getSnakeHead(){
    return snakeBody[0];
}

function equalPositions(pos1, pos2){
    return(
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

function addSegments(){
    for(let i =0;i<newSegments;i++){
        snakeBody.push({ ...snakeBody[snakeBody.length-1]})
        // snakeBody[snakeBody.length] = {snakeBody[snakeBody.length-1]}
    }
    newSegments =0;
}

