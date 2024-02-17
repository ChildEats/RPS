/*console.log("Hello world");
var name = "Tuguldur";
var age = 15;
var school = "Orchlon";
var birth_of_age = 2008
var male=true;
console.log("Minii neriig " + name +" gedeg." + " Bi" + age +" nastai. " + " Bi " + school + " gazar surdag. " + " Bi eregtei gedeg n " + male + ".")
console.log("Ta " + birth_of_age + " ond tursun.");
var nas = +prompt("Ta nasaa uruulnuu");
console.log("Tanii oruulsan nas:" + nas)
alert(nas);
var birth_year = 2024-nas;
console.log("Tanii tursun year:" + birth_year);*/
// AND && , OR ||
/*function add(number_1,number_2){
    console.log(number_1 + number_2)
}
add(2,4);*/
/*var i = 0
console.log(document);
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
var h2 = document.getElementsByTagName('h1')[1];

function changeColor(){
    h1.style.color = 'red';
    h1.innerText="Cheese"
}*/
/*var inputAge = document.getElementsByTagName('input')[0];
var result =document.getElementsByTagName('p')[0];
function age(){
    
    if(inputAge.value>=130){
        result.innerText="Not human";
        result.style.color="red"
    }else if(inputAge.value<0){
        result.innerText="Not born";
        result.style.color="yellow"
    }else{
        alert();
    }
}*/
var computer;
var playerChoice= document.querySelector(".yourChoice");
var winner = document.querySelector(".winner");
function play(player){
    if (player=="rock"){
    playerChoice.innerText="Player:rock";
}else if(player=="paper"){
    playerChoice.innerText="Player:Paper";
}else if(player=="sciccor"){
    playerChoice.innerText="Player:Scissors";
}
}
var random;
random = Math.floor(Math.random()*3);
function computerChoice(){
    if(random==0){
        computerChoice.innerText="Computer:Rock";
        computer="Rock"
    }else if (random==1){
        computerChoice.innerText="Computer:Paper";
        computer="Paper"
    }else if(random==2){
        computerChoice.innerText="Computer:Scissor";
        computer="Scissor"
    }
}
var point=0
var cpoints=0
function winner(){
    if(player=="paper" && computer=="rock"){
        points++
        winner.innerText="Result:Player wins"
    }if(player=="paper" && computer=="Scissor"){
        cpoints++
        winner.innerText="Result:Computer wins"
    }if(player=="paper" && computer=="paper"){
        alert("Tie")
        winner.innerText="Result:Tie"
    }if(player=="Scissor" && computer=="rock"){
        cpoints++
        winner.innerText="Result:Computer wins"
    }if(player=="Scissor" && computer=="papper"){
        points++
        winner.innerText="Result:Player wins"
    }if(player=="Sciisor" && computer=="Scissor"){
        alert("Tie")
        winner.innerText="Result:Tie"
    }if(player=="Rock" && computer=="rock"){
        alert("Tie")
        winner.innerText="Result:Tie"
    }if(player=="Rock" && computer=="Paper"){
        cpoints++
        winner.innerText="Result:Computer wins"
    }if(player=="Rock" && computer=="Scissor"){
        points++
        winner.innerText="Result:Player wins"
    }
Count.innerText=points
ccount.innerText=cpoints
}
var l = 0
var reset = document.getElementsByTagName('reset')[0]
function restart(){
    
}
