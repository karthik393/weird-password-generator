
const passwordBox = document.getElementById("password");

// adding password's input id here

const length = 12;

// declraing the length of the password and without adding a string

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "@#$%^&*()-_+~={}[]<>/";

const allChars = upperCase + lowerCase + numbers + symbols;

// declraing all the characters used for genrating pass

function createpassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // making an empty string and then making it += each pass const with math floor,random and 
    // .length is used to track the numbers in password string. means length of a string i.e password var

while (password.length < length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
}

// this while loop is used to execute as long as the password string is as diseired as 12 char i.e less than
// when the statement is true the code inside the curly braces will work again and again. until the statement is no longer true. 

passwordBox.value = password;

// adding password to passwordbox's input
}

document.querySelector(".generate-btn").addEventListener("click", function(){
  createpassword();
  
});

document.querySelector(".copy").addEventListener("click", function(){
   passwordBox.select();
   navigator.clipboard.writeText(passwordBox.value);
});
