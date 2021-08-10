//Task1 - Create a 3 digit random number
var num = [];

function getRandomNumbers(count){
    for(let i=0; i < count; i++){
            num.push(Math.floor(100 + Math.random() * 900));
    }
    console.log(num);
}


getRandomNumbers(10);
