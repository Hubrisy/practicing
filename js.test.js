const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const inputThree = document.getElementById('inputThree');
const inputFour = document.getElementById('inputFour');
const inputFive = document.getElementById('inputFive');

const button = document.getElementById('register');

// let newArr = [];

// function getInfo(){
//     newArr.push(inputOne.value,inputTwo.value,inputThree.value,inputFour.value,inputFive.value);
//     console.log(newArr);
// }

// button.addEventListener('click',getInfo);

function getInfo(){
    console.log("Name:",inputOne.value)
    console.log("Last Name:",inputTwo.value)
    console.log("Email:",inputThree.value)
    console.log("Artist:",inputFour.value)
    console.log("Country:",inputFive.value)
    alert("You are successfully registered")
}

button.addEventListener('click',getInfo);