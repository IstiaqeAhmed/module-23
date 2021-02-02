function stopWatch(){
    let count = 0;
    return function(){
     count ++;
     return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock1());
console.log(clock2());



// kono ekta function theke arekta function call korle tara ekta closed environment touri kore. example: output dekhabe :  1 2 3 4 1 5 2 closed environment touri korse er jonne