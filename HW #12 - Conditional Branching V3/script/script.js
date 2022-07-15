"use strict";

const currentYear = new Date().getFullYear();
let ageValue = null;
let cityUser = null;
let sportUser = null;

const yearOfBorn = prompt("Please, input your year of born");

switch (true) {
    case (yearOfBorn === null || yearOfBorn === ""):
        ageValue = "You didn't input that information.";
        alert("Very sad, you didn't input year of born.");
        break;
    case (yearOfBorn !== null):
        ageValue = "Your age is " + (currentYear - (+yearOfBorn)) + ".";
        break;
}

const cityOfLife = prompt("Input the name of city where do you live");

switch (true) {
    case (cityOfLife === null || cityOfLife === ""):
        cityUser = "You didn't input that information.";
        alert("Very sad, you didn't input city where you live.");
        break;
    case (cityOfLife === "Kyiv"):
        cityUser = "You live in capital city of Ukraine.";
        break;
    case (cityOfLife === "Moscow"):
        cityUser = "You live in capital city of russia.";
        break;
    case (cityOfLife === "Minsk"):
        cityUser = "You live in capital city of Belarus.";
        break;
    default:
        cityUser = "City where you live is " + cityOfLife + ".";
}

const sportOfFav = prompt("Which type of sport do you like?");

switch (true) {
    case (sportOfFav === null || sportOfFav === ""):
        sportUser = "You didn't input that information.";
        alert("Very sad, you didn't input type of sport which you like.");
        break;
    case (sportOfFav === "Golf"):
        sportUser = "Cool, you wanna be like Tiger Woods.";
        break;
    case (sportOfFav === "Boxing"):
        sportUser = "Cool, you wanna be like Oleksandr Usyk";
        break;
    case (sportOfFav === "Football"):
        sportUser = "Cool, you wanna be like Cristiano Ronaldo";
        break;
    default:
        sportUser = "Your favourite type of sport is " + sportOfFav + ".";
}

let finalResult = ageValue + "\n\n" + cityUser + "\n\n" + sportUser;
alert(finalResult);
