/*  Key Learnings:
    1. .outerHTML
    2. Rotate img 180 deg (line:106)
    3. Importing Google fonts
*/

let i=0, user_score=0, computer_score=0;

let round = document.querySelector('#round');
let choose = document.querySelector('#choose');
let user_choice = document.querySelector('#user_choice');
let computer_choice = document.querySelector('#computer_choice');

let user = document.querySelector('#user');
let computer = document.querySelector('#computer');
let result = document.querySelector('#result');
let final_result = document.querySelector('#final_result')


function select(){
    let r = Math.floor(Math.random() * 3) + 1
    //console.log(r);
    if(r==1){
        computer_choice.innerHTML =  `<img class="img" src="images/rock.png" alt="Rock">`;
        return 'Rock';
    }
    else if(r==2){
        computer_choice.innerHTML = `<img class="img" src="images/paper.png" alt="Paper">`;
        return "Paper";
    }
    else{
        computer_choice.innerHTML = `<img class="img" src="images/scissors.png" alt="Scissor">`;
        return "Scissor";
    }
}

function compare(a,b) {                // a=user, b=computer
    if (a === 'Scissor' && b === 'Paper'){
        result.innerHTML = `You Win! 🥳`;
        user_score++;
    }
    else if(a === 'Rock' && b === 'Paper'){
        result.innerHTML =  `You Lost! 🥺`;
        computer_score++;
    }
    else if(a === 'Rock' && b === 'Scissor'){
        result.innerHTML = `You Win! 🥳`;
        user_score++;
    }
    else if(a === 'Paper' && b === 'Rock'){
        result.innerHTML = `You Win! 🥳`;
        user_score++;
    }
    else if(a === 'Paper' && b === 'Scissor'){
        result.innerHTML = `You Lost! 🥺`;
        computer_score++;
    }
    else if(a === 'Scissor' && b === 'Rock'){
        result.innerHTML = `You Lost! 🥺`;
        computer_score++;
    }
    else{
        result.innerHTML = `It's a Draw! 😐`;
    }
}

function take_decision(){
    let decision = confirm("Want to Play again?");
    //console.log(decision);
    if(decision==false){
        setTimeout(()=>{alert("Nice Playing with You Buddy! 🙌");},300);
    }
    i=0;
    final_result.innerHTML = ``;
    user_choice.innerHTML = ``;
    computer_choice.innerHTML = ``;
    round.innerHTML = `No Rounds Yet`;
    user.innerHTML = `User: 0`;
    computer.innerHTML = `Computer: 0`;
    result.innerHTML = ``;
    user_score = 0;
    computer_score = 0;
}


choose.childNodes.forEach((b)=>{
    b.addEventListener('click',(e)=>{
        //console.log(e.target.outerHTML);
        if(round.innerHTML == `No Rounds Yet`){
            i=i+1;
            round.innerHTML = `Round: ${i}`  
        }
        else if(i<10){
            i=i+1;
            round.innerHTML = `Round: ${i}`;
        }
        user_choice.innerHTML = e.target.outerHTML;
        user_choice.firstElementChild.setAttribute('class','choices');
        let chosen = select();
        // console.log(computer_choice.outerHTML);
        computer_choice.firstElementChild.setAttribute('class','choices');
        computer_choice.firstElementChild.style.transform = 'rotateY(180deg)';   //Rotating Image 180 deg
        compare(String(e.target.alt),chosen);
        user.innerHTML = `User: ${user_score}`;
        computer.innerHTML = `Computer: ${computer_score}`;
        if(i==10){
            setTimeout(()=>{
                if(user_score>computer_score){
                    final_result.innerHTML = 'Congrats, You WON!!🥳';
                    setTimeout(take_decision,2000);
                }
                else if(user_score<computer_score){
                    final_result.innerHTML = 'Better Luck Next Time!👍';
                    setTimeout(take_decision,2000);
                }
                else{
                    final_result.innerHTML =  "It's  a  DRAW!😐";
                    setTimeout(take_decision,2000);
                } 
            },500);
        }
    })    
})



