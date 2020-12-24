import { update as updateSnake, draw as drawSnake, snake_speed,
getSnakeHead, snakeIntersection} from './snake.js';
import{update as updateFood, draw as drawFood} from './food.js'
import{ outsideGrid} from './grid.js'


let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById('game-board');

function main(currentTime){
    if(gameOver){
        if(confirm('you lost. Press OK to restart.')){
            window.location='/';
        }
        return ;
    }

    window.requestAnimationFrame(main);
    const secondSinceLastRender =(currentTime - lastRenderTime) /1000;
    if(secondSinceLastRender < 1/snake_speed) return

    lastRenderTime = currentTime
    update();
    draw();
    
}
window.requestAnimationFrame(main)

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}
function draw(){
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
    drawFood(gameBoard);

}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}