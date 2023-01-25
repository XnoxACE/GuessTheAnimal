let number = Math.floor(Math.random() * 3);
let numQuestions = 1;

const animals = ["dog", "owl", "wolf", "parrots"]
let isPet = false;
let canFly = false;
var yesInput = document.getElementById("yesButton");
var noInput = document.getElementById("noButton");


yesInput.addEventListener("click",function(event) {
	
	console.log(yesInput.value);
	askQuestions(yesInput.value);
	
});
noInput.addEventListener("click",function(event) {
	
	console.log(noInput.value);
	askQuestions(noInput.value);
	
});
function askQuestions(responce){
  

    let listNode = document.getElementById("playlist");
    let liNode = document.createElement("li");
    //let correctNode = document.createTextNode("Correct" + " you got it in " + " " + numTrys + " try(s)");
    let questionOne = document.createTextNode("Can the animal fly?");
    let questionTwo = document.createTextNode("Is the animal usually a pet?");
    let responceOne = document.createTextNode("Your Animal is a Parrot");

    if(numQuestions == 1){
        liNode.appendChild(questionOne);
        listNode.appendChild(liNode);

        if(responce == "Yes"){
            
            numQuestions+=1;
            canFly = true;
            console.log(canFly, numQuestions)
        }
        else if(responce == "No"){
            numQuestions+=1;
            canFly = false;
            console.log(canFly, numQuestions)
        }
    }
    else if(numQuestions == 2){
        console.log(questionTwo)
        liNode.appendChild(questionTwo);
        listNode.appendChild(liNode);

        if(responce == "Yes"){
            
            isPet = true;
        }
        else if(responce == "No"){
           
            isPet = false;
        }

        if(canFly == true && isPet == true){
            liNode.appendChild(responceOne);
            listNode.appendChild(liNode);
        }
    }
    



    
   

    
}
window.onload = askQuestions;
