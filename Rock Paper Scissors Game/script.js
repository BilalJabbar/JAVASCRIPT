let usrScore = 0;
let compScore = 0;
let userWin = true;

let rsltTxt = document.getElementById("result")



// get the id from index.html

const choices = document.querySelectorAll(".choice")

// user selection
choices.forEach((choice)=>{

    choice.addEventListener("click", ()=>{
        // console.log("User Clicked",choice.id) 
        const userSelection = choice.getAttribute("id")
        finalResult(userSelection)
    })
    
})

// generate computer selection
const genCompSelection =() => {
    let arr = ["paper","rock","scissors"]
    let ind = Math.floor(Math.random()*3)      //create a random number from 0-2
    return arr[ind]
}

const drawGame = ()=>{ 
    
    //DRAW
    rsltTxt.innerText = "DRAW!"
    rsltTxt.style.backgroundColor = "white"
    rsltTxt.style.color = "black"

    console.log("DRAW!")
 }
const showWin = (userWin)=>{
    if (userWin){ 

        //WINNER
        rsltTxt.innerText = "You Win!"
        rsltTxt.style.backgroundColor = "green"
        rsltTxt.style.color = "white"
        
        console.log("Winner!")
        usrScore++
    }
    else { 

        //LOSER
        rsltTxt.innerText = "You Lose!"
        rsltTxt.style.backgroundColor = "red"
        rsltTxt.style.color = "white"
      
        
        console.log("LOSER!")
        compScore++
}
}
//compare the results
const finalResult = (userSelection) =>{
   

    const compSelection = genCompSelection()
    
    console.log("User -> ",userSelection)
    console.log("Comp -> ",compSelection)
    
    if (userSelection==compSelection){
        drawGame()
    }
    else{
        if (userSelection=="rock"){
            userWin = compSelection == "paper" ? false:true
        }
        else if(userSelection=="paper"){
            userWin = compSelection == "rock" ? true:false
        }
        else{
            userWin = compSelection == "rock" ? false:true
        }
        showWin(userWin)
    }
    
    //Update values with html elements
    document.getElementById("userScore").innerText = usrScore
    document.getElementById("compScore").innerText = compScore
    

    console.log("UserScore -> ",usrScore)
    console.log("CompScore ->", compScore)
   
}





