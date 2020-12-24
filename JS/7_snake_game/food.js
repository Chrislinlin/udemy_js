import{onSnake, expandSnake} from './snake.js';
import{randomGridPosition} from './grid.js'

let food = getRandomFoodPosition();
const EXPANSION_RATE = 5;

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard){
    
        //loop through each 蛇的 segment，loop it and draw this to this screen，但必須先draw到gameboard.
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    
}

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}