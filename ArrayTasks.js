//Task1 - Create a 3 digit random number, Store it in an array
var num = [];

function getRandomNumbers(count){
    for(let i=0; i < count; i++){
            num.push(Math.floor(100 + Math.random() * 900));
    }
    console.log(`\nThe Original Array: ${num}\n`);
}
getRandomNumbers(10);

//Task1 - find the 2nd largest & 2nd smallest number
var arr = num;

const lar1 = Math.max(...arr);
arr.splice(arr.indexOf(lar1), 1);

const small1 = Math.min(...arr);
arr.splice(arr.indexOf(small1), 1);

console.log(`\nThe largest number is: ${lar1}\nThe smallest number is: ${small1}\n`);

console.log(`The 2nd largest number is: ${Math.max(...arr)}\nThe 2nd smallest number is: ${Math.min(...arr)}`);
