const input = document.querySelector("input");
const button = document.querySelector("button");
const message= document.querySelector(".message");
const myArray = ["javascript", "website", "html", "document", "course", "new"];
let click=false;
let scramble="";
let scrambled="";
let score = 0;

button.addEventListener("click", function(){
    if(!click){
        click=true;
        button.innerHTML="Guess";
        input.classList.toggle("hidden");
        scramble=makeWord();
        scrambled=makeLetter(scramble.split("")).join("");
        message.innerHTML=scrambled;
        input.value="";
        score=0;        
    }else{
        score++;
        let guess = input.value;
        if(guess === scramble){
            message.innerHTML=`Correct!<br> Total Attemps: ${score}`;
            click=false;
            button.innerHTML="Play Again";
            input.classList.toggle("hidden");
        }else{
            message.innerHTML=`${scrambled}<br>Try Again<br>Number of Attemps: ${score} `;
        }
    }
});

function makeWord(){
    randomIndex=Math.floor(Math.random()*myArray.length);
    randomWord=myArray[randomIndex];
    return randomWord;
}

function makeLetter(arr){
    for(x=arr.length-1 ;x>0; x--){
        let temp = arr[x];
        let j= Math.floor(Math.random()* (x+1));
        arr[x]=arr[j];
        arr[j]=temp;
    }
    return arr;
}