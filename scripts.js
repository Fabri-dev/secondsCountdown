let time;
let timerInterval;
let continueFlag=0;

const secondsEl= document.getElementById("seconds");
const pausarEl= document.getElementById("pause");
const continueEl= document.getElementById("continue");
const resetEl=document.getElementById("reset");

function modificarTiempo(){
    
    let userInput= prompt("Enter an number of seconds: "); //User input

    time = parseInt(userInput); //Validate input

    if (!isNaN(time) || time > 0) { //if is Not a Number(NaN) or is not a negative number
        startTime();
    }else{ //else error
        console.log("Invalid data");
        alert("Enter a valid data");
        
    }
    
}

function startTime(){
    timerInterval= setInterval(updateTime,1000); // start countdown
    continueFlag=1;
}

function updateTime(){
    secondsEl.innerHTML= time;
    if(time > 0){
        time--;
    }else{
        clearInterval(timerInterval);
    }
}


function pauseTime(){
    continueFlag=0;
    clearInterval(timerInterval);
}

function continueTime(){
    if(continueFlag === 0){
        continueFlag=1;
        timerInterval= setInterval(updateTime,1000); //continue countdown
    }
}

function resetTime(){
    time=0;
    continueFlag=0;
}

secondsEl.addEventListener('click',modificarTiempo);
continueEl.addEventListener('click',continueTime)
pausarEl.addEventListener('click',pauseTime);
resetEl.addEventListener('click',resetTime);



