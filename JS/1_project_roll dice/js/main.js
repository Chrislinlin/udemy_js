/*------version one----------------*/
/*
const button = document.querySelector('button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const ouput = document.querySelector('#output');

button.addEventListener('click',function(){
    console.log("works")
    let rolls=[roll(6), roll(6)]

    let temp;
    if(rolls[0]===rolls[1]){temp="it was a draw"}
    else if(rolls[0]>rolls[1]){temp="player1 wins"}
    else{temp="player2 wins"}
    output.innerHTML = temp;

    console.log(rolls)
    player1.innerHTML=rolls[0];
    player2.innerHTML=rolls[1];


})
function roll(num){
    let rNumber = Math.floor(Math.random()*num+1);
    //https://www.codetable.net/decimal/9857  起點是９８５５＋數字
    let n = 9855+rNumber;
    let char = "&#"+ n +';'
    return rNumber+' '+char; //記得回傳
}
*/

/*-----version 2 -------------*/
const button = document.querySelector("button");
const output = document.querySelector(".output");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const dice = [[5],[1,9],[1,5,9],[1,3,7,9],[1,3,5,7,9],[1,3,4,6,7,9]];// 創造六個點的陣列
button.addEventListener("click", function () {
    let rolls = [roll(6),roll(6)]; // 指兩個摋子
    let temp;
    if(rolls[0] == rolls[1]){ temp="Draw"; }
    else if(rolls[0] > rolls[1]){ temp="Player 1 wins"; }
    else { temp="Player 2 wins"; }
    updateOutput(player1,rolls[0]);
    updateOutput(player2,rolls[1]);
    output.innerHTML = temp;
})

function updateOutput(el,num){
    let holder = builder(num);
    if(el.children[0]){el.children[0].remove();} //當他有大於一個小孩時就把他remove掉
    el.appendChild(holder);
}

function builder(num){
    let div = document.createElement("div"); 
    let dieArray = dice[num-1]; //把上面定義的陣列六個點放到下面來
    console.log(dieArray);
    for(let x=1;x<10;x++){
        let span = document.createElement("div");
        span.setAttribute("class","dot"); //把span這個div元素加入dot css屬性
        if(dieArray.includes(x)){ //當上面創造的陣列有x值時，span這個div元素加入black css屬性
            span.classList.add("black");    
        }
        div.appendChild(span);
    }
    div.setAttribute("class","dicer");
    return div;  //記得回傳div
}


function roll(num) {
    let rNumber = Math.floor(Math.random() * num) + 1;
    return rNumber;
}