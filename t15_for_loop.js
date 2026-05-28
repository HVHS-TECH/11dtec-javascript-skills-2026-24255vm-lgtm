/* Paste your code from the last task */
/****************************
Hello world
****************************/



console.log("Find me")

/***************************
Variables
******************************/
console.log("Variables")

var year="2026"
var name="Vaibhav"
var pocketmoney=20
var age=15
var born=2010
var isPlayer= true;
var futureage=age+10
var halfmoney=pocketmoney/2
var halfmoneyplusthree=halfmoney+3


/****************************
Main code
****************************/

console.log("Hi "+ name +" as of " + year +" you are " + age + " years old " + " I was born in " + born +" in 10 years you will be " + futureage +
    " you have " + pocketmoney + " dollars. you spend half of your money, now you have " + halfmoney + " then you get 3$, now you have " + halfmoneyplusthree);

var num1=10;
var num2=30;
var answer;

answer=num1+num2
console.log("add", answer);
answer=num1-num2
console.log("subtract", answer);
answer=num1*num2
console.log("multiply", answer);
answer=num2/num1
console.log("divide", answer);


const OUTPUT = document.getElementById("JavaScriptOutput")
OUTPUT.innerHTML = "<h2> Hi "+ name +" as of " + year +" you are " + age + " years old " + " I was born in " + born +" in 10 years you will be " + futureage +
" you have " + pocketmoney + " dollars. you spend half of your money, now you have " + halfmoney + " then you get 3$, now you have " + halfmoneyplusthree +"</h2>"

writeline()

displayproduct(" chocolate ",4);
displayproduct(" chips ", 3);
displayproduct(" drink ", 2.50);







/****************************
Functions
****************************/


function bom(){
for(var banana=99; banana>=0; banana--){
    OUTPUT.innerHTML+=("There are "+ banana +" bottles of milk on the wall.<br>")
}
}


function writeline(){
    OUTPUT.innerHTML +="<p>Welcome to the shop</p>";

}



function displayproduct(_name,_price) {
    OUTPUT.innerHTML +="<p>the"+ _name +" is " + "$" + _price +  ".</p>";
  
}

function start(){
    const OUTPUT = document.getElementById("JavaScriptOutput")
    OUTPUT.innerHTML = "<h2>hello</h2>"
}

function getFormoutput(){
    const NAME_FIELD = document.getElementById("nameField");
    const MONEY_FIELD = document.getElementById("moneyfield");
    const AGE_FIELD = document.getElementById("agefield");
    let username = NAME_FIELD.value;
    let moneyvalue = MONEY_FIELD.value;
    let agevalue = AGE_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is "+username+". You have "+moneyvalue+". You are "+agevalue+".</p>";
}



function money2(){
    const CHOCO_FIELD = document.getElementById("money2field");
    var money = CHOCO_FIELD.value;
    OUTPUT.innerHTML = "<p>"+ money +"$</p>";
    if(money < 40){
        OUTPUT.innerHTML="<h2>You're too broke</h2>"
    }
    else{
        OUTPUT.innerHTML="<h2>Ez choco for u</h2>"
    }
}



function calculatechange(){
    const OUTPUT = document.getElementById("output");
    const MONEY_FIELD = document.getElementById("moneyfield");
    let _price = 40;
    let _money =Number(MONEY_FIELD.value);
    let balance = _money - _price;
    OUTPUT.innerHTML = "<h2>You have $"+balance+" dollars left. </h2>"
    }



function randos(){
    const OUTPUT = document.getElementById("rando")
    const RANDO_FIELD = document.getElementById("randofield");
    var randoArray = ["banana","bob", "meganight", "Triple T", "IAMABHI"];
    var choice = RANDO_FIELD.value 
    OUTPUT.innerHTML = "you chose: "+randoArray[choice]+"<br>";
}
    
    
