let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');
const genCompChoice=() =>{
    //rock,paper,scissors
    const options=['rock','paper','scissors'];
    //Math.random{}
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=() =>{
    
    msg.innerText="Game was Draw. Play again. ";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=(`You win! Your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore++;
        msg.innerText=(`You lose! ${compChoice} beats Your ${userChoice}`);
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice = ", userChoice);
    //Generate computer choice in modarately function way
    const compChoice=genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            //scissors,rock
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            // users ka pas ha scissore
            //computers ka pas ha rock,paper
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    //choice.addEventListener('click, ()=>{
    //    console.log("choice was clicked")
    //}); that means jase hi choice upar clicked kiya jaya ustime he click arraw function to print the choice was clicked
    //playGame is the function
    choice.addEventListener('click', () =>{
        const userChoice=choice.getAttribute('id')
        console.log('choice was clicked',userChoice);
        playGame(userChoice);
    });
});