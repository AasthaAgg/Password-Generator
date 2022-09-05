var pwEl = document.getElementById('pw');
var lenEl = document.getElementById('len');
var upperEl = document.getElementById('upper');
var lowerEl = document.getElementById('lower');
var numEl = document.getElementById('num');
var symbolEl = document.getElementById('symbol');
var generateEl = document.getElementById('generate');

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+=?/";


generateEl.addEventListener("click",generatePassword);


function getUpperCase(){
    return upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
}

function getLowerCase(){
    return lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}


function generatePassword(){
    let password ="";

    if(upperEl.checked){
        password+=getUpperCase();
    }

    if(lowerEl.checked){
        password+=getLowerCase();
    }

    if(numEl.checked){
        password+=getNumber();
    }

    if(symbolEl.checked){
        password+=getSymbol();
    }

    for(let i=password.length; i<lenEl.value; i++){
        const temp = generateX()
        password += temp;
    }

    console.log(password);

    pwEl.value = password;

}


function generateX(){
    const x = [];

    if(upperEl.checked){
        x.push(getUpperCase());
    }

    
    if(lowerEl.checked){
        x.push(getLowerCase());
    }

    
    if(numEl.checked){
        x.push(getNumber());
    }

    
    if(symbolEl.checked){
        x.push(getSymbol());
    }

    return x[Math.floor(Math.random()*x.length)];

}
